import React, { type ReactNode } from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import Comments from '@site/src/components/Comments';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <Footer {...props} />
      {isBlogPostPage && <Comments />}
    </>
  );
}
