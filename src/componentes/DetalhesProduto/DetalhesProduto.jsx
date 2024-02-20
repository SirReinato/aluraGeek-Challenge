import { useDetalhesContext } from "src/hook/useDetalhesContext";
import OhProdutoNoDetalhe from "./OhProdutoNoDetalhe/OhProdutoNoDetalhe";

const DetalhesProduto = ({ funcao }) => {

	const {detalhe} = useDetalhesContext()

	return (
		<div className="modal">
			<div className="modal-background" onClick={funcao}></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">Detalhes do Produto</p>
					<button className="delete" aria-label="close"></button>
				</header>
				<section className="modal-card-body">
					<OhProdutoNoDetalhe {...detalhe} />
				</section>
				<footer className="modal-card-foot">
					<button className="button fechar" onClick={funcao}>Fechar</button>
				</footer>
			</div>
		</div>
	);
};


export default DetalhesProduto;