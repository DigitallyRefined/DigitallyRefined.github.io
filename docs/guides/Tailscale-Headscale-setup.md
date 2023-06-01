---
sidebar_position: 2
---

# Tailscale & Headscale

## Setting up your own self hosted remote access

[Headscale](https://headscale.net/) is an open source implementation of the [Tailscale](https://tailscale.com/) coordination server.

This guide will step through setting up your own self hosted private and secure remote access. This is currently my preferred setup using Tailscale clients along with a self hosted Headscale Docker container.

<TOCInline toc={toc} />

## Video

https://youtu.be/rGJ5RvB_aBg

<a href="https://youtu.be/rGJ5RvB_aBg">Watch on YouTube</a>

## Installation

### Fly.io client

```bash
sudo apt install curl
curl -L https://fly.io/install.sh | sh
```

```bash
echo 'export FLYCTL_INSTALL="$HOME/.fly"' >> ~/.bashrc
echo 'export PATH="$FLYCTL_INSTALL/bin:$PATH"' >> ~/.bashrc
```

### Fly.io deployment

```bash
mkdir fly-tunnel
cd fly-tunnel
nano fly.toml
```

Note: you can update `choose-a-subdomain-1234` and `my-user` to any value you'd like to use.

```toml
# fly.toml app configuration file
#
# See https://fly.io/docs/reference/configuration/ for information about how to use this file.
#

app = "choose-a-subdomain-1234"

[build]
  image = "ghcr.io/digitallyrefined/docker-wireguard-tunnel:v2"

[env]
  DOMAIN = "choose-a-subdomain-1234.fly.dev"
  PEERS = "1"
  SERVICES = "peer1:headscale:80:80,peer1:headscale:443:443"

[[mounts]]
  source = "wireguard_data"
  destination = "/etc/wireguard"

[[services]]
  protocol = "udp"
  internal_port = 51820

  [[services.ports]]
    port = 51820

[[services]]
  protocol = "tcp"
  internal_port = 80

  [[services.ports]]
    port = 80

[[services]]
  protocol = "tcp"
  internal_port = 443

  [[services.ports]]
    port = 443
```

### Launching the Fly.io app

[Sign up for a Fly.io account](https://fly.io/app/sign-up) (you can use a temporary credit card from [privacy.com](https://privacy.com/) in the US or [Revolut](https://www.revolut.com/) in some parts of Europe)

```bash
fly auth login
fly launch
```

Use the following options:

```
? Would you like to copy its configuration to the new app? Yes
? Choose an app name (leaving blank will default to 'choose-a-subdomain-1234') choose-a-subdomain-1234
? Choose a region for deployment: Denver, Colorado (US) (den) # Or a location closest to you
? Would you like to set up a Postgresql database now? No
? Would you like to set up an Upstash Redis database now? No
? Would you like to deploy now? Yes
? Would you like to allocate a dedicated ipv4 address now? Yes
```

### Setting up the Fly.io [docker-wireguard-tunnel](https://github.com/DigitallyRefined/docker-wireguard-tunnel)

Once the Fly.io tunnel has started, a `peer1.conf` file will be automatically generated in the `/etc/wireguard` directory, it can be viewed and then removed via:

```bash
fly ssh console
cat /etc/wireguard/peer1.conf
# Copy the contents of peer1.conf
rm /etc/wireguard/peer1.conf
```

Now we'll create a new folder called `headscale/fly-wireguard` and copy `peer1.conf` to a new file called `wg0.conf`.

```bash
mkdir -p ~/headscale/fly-wireguard
nano ~/headscale/fly-wireguard/wg0.conf
```

### Install Docker community edition via the convenience script

```bash
curl -fsSL https://get.docker.com | sudo bash
sudo usermod -aG docker $USER
```

### Configuring Headscale

Create a headscale folder, import the default configuration and tweak

```bash
cd ~/headscale
mkdir config
wget -O ./config/config.yaml https://raw.githubusercontent.com/juanfont/headscale/main/config-example.yaml
nano config/config.yaml
```

Settings to update in the `config/config.yaml` file:

```
server_url: https://choose-a-subdomain-1234.fly.dev:443
listen_addr: 0.0.0.0:443
acme_email: "you@example.com"
tls_letsencrypt_hostname: "choose-a-subdomain-1234.fly.dev"
```

```bash
nano docker-compose.yml
```

```yml
version: "2"
services:
  headscale:
    container_name: headscale
    image: headscale/headscale
    command: "headscale serve"
    restart: unless-stopped
    volumes:
      - ./config:/etc/headscale/
      - ./data:/var/lib/headscale/

  fly-wireguard-peer:
    container_name: headscale-fly-wireguard-peer
    image: ghcr.io/digitallyrefined/docker-wireguard-tunnel:v2
    restart: unless-stopped
    environment:
      # Note that DOMAIN & PEERS are not required for the peer
      # Services to expose format (comma-separated)
      # SERVICES=peer-id:peer-container-name:peer-container-port:expose-port-as
      - SERVICES=peer1:headscale:80:80,peer1:headscale:443:443
    cap_add:
      - NET_ADMIN
    links:
      - headscale:headscale
    volumes:
      - ./fly-wireguard:/etc/wireguard
```

```bash
docker compose up -d
docker compose logs -f

docker exec headscale headscale users create my-user
```

### Tailscale client custom control server URL setup

* [Windows](https://github.com/juanfont/headscale/blob/main/docs/windows-client.md)
* [macOS](https://github.com/juanfont/headscale/issues/106#issuecomment-918843218) (and create a [preauth key](#create-a-new-preauth-key))
* [Android](https://github.com/juanfont/headscale/blob/main/docs/android-client.md)
* [iOS](https://github.com/juanfont/headscale/blob/main/docs/iOS-client.md)
* [Linux](#docker-compose-setup-to-run-tailscale-on-linux)

#### Registering a new device and allowing it to join your network

```bash
docker exec headscale headscale nodes register --user my-user --key nodekey:...
```

### Docker compose setup to run Tailscale on Linux

#### Create a new preauth key

```bash
docker exec headscale headscale --user my-user preauthkeys create --expiration 1h
```

#### docker-compose.yml

```bash
mkdir ~/tailscale
cd ~/tailscale
nano docker-compose.yml
```


Add the preauth key to the `TS_AUTHKEY` environment variable

```yml
services:
  tailscale:
    container_name: tailscale
    image: tailscale/tailscale:stable
    hostname: headtailscale
    volumes:
      - ./data:/var/lib/tailscale
      - /dev/net/tun:/dev/net/tun
    network_mode: "host"
    cap_add:
      - NET_ADMIN
      - NET_RAW
    environment:
      - TS_STATE_DIR=/var/lib/tailscale
      - TS_EXTRA_ARGS=--login-server=https://choose-a-subdomain-1234.fly.dev --advertise-exit-node --advertise-routes=192.168.x.0/24 --accept-dns=true
      - TS_NO_LOGS_NO_SUPPORT=true
      # - TS_AUTHKEY=...
    restart: unless-stopped
```

```bash
docker compose up -d
docker compose logs -f

docker exec headscale headscale nodes list
docker exec headscale headscale routes list

docker exec headscale headscale routes enable -r 1
docker exec headscale headscale routes enable -r 2 # 3 etc

docker exec headscale headscale routes list
```

Now each of client should be able connect with each other and access local network resources if you have enabled `--advertise-routes=192.168.x.0/24` and also be able to use your home internet connect while you're away via Tailscale `-advertise-exit-node` argument.

## Additional resources

* [How Tailscale works](https://tailscale.com/blog/how-tailscale-works/)
* <a href="https://youtu.be/wLrmmh1eI94?t=937">Traefik HTTPS tutorial</a>

https://youtu.be/wLrmmh1eI94?t=937
