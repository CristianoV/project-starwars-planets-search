import { useContext, React, useEffect } from 'react';
import AppContext from '../Context/AppContext';

function Table() {
  const { planets, setPlanets, planetSearch, setPlanetSearch } = useContext(AppContext);
  const { filters } = useContext(AppContext);

  useEffect(() => {
    if (planets.length === 0) {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((data) => setPlanets(data.results))
        .catch((error) => console.log(error));
    }
  }, [planets, setPlanets]);

  useEffect(() => {
    setPlanetSearch(planets);
  }, [planets, setPlanetSearch]);

  const teste = (filtered) => filtered.map((planet, index) => (
    <tr key={ index }>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  ));

  return (
    <div>
      {filters.length > 0 && filters.map((asd, index) => (
        <div key={ index }>
          <p>{asd.column}</p>
          <p>{asd.comparison}</p>
          <p>{asd.value}</p>
          <button type="button" onClick={ () => (console.log(asd)) }>Excluir</button>
        </div>
      ))}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>

          {planetSearch && teste(planetSearch)}
        </thead>
      </table>
    </div>
  );
}

export default Table;
