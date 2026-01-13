import '../styles/Pets-news.css';
import { useState, useEffect , useRef} from 'react';
import axios from 'axios';


const PetsNews = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
 const isFirstRender = useRef(true);

  const fetchArticles = async () => {
    setLoading(true);

    try {
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2025-12-13&sortBy=publishedAt&apiKey=def3cafde44247a29f912ff9b1dc7d87`;
      const response = await axios.get(url, {
        params: {
         
          pageSize: 4,
          page: page,

        },
      
      });
  
      if (response.data?.articles) {
        setArticles(prev => [...prev, ...response.data.articles]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Помилка запиту:', error.message);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      fetchArticles();
    }
  }, []);

   const showText = (text,limit) =>{
    if(!text) return "";
    const words = text.split(" "); 
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  } 

  return (
    <div className="PetsNews-container">
      <p className="PetsNews-heading">Interacting with our pets</p>

      <ul className="PetsNews-list">
        {articles.map(article => (
          <li key={article.url}>
           
              <img  className="PetsNews-list-img" src={article.urlToImage} alt={article.title} />
            
            <p className="PetsNews-list-text">
   { showText((article.description),10) } 
            </p>
          </li>
        ))}
      </ul>

      <button
        className="PetsNews-btn"
        onClick={fetchArticles}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'See More'}
      </button>
    </div>
  );
};

export default PetsNews;
