import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";
import Erro404 from "./pages/Erro404";
import TodosProdutos from "./pages/TodosProdutos/TodosProdutos";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addProduto" element={<TodosProdutos />} />
        </Route>
        <Route path="*" element={<Erro404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
