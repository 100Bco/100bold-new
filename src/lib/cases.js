/* Case study pages that are published. Add a path here once its page has real content;
   until then, cards show the summary without a link to an empty page. */
export const publishedCases = []
export const isLive = (to) => !!to && publishedCases.includes(to)
