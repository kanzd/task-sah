import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Main from "./Components/main/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<Main />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
