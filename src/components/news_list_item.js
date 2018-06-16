import React from 'react';
import classes from "../css/style.css";

const NewsItem = ({item}) => {
  
  return(
    <div className={classes.news_item}>
      <h3>{item.title}</h3>
      <p>{item.feed}</p>
   </div>
  )
}

export default NewsItem;