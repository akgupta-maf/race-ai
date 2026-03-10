const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export const assetPath = (path: string): string => {
  if (!path) {
    return import.meta.env.BASE_URL;
  }

  // Keep fully-qualified URLs and data URLs untouched.
  if (ABSOLUTE_URL_PATTERN.test(path) || path.startsWith('data:')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};
