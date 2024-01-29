import { createContext, useContext, useEffect } from "react";
import produtosApi from '../JSON/produtos.json';

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Api Produtos";

export const ProdutosProvider = ({ children }) => {
    const [apiProduto, setApiProduto] = useContext([]);

    return (
        <ProdutosContext.Provider value={{ apiProduto, setApiProduto }}>
            {children}
        </ProdutosContext.Provider>
    )
}

// parte para se elaborar, meu objetivo e puxar isso aqui de uma api, onde cada conjunto de produtos tera sua propria chamada

export function useProdutosContext() {
    const { apiProduto, setApiProduto } = useContext(ProdutosContext);

    useEffect(() =>{{
        fetch(produtosApi)
        .then(dados => dados.json())
        .then(dados => {
            setApiProduto(dados)
        })
    }}, [])
    

    function apiStarWars() {
        
    }

    return {
        apiProduto, setApiProduto
    }
}