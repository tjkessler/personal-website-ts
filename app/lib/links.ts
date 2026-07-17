/** True when href should be treated as leaving the site (or opening mail). */
export function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  );
}

/**
 * Normalize a DOI field to an absolute URL.
 * Bare identifiers become `https://doi.org/{doi}`; full http(s) URLs pass through.
 */
export function doiHref(doi: string) {
  return doi.startsWith("http://") || doi.startsWith("https://")
    ? doi
    : `https://doi.org/${doi}`;
}
