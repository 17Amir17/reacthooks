import React, { createContext } from 'react';

export const CountryContext = createContext();

export default class CountryContextProvider extends React.Component {
  state = {
    country: null,
  };

  setCountry = (country) => {
    this.setState({ country });
  };

  render() {
    return (
      <CountryContext.Provider
        value={{ ...this.state, setCountry: this.setCountry }}
      >
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}
