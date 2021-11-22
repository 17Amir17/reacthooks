import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountryContext } from '../Contexts/CountryContext';

function OptionsDropdown(props) {
  const context = useContext(CountryContext);

  function handleClick(e) {
    if (e.target.tagName === 'LI') {
      context.setCountry({
        name: e.target.dataset.country,
        code: e.target.dataset.code,
      });
      props.inputRef.current.value = e.target.dataset.country;
    }
  }

  return (
    <ul ref={props.reference} className="dropdown" onClick={handleClick}>
      {props.countries.map((c) => {
        return <Option country={c.name} code={c.code} key={c.code} />;
      })}
    </ul>
  );
}

function Option(props) {
  return (
    <li
      className={'option'}
      data-country={props.country}
      data-code={props.code}
    >
      <img src={getFlag(props.code)} alt={'🏴‍☠️'}></img> {props.country} -{' '}
      {props.code}
    </li>
  );
}

function getFlag(countryCode) {
  return 'https://flagcdn.com/w40/' + countryCode.toLowerCase() + '.png';
}

export default OptionsDropdown;
