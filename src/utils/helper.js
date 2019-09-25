export function getRootPath() {
  let rootPath = '/';
  if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`;
  }

  return rootPath;
}

export function onHomepage(location) {
  return location.pathname === getRootPath();
}

export function onPostPage(location) {
  const postUrlRegex = /\/\d{4}\/\d{2}\/.+$/;

  return postUrlRegex.test(location.pathname);
}

export function getPageTitle(data) {
  return data.site.siteMetadata.title;
}

export function getAvatarFor(data, name) {
  const match = data.edges.find(obj => obj.node.name.toLowerCase() === name.toLowerCase());

  return match ? match.node : null;
}
