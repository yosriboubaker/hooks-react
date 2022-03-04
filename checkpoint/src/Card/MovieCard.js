import React from 'react'
import styles from "./Card.module.css"
import StarRatingComponent from 'react-star-rating-component';
import  "./Card.module.css"
import { Link } from 'react-router-dom';

const MovieCard = ({movieList, deleteFunc}) => {
  const cards = movieList.map(({img, name, description,rate,id},index)=> (
  <div className={styles.cardContainer} key={index} >
  <Link to={`${id}`}><div><img  src={img} alt=''/></div></Link>
  <div><h1>{name}</h1> </div>
  <div><h3><b style={{fontSize:"23px"}}>Description</b> : {description}</h3> </div>
  <div className={styles.rateblock}>
  <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={rate}
      /></div>
  <div className={styles.deleteBtn} onClick={(event) => deleteFunc(event, index)}> Remove film </div>
</div>))
  return (
    <div>{cards}</div> 
    )
};

export default MovieCard
 