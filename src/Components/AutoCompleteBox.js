import ToggleButton from './ToggleButton';
import React, { useState, useEffect, useContext } from 'react';
import OptionsDropdown from './OptionsDropdown';
import Countries from '../data/Countries';
import { CountryContext } from '../Contexts/CountryContext';
import ClearButton from './ClearButton';
import useStateAndRef from '../Hooks/useStateAndRef';

function AutoCompleteBox() {
  const context = useContext(CountryContext);
  const [countries, setCountries, dropdownRef] = useStateAndRef(Countries);
  const [hide, setHide, inputRef] = useStateAndRef(
    (dropdownRef.current && dropdownRef.current.hidden) || false
  );
  const [country, setCountry] = useState(null);

  const inputChanged = (e) => {
    const input = e.target.value.toLowerCase();
    dropdownRef.current.hidden = false;
    setHide(true);
    setCountries(
      Countries.filter((c) => {
        return (
          c.name.toLowerCase().match(input) ||
          String(c.code).toLowerCase().match(input)
        );
      })
    );
  };

  useEffect(() => {
    dropdownRef.current.hidden = true;
  }, []);

  useEffect(() => {
    setCountry(countries[0]);
  }, [countries]);

  useEffect(() => {
    context.setCountry(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <div className="autocompletebox">
      <div className="input">
        <input
          ref={inputRef}
          className="inputbox"
          onChange={inputChanged}
          type="text"
        ></input>
        <ClearButton reference={inputRef} update={inputChanged} />
        <ToggleButton reference={dropdownRef} hide={hide} setHide={setHide} />
      </div>
      <OptionsDropdown
        countries={countries}
        reference={dropdownRef}
        inputRef={inputRef}
      />
      <p>
        Current:
        {(context && context.country && context.country.name) || ' none'}
      </p>
    </div>
  );
}

export default AutoCompleteBox;
