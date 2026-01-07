import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogListPage';

import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import docCardStyles from '@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css';

function BlogCard({
  permalink,
  title,
  description,
}: {
  permalink: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={permalink}
      className={clsx('card', 'padding--lg', docCardStyles.cardContainer)}
      style={{
        // Mimic DocCard's styles.cardContainer behavior if needed,
        // but 'card' class handles most of it in standard Infima.
        // We can add a bit of hover effect if standard card doesn't have it fully.
        height: '100%',
        textDecoration: 'none',
      }}
    >
      <Heading
        as="h2"
        className={clsx('text--truncate', docCardStyles.cardTitle)}
        title={title}
      >
        📄️ {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', docCardStyles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
    </Link>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const { metadata, items } = props;
  return (
    <BlogLayout>
      <header className="hero hero--primary heroBanner_src-pages-index-module">
        <div className="container">
          <h1 className="hero__title">
            Digitally
            <wbr />
            Refined
          </h1>
          <p className="hero__subtitle">
            Guides on: Homelab, tech projects, reviews & web development
          </p>
        </div>
      </header>

      <h2>Latest posts</h2>

      <section className="row">
        {items.map(({ content: BlogPostContent }) => (
          <article
            className="col col--6 margin-bottom--lg"
            key={BlogPostContent.metadata.permalink}
          >
            <BlogCard
              permalink={BlogPostContent.metadata.permalink}
              title={BlogPostContent.metadata.title}
              description={BlogPostContent.metadata.description}
            />
          </article>
        ))}
      </section>
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
