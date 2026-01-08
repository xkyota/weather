import '../styles/Pets-news.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PetsNews = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (perPage = 12) => {
        setLoading(true);
        try {
            const API_KEY = "54021536-dcf561e7ed11353144e71127c";
            const url = `https://api.pixabay.com/api/?key=${API_KEY}&q=pets+news&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}`;


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
        fetchImages(3);
    }, []);

    return (
        <div className="PetsNews-container">
            <p className="PetsNews-heading">
                Interacting with our pets
            </p>


            <ul className="PetsNews-list">

                {images.map(img => (
                    <li key={img.id}>
                        <img src={img.webformatURL} alt={img.tags} />
                        <p className="PetsNews-list-text"> INF from API</p>
                    </li>

                ))}
            </ul>

            <button
                className="PetsNews-btn"
                onClick={() => fetchImages(12)}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'See More'}
            </button>
        </div>
    );
};

export default PetsNews;
