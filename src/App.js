import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chatbot from './components/Chatbot';
import { Home } from "./pages/Home";
function App() {
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
