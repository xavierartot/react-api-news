import React from 'react';

const NewSingle = ({item}) => {
  return (
    <li key={item.id}>
      <p>{item.title}</p>
    </li>
  );
};
export default NewSingle;

