import Hero from "./Pages/Hero";
import {
  BrowserRouter ,
  Routes ,
  Route ,
} from "react-router-dom";
import LoginDialog from "./Components/LoginDialogue";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Hero/> }/>
          <Route path='/login' element={<LoginDialog/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
