---
sidebar_position: 3
---

# Everything Presence Lite sensor

The [Everything Presence Lite](https://shop.everythingsmart.io/products/everything-presence-lite) sensor was release in October 2023 for £28 or around $30 (plus postage) from [Everything Smart Technology](https://shop.everythingsmart.io).

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Video

https://youtu.be/HABmLjZ2mWQ

<a href="https://youtu.be/HABmLjZ2mWQ">Watch on YouTube</a>

## Features

* Precise mmWave radar motion detector
* Light luminosity (or room brightness) sensor
* WiFi
* Bluetooth repeater/Home Assistant proxy
* ESP32 (can be extended using GPIO pins)
* 3D printed case
* USB-C

## Pros

* Relatively inexpensive way to add presence, motion and room brightness data to your smart home
* Can perform automatons based on sensor data, such as turning on/off lights
* Can perform different actions/automations based on where the motion/presence was detected (zones)
* Can see through thin walls
* Can extend your Home Assistant Bluetooth range via proxy
* Good quality braided cable
* Works with Home Assistant via WiFi
* USB-C powered

## Cons

* Not always in stock since they're a relative small startup business
* Setting up different zones can be tricky, as it's a beta feature requiring trial and error defining coordinates in 3D space by using start and end X/Y millimetre values
* It's capable of detecting small movements such as breathing, however I was able to sit still long enough for it to give me a false positive and detect me as away (though sensitivity can be calibrated, to fix this)
* Only available in white

## Home Assistant automations

Note: you'll need to paste this in YAML mode then switch back to the visual editor you should then be able to update the device/light IDs.

### On - Lights on when dark & presence detected

```yml
alias: On - Lights on when dark & presence detected
description: ""
trigger:
  - platform: sun
    event: sunset
    offset: "-00:30:00"
  - type: illuminance
    platform: device
    entity_id: sensor.epl_presence_illuminance
    domain: sensor
    for:
      hours: 0
      minutes: 0
      seconds: 20
    below: 2.7
  - platform: state
    entity_id:
      - binary_sensor.epl_presence_occupancy
    to: "on"
  - platform: state
    entity_id:
      - person.DigitallyRefined
    from: not_home
    to: home
condition:
  - condition: time
    before: "21:55:00"
  - condition: device
    type: is_off
    device_id: <pick your light>
    domain: light
  - condition: or
    conditions:
      - type: is_illuminance
        condition: device
        entity_id: sensor.epl_presence_illuminance
        domain: sensor
        below: 2.7
      - condition: sun
        after: sunset
        after_offset: "-00:30:00"
  - condition: numeric_state
    entity_id: zone.home
    above: 0
  - condition: state
    entity_id: binary_sensor.epl_presence_occupancy
    state: "on"
  # Optional condition based on a Zigbee button press to prevent lights from automatically turning on again
  # (within 1 hour when they have been manually be turned off)
  - condition: template
    value_template: >-
      {{ ((as_timestamp(now()) -
      as_timestamp(states.scene.lights_off_manually_triggered.state)) > 3600) or
      (as_timestamp(states.scene.lights_on.state) >
      as_timestamp(states.scene.lights_off_manually_triggered.state)) }}
action:
  - service: scene.turn_on
    target:
      entity_id: scene.lights_on
    metadata: {}
mode: single
```

### Off - Lights (no occupancy)

```yaml
alias: Off - Lights (no occupancy)
description: ""
trigger:
  - platform: state
    entity_id:
      - binary_sensor.epl_presence_occupancy
    from: "on"
    to: "off"
condition:
  - condition: device
    type: is_on
    device_id: <pick your light>
    domain: switch
  # Optional condition to check if a Smart TV is not current being used
  - condition: not
    conditions:
      - condition: device
        domain: media_player
        entity_id: <pick your Android TV or streaming device>
        type: is_playing
action:
  - service: script.slowly_turn_off_lights_no_occupancy
    data: {}
mode: single
```

## Home Assistant scripts

### Off - Slowly turn off lights (no occupancy)

```yaml
alias: Off - Slowly turn off lights (no occupancy)
sequence:
  - if:
      - condition: state
        entity_id: binary_sensor.epl_presence_occupancy
        state: "off"
    then:
      - type: turn_off
        entity_id: <choose first light>
        domain: light
      - delay:
          hours: 0
          minutes: 0
          seconds: 10
          milliseconds: 0
      - if:
          - condition: state
            entity_id: binary_sensor.epl_presence_occupancy
            state: "off"
        then:
          - type: turn_off
            entity_id: <choose second light>
            domain: light
          - delay:
              hours: 0
              minutes: 0
              seconds: 10
              milliseconds: 0
          - if:
              - condition: state
                entity_id: binary_sensor.epl_presence_occupancy
                state: "off"
            then:
              - type: turn_off
                entity_id: <choose third light etc...>
                domain: switch
mode: single
icon: mdi:lightbulb-multiple-off-outline
```

