import React, { useState , useEffect} from 'react'
import styles from "./Search.module.css"
import { useLocation } from 'react-router-dom'
import NewsCard from '../../components/newsCard/NewsCard';
const Search = () => {
    const [news,setNews]=useState("");
    const {state}=useLocation();
    console.log(state);
    const apiKey="6e7c0ea2136d4b61801e57f64b730673";
    const url=`https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${apiKey}`;
    useEffect(() => {
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setNews(data.articles))
        .catch((error)=>console.log(error));
    }, [url])
    console.log(news)
  return (
    <div className={styles.searchPage}>
        <h1>News About : <span>{state.toUpperCase()}</span></h1>
        <div className={styles.searchNews}>
            {!news && <h1>Sorry !!,The searched word did not match</h1>}
            {news && news.map((item,index)=><NewsCard key={index} {...item} />)}
        </div>
    </div>
  )
}

export default Search
