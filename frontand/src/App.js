import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login'
import {Routes,Route} from 'react-router-dom'
import PrivateRoute from './components/privateroute/PrivateRoute';
import Navbar from './components/navbar/Navbar';
import MemoList from './components/Users/memoUser/MemoList';
import BookingCars from './components/Home/BookingCars';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <h1>great deal</h1>
    
    <Navbar /> 
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    
    <Route path="/register" element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/BookingCars' element={<BookingCars/>}/>
    <Route path='/PrivateRoute' element={<PrivateRoute/>}/>


//partie User 

<Route path='/memo' element={<MemoList/>}/>

    </Routes>
   
    </div>
  );
}

export default App;
