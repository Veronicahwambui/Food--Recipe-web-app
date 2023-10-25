import React, { useEffect, useState } from 'react'
import './style.css'
import MealItem from './MealItem'
import ReceipeIndex from './ReceipeIndex'

const Meal = () => {
const[url, setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
const[item,setItem]=useState();
const[show,setShow]=useState(false)
const [search, setSearch] = useState()

useEffect(()=>{
fetch(url).then(res=>res.json()).then(data=>{
  console.log(data.meals);
  setItem(data.meals)
  setShow(true)

})
},[url])

const setIndex=(alpha)=>{
  setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)

}
const searchRecipe=(evt)=>{
if(evt.key==="Enter"){
  setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
}
}
  return (
    <>
    <div className="main">
      <div className="heading">
        <h1>Search Your food Recipe</h1>
        <h4>
        'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        </h4>

      </div>
      <div className='searchBox'>
        <input type="search" className='search-bar'  onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
      </div>
      <div className="container">
        
    {
      show ? <MealItem data={item} />: "Not Found"
    }
       
       
      </div>
<div className="indexContainer">
  <ReceipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
</div>


    </div>

    </>
  )
}

export default Meal