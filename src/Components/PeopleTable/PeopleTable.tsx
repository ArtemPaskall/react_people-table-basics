import React from 'react';
import { PersonRow } from '../PersonRow/PersonRow';
import './PeopleTable.scss';

type Props = {
  people: Person[]
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  return (
    <table className="table">
      <caption className="table__caption">People table</caption>
      <thead className="table__head">
        <tr>
          <th className="table__th">Name</th>
          <th className="table__th">Sex</th>
          <th className="table__th">Born</th>
          <th className="table__th">Died</th>
          <th className="table__th">Father Name</th>
          <th className="table__th">Mother Name</th>
        </tr>
      </thead>
      <colgroup>
        <col />
        <col className="table__col" />
        <col className="table__col" />
        <col className="table__col" />
        <col className="table__col" />
        <col className="table__col" />
      </colgroup>
      <tbody>
        {people.map(person => (
          <PersonRow person={person} key={person.slug} />
        ))}
      </tbody>
    </table>
  );
};
