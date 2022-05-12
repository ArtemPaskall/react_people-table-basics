import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Loader } from '../Loader/Loader';

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function addParents(peopleArray: Person[]) {
    return (peopleArray.map(person => ({
      ...person,
      mother: peopleArray.find(parent => (
        parent.name === person.motherName)) || null,
      father: peopleArray.find(parent => (
        parent.name === person.fatherName)) || null,
    })));
  }

  useEffect(() => {
    getPeople()
      .then(response => setPeople(addParents(response)))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>People page</h2>
          <PeopleTable people={people} />
        </>
      )}
    </>
  );
};
