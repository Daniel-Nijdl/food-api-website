// import React, { useEffect, useReducer, useContext } from "react";
// import { reducer } from "./reducer";

// const API_ENDPOINT = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FOOD_API_KEY}&`
// // const API_ENDPOINT = "https://collectionapi.metmuseum.org/public/collection/v1/search?"

// const initialState = {
//   objects: [],
//   query: "vase",
//   loading: true,
//   title: "",
//   artistName: "",
//   department: "",
//   culture: "",
//   artistNat: "",
//   objectName: "",
//   country: "",
//   gender: "",
// };

// const ObjectContext = React.createContext();

// export const ObjectProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchObjects = async (url) => {
//     // set loading to true
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       dispatch({ type: "SET_OBJECTS", payload: data });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleSearch = (query) => {
//     dispatch({ type: "HANDLE_SEARCH", payload: query });
//   };

//   const removeObject = (id) => {
//     dispatch({ type: "REMOVE_OBJECT", payload: id });
//   };
//   // ?  : `artistName=${state.artistName}&`
//   // ? `department=${state}&` : `culture=${state.culture}&` 
//   // ? `artistNat=${state}&` : `objectName=${state}&`
//   // ? `country=${state}&` :`gender=${state}&`

//   useEffect(() => {
//     console.log(state);
//     fetchObjects(`${API_ENDPOINT}${state.query && `title=true&q=${state.query}`}${state.artistName && `artistName=${state.artistName}&`}${state.department && `department=${state.department}&`}${state.culture && `culture=${state.culture}&`}${state.artistNat && `artistNat=${state.artistNat}&`}${state.objectName && `objectName=${state.objectName}&`}${state.country && `country=${state.country}&`}${state.gender && `gender=${state.gender}&`}`);


//     // fetchObjects(`${API_ENDPOINT}${state.query && `title=true&q=${state.query}&`}${state.artistName && `artistName=${state.artistName}&`}${state.department && `department=${state.department}&`}${state.culture && `culture=${state.culture}&`}${state.artistNat && `artistNat=${state.artistNat}&`}${state.objectName && `objectName=${state.objectName}&`}${state.country && `country=${state.country}&`}${state.gender && `gender=${state.gender}&`}`);
//     // fetchObjects(`${API_ENDPOINT}q=${state.query}`)
//   }, [
//     state.query,
//     state.title,
//     state.artistName,
//     state.department,
//     state.culture,
//     state.artistNat,
//     state.objectName,
//     state.country,
//     state.gender,
//   ]);



//   return (
//     <ObjectContext.Provider 
//     value={{ ...state, handleSearch, removeObject }}>
//       {children}
//     </ObjectContext.Provider>
//   );
// };

// export const useObjectContext = () => {
//   return useContext(ObjectContext);
// };

// import React, { useEffect, useReducer, useContext } from "react";
// import { reducer } from "./reducer";

// const API_ENDPOINT = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FOOD_API_KEY}&`;

// //the state object that holds the values for the context
// //this is used by the reducer
// const initialState = {
//   foods: [],
//   page: 0,
//   query: "react",
//   nbPages: 0,
//   loading: true,
// };

// const ArticleContext = React.createContext();

// export const ArticleProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchFoods = async (url) => {
//     //set loading to true
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       dispatch({ type: "SET_FOODS", payload: data });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const removePost = (id) => {
//     dispatch({ type: "REMOVE_POST", payload: id });
//   };

//   const handleSearch = (query) => {
//     dispatch({ type: "HANDLE_SEARCH", payload: query });
//   };

//   // const handlePage = (value) => {
//   //   dispatch({ type: "HANDLE_PAGE", payload: value });
//   // };

//   useEffect(() => {
//     fetchFoods(`${API_ENDPOINT}q=${state.query}&`);
//   }, [state.query]);

//   return (
//     <ArticleContext.Provider
//       value={{ ...state, removePost, handleSearch}}
//     >
//       {children}
//     </ArticleContext.Provider>
//   );
// };

// export const useArticleContext = () => {
//   return useContext(ArticleContext);
// };

import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
  const [query, setQuery] = useState("mustard");
  const { articles, error, loading } = useFetch(`query=${query}&`);

  return (
    <ArticleContext.Provider value={{ query, setQuery, loading, articles, error}}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
