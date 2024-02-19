import { createContext, useState } from 'react';

const DetalheContext = createContext();
DetalheContext.displayName = "Detalhes"

export const DetalheProvider = ({children}) =>{
	const [detalhe, setDetalhe] = useState([]);

	return(
		<DetalheContext.Provider value={{detalhe, setDetalhe}}>
			{children}
		</DetalheContext.Provider>
	)
}


export default DetalheContext;