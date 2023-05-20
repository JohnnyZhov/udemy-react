import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favovites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props){
const [userFavorites, setUserFavorites] = useState([]);

function addFavoriteHandler(favoriteMeetup){
    setUserFavorites(userFavorites.concat(favoriteMeetup));
}
function removeFavoriteHandler(){}
function itemIsFavoriteHandler(){}

const context = {
    favovites: userFavorites,
    totalFavorites: userFavorites.length,
};


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}