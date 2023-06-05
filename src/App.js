import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes  from './Services/ProtectedRoutes';
import Unauth from './Services/Unauth';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/register" element={<Register/>}  /> */}
      <Route path="/public/*" element={<Unauth />} />

      <Route path="*" element={<ProtectedRoutes />} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
