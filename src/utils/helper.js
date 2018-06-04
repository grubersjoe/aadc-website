export function getRootPath() {
  let rootPath = '/';
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`;
  }
  return rootPath;
}

export function onBlog(match, location) {
  const postUrlRegex = /\/\d{4}\/\d{2}\/.+$/;
  return location.pathname === getRootPath() || postUrlRegex.test(location.pathname);
}

export function isSubpage(location) {
  const pathPrefix = new RegExp(`^${getRootPath()}`);
  return location.pathname.replace(pathPrefix, '').split('/').length > 1;
}
