import '../styles/Pets-news.css';

import {
  useEffect,
  useState,

} from 'react';

import axios from 'axios';

const PetsNews = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (perPage = 4) => {
    setLoading(true);
    try {
      const API_KEY = "54021536-dcf561e7ed11353144e71127c";

      const url = `https://pixabay.com/api/?key=${API_KEY}&q=pets&image_type=photo&per_page=${perPage}&page=${page}`;

      const response = await axios.get(url);

      if (response.data?.hits) {
        setImages(prev => [...prev, ...response.data.hits]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Помилка запиту:", error.message);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchImages(4);
  }, [useEffect]);

  return (
    <div className="PetsNews-container">
      <p className="PetsNews-heading">
        Interacting with our pets
      </p>


      <ul className="PetsNews-list">

        {images.map(img => (
          <li key={img.id}>   <div className="PetsNews-img-wrapper">   </div>
            <img className="PetsNews-img" src={img.webformatURL} alt={img.tags} />
            <p className="PetsNews-list-text"> {img.tags
              .split(', ')
              .slice(0, 10)
              .join(', ')}</p>
          </li>

        ))}
      </ul>

      <button
        className="PetsNews-btn"
        onClick={() => fetchImages(8)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'See More'}
      </button>
    </div>
  );
};

export default PetsNews;