import React from 'react';

function ClearButton(props) {
  const show = () => {
    return (props.reference.current && props.reference.current.value) || false;
  };
  const clear = () => {
    if (props.reference.current && props.reference.current.value) {
      props.reference.current.value = '';
      props.update({ target: { value: '' } });
    }
  };

  return (
    <div
      className={`toggle`}
      onClick={() => {
        clear();
      }}
      style={{ visibility: show() ? 'initial' : 'hidden' }}
    >
      x
    </div>
  );
}

export default ClearButton;
