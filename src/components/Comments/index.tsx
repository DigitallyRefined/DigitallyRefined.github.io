import React, { JSX } from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div className="docusaurus-mt-lg">
      <Giscus
        repo="DigitallyRefined/DigitallyRefined.github.io"
        repoId="R_kgDOJUodwA"
        category="General"
        categoryId="DIC_kwDOJUodwM4C0rWH"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
