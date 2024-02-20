import { useContext } from "react"
import DetalheContext from "src/context/DetalheContext/DetalheContext"

export const useDetalhesContext = () => {
    const { detalhe, setDetalhe } = useContext(DetalheContext);


    // função para abrir a modal
    function handleClick(newProduct) {
        const handleModal = document.querySelector('.modal').classList.toggle('is-active');


        return setDetalhe(newProduct), handleModal

    }
    // função para abrir a modal
    function handleClickFechar() {
        const handleModal = document.querySelector('.modal').classList.remove('is-active');
        return { handleModal }
    }

    return {
        handleClick,
        handleClickFechar,
        detalhe,
        setDetalhe
    }
}