import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Favorites</h1>
      <div className='card-grid'>
        {state.favorites.map(fav => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} isFavorite={true} />
        ))}
      </div>
    </main>
  );
}

export default Favs;
