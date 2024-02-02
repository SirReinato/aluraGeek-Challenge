import BotaoPrincipal from 'src/componentes/Botao';
import styles from './TodosProdutos.module.scss';
import produtinhos from '../../JSON/produtos.json';
import { Card } from 'src/componentes/Card';
import { useState } from 'react';

const TodosProdutos = ({}) => {
	const todosProdutos = produtinhos.StarWars.concat(produtinhos.Consoles.concat(produtinhos.Diversos));
	const [osProdutos, setOsProdutos] = useState(todosProdutos);

	return (
		<section className={styles.todosprodutos}>
 			 <div className={styles.headerr}>
				<h3>Todos os produtos</h3>
				<BotaoPrincipal texto={'Adicionar produto'} link={'adicionar'}/>
			 </div>
			 <div className={styles.produtos}>
				{osProdutos.map(dados =>{
					return (
						<Card {...dados} key={dados.id} />
					)
				})}
			 </div>
 		</section>
	);
};


export default TodosProdutos;