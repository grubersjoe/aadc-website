export function getRootPath() {
  let rootPath = '/';
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`;
  }
  return rootPath;
}

export function getPageTitle(data) {
  return data.site.siteMetadata.title;
}

export function onPostPage(location) {
  const postUrlRegex = /\/\d{4}\/\d{2}\/.+$/;
  return postUrlRegex.test(location.pathname);
}

export function onBlogPage(match, location) {
  return location.pathname === getRootPath() || onPostPage(location);
}

export function onTeamPage(location) {
  return location.pathname.includes('team');
}
