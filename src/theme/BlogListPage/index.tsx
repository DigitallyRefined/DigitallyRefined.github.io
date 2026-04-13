import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type { Props } from '@theme/BlogListPage';

import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import DocCardLayout from '@theme/DocCard/Layout';

function BlogCardList({ items }: { items: PropSidebarItemLink[] }) {
  return (
    <section className="row">
      {items.map((item) => (
        <article className="col col--6 margin-bottom--lg" key={item.href}>
          <DocCardLayout
            item={item}
            href={item.href}
            title={item.label}
            description={item.description}
            icon="📄️"
          />
        </article>
      ))}
    </section>
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

      <BlogCardList
        items={items.map(({ content: BlogPostContent }) => ({
          type: 'link',
          href: BlogPostContent.metadata.permalink,
          label: BlogPostContent.metadata.title,
          description: BlogPostContent.metadata.description,
        }))}
      />

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
