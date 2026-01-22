import '../styles/Pets-news.css';

import {
  useEffect,
  useState,
  useRef
} from 'react';

import axios from 'axios';

/* const getValidDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
}; */
const PetsNews = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
const isFetched = useRef(false);
  const fetchImages = async (perPage =4) => {
    setLoading(true);
    try {
    /*   const API_KEY = "54021536-dcf561e7ed11353144e71127c";
      const fromDate = getValidDate();
const url = `https://newsapi.org/v2/everything?q=pets&from=${fromDate}&sortBy=publishedAt&pageSize=${perPage}&page=${page}&apiKey=${API_KEY}`; */
const url = `https://api.thecatapi.com/v1/images/search?limit=${perPage}&page=${page}&order=DESC`;

      const response = await axios.get(url);

 if (Array.isArray(response.data)) {
        setImages(prev => [...prev, ...response.data]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Помилка запиту:", error.message);
    } finally {
      setLoading(false);
    }

  };
  
useEffect(() => {
   
    if (!isFetched.current) {
      fetchImages(4);
      isFetched.current = true; 
    }
  }, [useEffect]);

  return (
    <div className="PetsNews-container">
      <p className="PetsNews-heading">
        Interacting with our pets
      </p>


      <ul className="PetsNews-list">

        {images.map(img => (
         <li key={`${img.id}`}>
            <div className="PetsNews-img-wrapper">
                <img className="PetsNews-img" src={img.url} alt="A cute cat" />
            </div>
            <p className="PetsNews-list-text">Cat ID: {img.id}</p>
          </li>

        ))}
      </ul>

      <button
        className="PetsNews-btn"
        onClick={() => fetchImages(4)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'See More'}
      </button>
    </div>
  );
};

export default PetsNews;