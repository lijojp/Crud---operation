import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Register from './Components/pages/Register'
import Login from './Components/pages/Login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Router>
     <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path = '/login' element={<Login/>}/>
     </Routes>
     </Router>
      </header>
    </div>
  );
}

export default App;
