import React, {useState} from 'react'
import MovieCard from './Card/MovieCard'
import Filter from './filter/Filter';

import photo1 from './img/Ballad of a White Cow.jpg'
import photo2 from './img/The Girl in the Yellow Jumper (2020).jpg'
import photo3 from './img/Clean (2020).jpg'
import photo4 from './img/Trash(2020).jpg'
import photo5 from './img/مشكي و عاود 2020.jpg'


const MovieList = () => {
  //-----RATE---------------
  
//---------------------

  const [cardToggle, setCardToggle]= useState(true)
  const [filter,setFilter] = useState("")
  
//-------------add movie------------------------------------
    const [addNameMovie,setaddNameMovie] = useState("");
    const [addDescMovie,setAddDescMovie] = useState("");
    const [addRateMovie,setAddRateMovie] = useState("");

    //----------------------------------------

  const [state, setState]= useState([
    { 
    img:photo1,
    name:"Ballad of a White Cow",
    description:"Mina's life is turned upside down when she learns that her husband was innocent of the crime for which he was executed, so she starts a silent battle against a cynical system for her own and her daughter's sake.",
    rate:4  
    },
    {  
       img:photo2,
     name:"The Girl in the Yellow Jumper",
       description:"A man reappears after being kidnapped, but you'd never believe his story. ",
       rate:3
    },
    {  img:photo3,
        name:"Clean",
         description:"Tormented by his past, a garbage man named Clean attempts a quiet life of redemption. But, soon finds himself forced to reconcile with the violence of his past.",
         rate:2
        },
         {  
            img:photo4,
          name:"Trash",
            description:"Boxes, bottles, cans. Garbage. Abandoned, ignored, inert. Until nightfall. Slim is a resigned cardboard box. but his fate changes when a kid toy box, Spark, involves him and his pals in an adventure that will change their life foreve",
            rate:5
         }])
       const arabicMovies=[
                    {  img:photo5,
                        name:"مشكي و عاود 2020",
                         description:"قصة ثلاثة تونسيين لا يربطهم أي شيء في الحياة اليومية باستثناء حقيقة أنهم مدمنون على المواعدة عبر الفيس بوك. في أحد الأيام، وقعوا في فخ امرأة ترتب لمقابلتهم في مكان منعزل وتطلق عليهم الرصاص بمساعدة عصابة. وهذا هو المكان الذي تحدث فيه ظاهرة خارقة للطبيعة وتجد شخصياتنا الثلاث نفسها دون قصد في الماضي",
                         rate:4
                        }]
         const deleteHandler = (e,clickedIndex) => {
           //const deleteOperation = state.filter((el, index) => index !== clickedIndex)
           //setState(deleteOperation)
           setState((prevState)=>{
            return prevState.filter((el,indx)=>indx !== clickedIndex)
           })
         } 
        // const toggleHandler = () => {
         // setCardToggle(!cardToggle);
        //}; 
        const filterName = (name)=>{
          setFilter(name)
        }  
        
         const nameHandler = ()=>{
          if(filter.length !== 0){
            return state.filter((el)=> el.name.toLowerCase().includes(filter));
          }
           return state ;       
         }  
         //----------------add movie----------------------
         const addItemHandler =()=>{
           let nobj={img:null ,name:addNameMovie ,description:addDescMovie,rate:addRateMovie};
           let arr = [...state, nobj];
           setState(arr);  
         }
         const addhandler1 = (e) =>{
          const title = e.target.value;
        setaddNameMovie(title)
      }
      const addhandler2 = (e) =>{
        const desc = e.target.value;
        setAddDescMovie(desc)
    }
    const addhandler3 = (e) =>{
      const rat = e.target.value;
      setAddRateMovie(rat)
  }
         //--------------------------------------
         
          
  return (
    <div className='moviesList'>
    <h1>Arabic movies</h1>
      <MovieCard movieList={arabicMovies} type="arabic" deleteFunc={deleteHandler}/>
      <h1>English movies movies</h1>
      <h1 style={{textAlign:'center'}}>Add Movie</h1>
      <div className='formMovie'>
      <input type="text" placeholder='movie title' value={addNameMovie} onChange={addhandler1} /><br />
      <input type="text" placeholder='title description' value={addDescMovie} onChange={addhandler2} /><br />
      <input type="text" placeholder='movie rate' value={addRateMovie} onChange={addhandler3} /><br />

      <br />
      <input type="submit" value="ADD MOVIE" onClick={addItemHandler}/>
      <br /> 
      </div>  
      
      <br />
      <Filter filteration={filterName} />
      <button style={{marginBottom:"20px"}} onClick={() =>setCardToggle(!cardToggle)}>{cardToggle ? "Hide Movies" : "Show Movies"}</button>
      <div className={cardToggle ? "show" : "hide"}>
      <MovieCard movieList={nameHandler()} type="english" deleteFunc={deleteHandler} />
      </div>
      </div>
    
  )
}

export default MovieList
