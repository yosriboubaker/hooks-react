import React from 'react'
import styles from "./Card.module.css"
import StarRatingComponent from 'react-star-rating-component';
import  "./Card.module.css"
const MovieCard = ({movieList, type, deleteFunc}) => {
  const cards = movieList.map(({img, name, description,rate},index)=> (
  <div className={styles.cardContainer} key={index} style={{backgroundColor: type === "arabic" ? "pink":'lightgreen'}}>
  <div><img  src={img} alt=''/></div>
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
 