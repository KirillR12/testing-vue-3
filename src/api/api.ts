export const data = async () => {
  let responce;
  return responce = await fetch('https://rickandmortyapi.com/api/character/?page=1', {
    method: 'GET',
  }).then((res) => res.json());
};
