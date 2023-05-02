import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import Recipeindex from "./Recipeindex";

const Meal=()=>{
    const[url, setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const[item, setItem]=useState();
    const[show, setShow]= useState(false);
    const[search, setSearch]=useState("");
    
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{ 
            setItem(data.meals);
        setShow(true);
    })
    },[url]);

    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    const searchRecipe=(evt)=>{
        if(evt.key="enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
   
    
    return(
        <>
        <div className="main">
            <div className="heading">
               <h1>Search Your Recipe!</h1>
               <h4>"Good food is all the sweeter when shared with family and friends. 
                Let our recipe app be your culinary companion on a journey of delicious creations."</h4>
            </div>
            <div className="searchbox">
                <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} placeholder="Search here"/>
              
            </div>
            <div className="container">
              {
                show?<MealItem data={item}/>:"NOT FOUND!"
              }
            </div>
            <div className="indexContainer">
                <Recipeindex alphaIndex={(alpha)=>setIndex(alpha)} />
            </div>
        </div>
        </>
    )
    
}
export default Meal;