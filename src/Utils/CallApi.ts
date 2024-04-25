export const callApi = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};
