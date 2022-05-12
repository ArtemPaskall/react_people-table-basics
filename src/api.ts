export const BASE_URL
  = 'https://mate-academy.github.io/react_people-table/api/people.json';

export const getPeople = async () => {
  const peopleFromServer = await fetch(BASE_URL);

  return peopleFromServer.json();
};
