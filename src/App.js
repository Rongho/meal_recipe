import { Route, Routes } from 'react-router-dom';
import './App.css';
import Meal from './Components/Meal';
import './Components/style.css';
import Recipeinfo from './Components/Recipeinfo'
function App() {
  return (
    <>
    <Routes>
   <Route path='/' element={<Meal/>}/>

   
   <Route path='/:MealId' element={<Recipeinfo/>}/>
    </Routes>
    <p></p>
    </>
    
  );
}

export default App;
