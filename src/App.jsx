import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaPadrao from "./pages/PaginaPadrao";
import Erro404 from "./pages/Erro404";
import TodosProdutos from "./pages/TodosProdutos/TodosProdutos";
import { ApiContextProvider } from "./Service/Service";
import { DetalheProvider } from "./context/DetalheContext/DetalheContext";

function App() {
  return (
    <BrowserRouter>
      <ApiContextProvider>
        <DetalheProvider>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addProduto" element={<TodosProdutos />} />
            </Route>
            <Route path="*" element={<Erro404 />} />
          </Routes>
        </DetalheProvider>
      </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
