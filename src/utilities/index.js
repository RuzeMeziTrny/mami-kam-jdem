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

/* filter functions for playgrounds */

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

export const filterItemsPlaygrounds = (place, playgroundsFilters) => {
  if (!playgroundsMatches(playgroundsFilters.elements, place.elements)) {
    return false;
  }
  if (!playgroundsMatches(playgroundsFilters.shadow, place.shadow)) {
    return false;
  }
  if (!playgroundsMatches(playgroundsFilters.toys, place.toys)) {
    return false;
  }
  if (!playgroundsMatches(playgroundsFilters.surface, place.surface)) {
    return false;
  }
  return true;
};

/* filter function for groups */

export const filterItemsGroups = (place, type) => {
  if (type === '') {
    return true;
  }
  if (place.type.indexOf(type) !== -1) {
    return true;
  }
  return false;
};

/* filter function for doctors */

export const filterItemsDoctors = (place, speciality) => {
  if (speciality === '') {
    return true;
  }
  if (speciality === place.type) {
    return true;
  }
  return false;
};
