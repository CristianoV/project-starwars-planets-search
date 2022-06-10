import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';

function Search() {
  const { planets, setPlanetSearch,
    planetSearch, filters, setFilters } = useContext(AppContext);
  const [search, setSearch] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [columnInput, setColumnInput] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const cleanState = (teste) => {
    setSearch({
      column: teste,
      comparison: 'maior que',
      value: '0',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = () => {
    const { column, comparison, value } = search;
    const NotSumFilter = filters.some((filter) => filter.column === column);
    const filterColumn = columnInput.filter((filter) => filter !== column);
    if (!NotSumFilter) {
      setColumnInput(filterColumn);
      switch (comparison) {
      case 'maior que':
        setPlanetSearch(planetSearch
          .filter((planet) => parseInt(planet[column], 10) > value));
        break;
      case 'menor que':
        setPlanetSearch(planetSearch
          .filter((planet) => parseInt(planet[column], 10) < value));
        break;
      case 'igual a':
        setPlanetSearch(planetSearch
          .filter((planet) => planet[column] === value));
        break;
      default:
        console.log('error');
        break;
      }
      setFilters([...filters, search]);
      cleanState(filterColumn[0]);
    }
  };

  const filterInput = (e) => {
    const value = planets.filter((planet) => {
      const regex = new RegExp(e.target.value, 'gi');
      return planet.name.match(regex);
    });
    setPlanetSearch(value);
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
          {columnInput.map((column) => (
            <option key={ column } value={ column }>
              { column }
            </option>
          ))}
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
          onClick={ () => handleSubmit() }
        >
          Filtrar

        </button>
      </div>
    </>
  );
}

export default Search;
