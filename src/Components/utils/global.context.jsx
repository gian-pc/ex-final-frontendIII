import React, { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = { theme: localStorage.getItem('theme') || 'light', dentists: [], favorites: [] };

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme);
      document.body.classList.remove(state.theme);
      document.body.classList.add(newTheme);
      return { ...state, theme: newTheme };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      if (state.favorites.some(fav => fav.id === action.payload.id)) {
        return state; // No agregar duplicados
      }
      const updatedFavoritesAdd = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
      return { ...state, favorites: updatedFavoritesAdd };
    case "REMOVE_FAVORITE":
      const updatedFavoritesRemove = state.favorites.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
      return { ...state, favorites: updatedFavoritesRemove };
    case "LOAD_FAVORITES":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'LOAD_FAVORITES', payload: storedFavorites });

    // Aplicar el tema almacenado en localStorage al cargar la aplicación
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(storedTheme);
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
