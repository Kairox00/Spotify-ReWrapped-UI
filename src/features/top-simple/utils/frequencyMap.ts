export const getTopRecurringElements = (list: string[], limit = 5) => {
  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }

  const frequencyMap = list.reduce((map: any, element) => {
    map[element] = (map[element] || 0) + 1;
    return map;
  }, {});

  const frequencyArray = Object.entries(frequencyMap);

  frequencyArray.sort(
    (a: any, b: any) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  return frequencyArray.slice(0, limit).map(([element]) => element);
};

export const getTopRecurringAlbums = (albums: any[]) => {
  const albumsMap = albums.reduce((map: any, album) => {
    map[album.id] = album;
    return map;
  }, {});
  const albumsIds = albums.map((album) => album.id);
  const topAlbumsIds = getTopRecurringElements(albumsIds, 10);
  const topAlbums = topAlbumsIds.map((id) => albumsMap[id]);
  return topAlbums;
};
