import styles from './TituloProdutos.module.scss';

const TituloProdutos = ({nome}) => {
	return (
		<h2 className={styles.tituloprodutos}>
 			{nome}
 		</h2>
	);
};


export default TituloProdutos;