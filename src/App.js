import React from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import Provider from './Components/context';
import Search from './Components/Search';

function App() {
  return (
    <Provider>
      <Header />
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
