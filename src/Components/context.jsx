import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState('');

  const contextValue = {
    planets,
    setPlanets,
    filter,
    setFilter,
  };

  return (
    <AppContext.Provider value={ { ...contextValue } }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
