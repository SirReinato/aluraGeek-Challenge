import { createContext, useContext, useEffect } from "react";
import produtosApi from '../JSON/produtos.json';

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Api Produtos";

export const ProdutosProvider = ({children}) =>{
    const [apiProduto, setApiProduto] = useContext(produtosApi);
    
    return (
        <ProdutosContext.Provider value={apiProduto}>
            {children}
        </ProdutosContext.Provider>
    )
}