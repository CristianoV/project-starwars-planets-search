import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';

function Search() {
  const { planets, setFilter } = useContext(AppContext);
  const [search, setSearch] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  // {
  //   filterByNumericValues: [
  //     {
  //       column: 'population',
  //       comparison: 'maior que',
  //       value: '100000',
  //     }
  //   ]
  // }

  const filterInput = (e) => {
    const value = planets.filter((planet) => {
      const regex = new RegExp(e.target.value, 'gi');
      return planet.name.match(regex);
    });
    setFilter(value);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { column, comparison, value } = search;
    switch (comparison) {
    case 'maior que':
      setFilter(planets.filter((planet) => parseInt(planet[column], 10) > value));
      break;
    case 'menor que':
      setFilter(planets.filter((planet) => parseInt(planet[column], 10) < value));
      break;
    case 'igual a':
      setFilter(planets.filter((planet) => planet[column] === value));
      break;
    default:
      console.log('error');
      break;
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          data-testid="name-filter"
          onChange={ (event) => {
            filterInput(event);
          } }
        />
      </div>
      <div>
        <select
          name="column"
          id=""
          data-testid="column-filter"
          onChange={ (e) => handleChange(e) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          id=""
          data-testid="comparison-filter"
          onChange={ (e) => handleChange(e) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          id=""
          data-testid="value-filter"
          value={ search.value }
          onChange={ (e) => handleChange(e) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ (e) => handleSubmit(e) }
        >
          Filtrar

        </button>
      </div>
    </>
  );
}

export default Search;
