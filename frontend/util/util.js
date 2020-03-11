export const shuffle = (a) => {
  a.forEach( (el, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  });
  return a;
};

export const searchAll = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/movies',
    data: {query}
  });

};