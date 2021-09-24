import { useState, useEffect } from "react";
const API_ENDPOINT = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.REACT_APP_FOOD_API_KEY}&`;

// ========================================================================== //
//? searchQuery will be something like &q=cheese
// ========================================================================== //

export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [articles, setArticles] = useState([]);

  // ========================================================================== //
  //? url is always the API_ENDPOINT + the searchQuery
  // ========================================================================== //

  const fetchArticles = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      // ========================================================================== //
      //maybe add || movies
      // ========================================================================== //

      setArticles(data.foods || data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchArticles(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return { loading, error, articles };
};
