import Hero from "./Pages/Hero";
import {
  BrowserRouter ,
  Routes ,
  Route ,
} from "react-router-dom";
import LoginDialog from "./Components/LoginDialogue";
import Profile from "./Pages/Profile";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Hero/> }/>
          <Route path='/login' element={<LoginDialog/>}/>
            <Route path='/profile' element ={<Profile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
