import React from "react";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: [(favoriteMeetup) => {}],
  removeFavorite: [(meetupId) => {}],
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritehandler(favoriteMeetup) {
    setUserFavorites(prevUserFavourites => {
      return prevUserFavourites.concat(favoriteMeetup);
    });
  }

  function removeFavoritehandler(meetupId) {
    setUserFavorites(prevUserFavourites => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    });
  }
  function itemIsFavoritehandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritehandler,
    removeFavorite: removeFavoritehandler,
    itemIsFavorite: itemIsFavoritehandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
