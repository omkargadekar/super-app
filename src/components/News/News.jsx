import axios from "axios";
import React, { useEffect, useState } from "react";
import "./news.css";

const NEWS_URL =
  "https://newsdata.io/api/1/news?apikey=pub_309538a30943aee1c22e9b5e64fe75c1845ad&q=pizza";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(NEWS_URL);
        setNewsData(response.data.results);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const randomArticle =
    newsData.length > 0
      ? newsData[Math.floor(Math.random() * newsData.length)]
      : null;

  return (
    <>
      {randomArticle && (
        <div className="news">
          <div className="articleImgContainer">
            <img
              className="articleImg"
              src={randomArticle.image_url}
              alt="newsImg"
            />
            <div className="articleTitle">
              <h4 className="articleDate">{randomArticle.title}</h4>
              <p className="articleDate">{randomArticle.pubDate}</p>
            </div>
          </div>

          {randomArticle.content && (
            <div className="article-content">
              <p className="articleContent">{randomArticle.content}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default News;
