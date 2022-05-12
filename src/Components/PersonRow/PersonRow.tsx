import React from 'react';

type Props = {
  person: Person
};

export const PersonRow: React.FC<Props> = ({ person }) => {
  return (
    <tr>
      <td className="table__td">{person.name}</td>
      <td className="table__td">{person.sex}</td>
      <td className="table__td">{person.born}</td>
      <td className="table__td">{person.died}</td>
      <td className="table__td">{person.fatherName}</td>
      <td className="table__td">{person.motherName}</td>
    </tr>
  );
};
