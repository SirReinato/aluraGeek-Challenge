import { useContext } from "react"
import DetalheContext from "src/context/DetalheContext/DetalheContext"

export const useDetalhesContext = () => {
    const { detalhe, setDetalhe } = useContext(DetalheContext);

    //função para add o detalhe do produto
    function addProdutoAoDetalhe(newProduct) {
        setDetalhe(produto => {
            produto === newProduct;
            return produto
        })
    }

    return { addProdutoAoDetalhe, detalhe, setDetalhe }
}