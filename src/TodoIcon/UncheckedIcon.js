import React from 'react';
import { TodoIcon } from '.';

function UncheckedIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="unchecked"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { UncheckedIcon };
