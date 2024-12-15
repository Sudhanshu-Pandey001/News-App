import React, { useEffect, useState } from 'react'
import Card from './Card'

const News = () => {

    const [search, setSearch] = useState("india")

    const [newsData, setNewsData] = useState(null);

    const API_KEY = "d1781459928f449ca362e735fe2ae1da";

    const getData = async() => {
        const Response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await Response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(() => {
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInpt = (event) => {
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Letest News</h1>
            </div>
            <ul>
                <a href="">All News</a>
                <a href="">Trending</a>
            </ul>

            <div className="searchBar">
            <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
            <button onClick={getData}>Search</button>
            </div>
        </nav>

        <div>
            <p className='head'>Stay Update With TrendyNews</p>
        </div>

        <div className="categoryBtn">
            <button onClick={userInpt} value="sports">Sports</button>
            <button onClick={userInpt} value="politics">Politics</button>
            <button onClick={userInpt} value="entertainment">Entertainment</button>
            <button onClick={userInpt} value="health">Health</button>
            <button onClick={userInpt} value="fitness">Fitness</button>
        </div>

        <div>
            {newsData ? <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default News
