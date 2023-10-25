
import './App.css';
import Receipe from './Components/Receipe';
import Meal from './Components/Meal';
import{Routes,Route} from"react-router-dom";
function App() {
  return (
    <>
     <Routes>
      <Route path="/"element={<Meal/>}/>
      <Route path="/:MealId"element={<Receipe/>}/>

     </Routes>
     </>
  );
}

export default App;
