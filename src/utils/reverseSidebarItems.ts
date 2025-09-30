import type { NormalizedSidebar } from '@docusaurus/plugin-content-docs/src/sidebars/types.ts';

// Reverse the sidebar items ordering (including nested category items)
export const reverseSidebarItems = (items: NormalizedSidebar) => {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: reverseSidebarItems(item.items) };
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
};
