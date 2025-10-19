import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoriesNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data);
  // console.log(id);
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
      return;
    }
  }, [data, id]);
  return (
    <div>
      {" "}
      <div className="font-bold">Total Categories -{categoryNews.length} </div>
      <div className="grid grid-cols-1 gap-5 py-5">
        {categoryNews.map((news, index) => (
          <NewsCard key={index} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoriesNews;
