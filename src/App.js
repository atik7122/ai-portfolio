import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbot from './components/Chatbot';
import { Home } from "./pages/Home";
import { notifyVisit } from "./utils/notifyVisit";


function App() {
  useEffect(() => {
  fetch("http://localhost:5000/visit");
}, []);


    useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      notifyVisit();
      sessionStorage.setItem("visited", "true");
    }
  }, []);
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
    </BrowserRouter>
    <Chatbot/>
    </>
    
  );
}

export default App;
