import React from 'react';

function ToggleButton(props) {
  const hidden = () => {
    const currentlyHidden =
      (props.reference.current && props.reference.current.hidden) || false;
    props.setHide(currentlyHidden);
    return currentlyHidden;
  };
  return (
    <div
      className={`toggle ${props.hide ? 'show' : ''}`}
      onClick={() => {
        props.reference.current.hidden = !hidden();
      }}
    >
      ^
    </div>
  );
}

export default ToggleButton;
