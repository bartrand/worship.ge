// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

/** Marks paragraphs preceded by 2+ blank lines (triple line break in source)
 *  with class "new-section" → no indent, vertical space above. */
function remarkSectionBreak() {
  return (tree) => {
    const children = tree.children;
    for (let i = 1; i < children.length; i++) {
      const prev = children[i - 1];
      const curr = children[i];
      if (curr.type === 'paragraph' && prev?.position && curr?.position) {
        const lineGap = curr.position.start.line - prev.position.end.line;
        if (lineGap >= 3) { // 2+ blank lines between paragraphs
          curr.data = curr.data || {};
          curr.data.hProperties = curr.data.hProperties || {};
          const existing = curr.data.hProperties.className || [];
          curr.data.hProperties.className = [...(Array.isArray(existing) ? existing : [existing]), 'new-section'];
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://worship.ge',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkBreaks, remarkSectionBreak],
  },
});
