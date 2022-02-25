import React,{useState} from 'react'

import styles from './Filter.module.css'



const Filter = ({filteration,filterationRate}) => {
    const [filter,setFilter] = useState("");
  


    const filterhandler = (e) =>{
        const name = e.target.value;
        setFilter(name)
        filteration(name)
    }
   
  return( 
      <div className={styles.mp}>
      <input  type="text" placeholder="search movies by Title" value={filter} onChange={filterhandler}/>
      
      
      <div className={styles.rateblock}>
     
      </div></div>
  )
}

export default Filter
