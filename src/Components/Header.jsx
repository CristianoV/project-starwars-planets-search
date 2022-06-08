import React from 'react';

function Header() {
  return (
    <header style={ { display: 'flex', justifyContent: 'center' } }>
      <a href="/">
        <img
          style={ { width: '100px' } }
          src="https://as1.ftcdn.net/v2/jpg/04/83/17/24/1000_F_483172477_ntqtMZBzb5FsykRSlc8LI8zATN7HYYXv.jpg"
          alt="logo"
        />
      </a>
      <h1 style={ { alignItems: 'center' } }>
        Starwars Planets Search
      </h1>
    </header>
  );
}

export default Header;
