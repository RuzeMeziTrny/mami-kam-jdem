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

export const playgroundsMatches = (inputValue, dataValue) => {
  if (inputValue === '') {
    return true;
  }

  if (typeof dataValue === 'boolean') {
    dataValue = dataValue.toString();
  }

  if (Array.isArray(dataValue)) {
    return dataValue.indexOf(inputValue) !== -1;
  }

  return inputValue === dataValue;
};
