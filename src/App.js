import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <LogIn/>
      <SignUp/>
      <AddBus/>
      <ViewAll/>
     
    </div>
  );
}

export default App;
