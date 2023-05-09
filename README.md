This repo reproduces a Next.js issue where client components are remounted when navigating between paths that resolve to the same dynamic segment. 

Notes:
- There is **not** a layout.tsx in the dynamic segment.
- The `page.tsx` in the dynamic segment reads the dynamic segment params (e.g. `params.slug` for `[[...slug]]` dynamic segment).
- It appears that the `key` of the `TemplateContext.Provider` for the dynamic segment changes to reflect the segment params. For example, for the dynamic segment `[[...slug]]`, it changes from `TemplateContext.Provider key="slug|first|oc"` to `TemplateContext.Provider key="slug|second|oc"` when navigating to `/first` and `/second` respectively.
- A `useEffect` in `DefaultPageContent.component.tsx` logs a message on mount and unmount. Both unmount and mount log messages can be seen on EVERY navigation. 

To demo the issue:
1. Run the project, e.g. `npm run dev`
2. Navigate using the links on the page
3. Observe console logs