import React from 'react';
import { ReactComponent as CheckSVG } from './check2.svg';
import { ReactComponent as DeleteSVG } from './delete2.svg';
import { ReactComponent as UncheckedSVG } from './check2.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
  "unchecked": color => (
    <UncheckedSVG className="Icon-svg Icon-svg--unchecked" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
