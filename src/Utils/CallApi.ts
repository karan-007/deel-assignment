export const CallApi = (url: string) => {
  return fetch(url).then((res) => res.json());
};
