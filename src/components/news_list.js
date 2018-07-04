import React from 'react';
import NewsItem from "./news_list_item";

const NewsList = (props) => {
  console.log(props.news);
  const items = props.news.map((item) => {
    return(
      <NewsItem key={item.id} item={item}/>
    )
  });
  
  return(
    <div>
      <div>{items}</div>
    </div>
  )
}

export default NewsList;