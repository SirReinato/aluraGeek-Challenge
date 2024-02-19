import { createContext, useContext, useEffect, useState } from 'react';

export const ApiContext = createContext();
ApiContext.displayName = "APIprodutos"

export const ApiContextProvider = ({ children }) => {
  const [starWars, setStarWars] = useState([])
  const [consoles, setConsoles] = useState([])
  const [diversos, setDiversos] = useState([])

  return (
    <ApiContext.Provider value={{ starWars, setStarWars, consoles, setConsoles, diversos, setDiversos }}>
      {children}
    </ApiContext.Provider>
  )

}

export default function Service() {
  const { starWars, setStarWars, consoles, setConsoles, diversos, setDiversos  } = useContext(ApiContext);

  function usandoLinks(link, setAlgumaCoisa) {
    useEffect((dado) => {
      dado = link
      fetch(`http://localhost:3000/${dado}`)
        .then(res => res.json())
        .then(dados => setAlgumaCoisa(dados))
    }, [])
  }

  usandoLinks('StarWars', setStarWars);
  usandoLinks('Consoles', setConsoles);
  usandoLinks('Diversos', setDiversos);

  return starWars, consoles, diversos
}