import React, { JSX } from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Comments from '@site/src/components/Comments';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function FooterWrapper(
  props: React.ComponentProps<typeof Footer>
): JSX.Element {
  const { metadata } = useDoc();
  const hideComments = metadata.frontMatter.hide_comments;

  return (
    <>
      <Footer {...props} />
      {!hideComments && <Comments />}
    </>
  );
}
