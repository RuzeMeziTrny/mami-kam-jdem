export const cutOffUrlProtocole = (web) => {
  const colonIndex = web.indexOf(':');
  if (web === '') {
    return null;
  } else if (web.length <= 30) {
    return web.slice(colonIndex + 3, web.length);
  } else {
    return `${web.slice(colonIndex + 3, 30)}...`;
  }
};
