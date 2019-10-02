import React from 'react';
import '../css/button.css';

const IdCard = (props) => {
  const { type, size, children } = props;
  const classType = 'button ' + type + ' ' + size;

  return <div className={classType}>{children}</div>;
};
export default IdCard;
