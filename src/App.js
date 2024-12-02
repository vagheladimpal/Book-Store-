import logo from './logo.svg';
import './App.css';
import { Card } from './Component/Card';
import { Login } from './Pages/Login';

function App() {
  return (
   <>
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Login/>
   </>
  );
}

export default App;
