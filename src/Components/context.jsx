import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../Context/AppContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetSearch, setPlanetSearch] = useState('');
  const [filters, setFilters] = useState([]);

  const contextValue = {
    planets,
    setPlanets,
    planetSearch,
    setPlanetSearch,
    filters,
    setFilters,
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
