import React from 'react'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents()

// Ensure TOC (or similar arrays of items) have unique ids so React keys
// derived from them don't collide.
function ensureUniqueIds(items) {
  if (!items) return items
  const seen = new Set()

  function walk(list) {
    return list.map((item, idx) => {
      const copy = { ...item }
      // prefer explicit id, then url, then text, then index
      let id = copy.id ?? copy.url ?? copy.text ?? String(idx)
      id = String(id)
      if (seen.has(id)) {
        let i = 1
        while (seen.has(id + '-' + i)) i++
        id = id + '-' + i
      }
      seen.add(id)
      copy.id = id
      if (copy.children) copy.children = walk(copy.children)
      return copy
    })
  }

  return walk(items)
}

// Custom wrapper that fixes `toc` (and similar) before passing to theme wrapper
function Wrapper(props) {
  const { toc, ...rest } = props
  const fixedToc = Array.isArray(toc) ? ensureUniqueIds(toc) : toc
  const ThemeWrapper = themeComponents.wrapper || ((p) => p.children)
  return React.createElement(ThemeWrapper, { ...rest, toc: fixedToc })
}

// Merge components, letting user-supplied components override defaults.
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    wrapper: components?.wrapper ?? Wrapper,
    ...components
  }
}