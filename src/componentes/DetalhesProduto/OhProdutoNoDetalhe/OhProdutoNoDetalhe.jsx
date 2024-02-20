import styles from './OhProdutoNoDetalhe.module.scss';

const OhProdutoNoDetalhe = ({ path, nome, preco }) => {
	return (
		<figure className={styles.ohprodutonodetalhe}>
			<div className={styles.painel}>
				<img src={path} alt={nome} />
			</div>
			<figcaption>
				<h3>{nome}</h3>
				<span>{preco}</span>
				<p>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</p>
			</figcaption>
		</figure>
	);
};


export default OhProdutoNoDetalhe;