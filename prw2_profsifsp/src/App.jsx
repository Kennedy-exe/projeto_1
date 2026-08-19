import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Lista from "./componentes/Lista/Lista";
function App() {
// lista (array) de professores.
// o valor inicial é um array vazio []
    const [professores, setProfessores] = useState( [] )
    const adicionaProf = (prof) => {
      const listaNova = professores.slice();
      listaNova.push(prof)
      setProfessores( listaNova )

    console.log(prof)
}
return (
  <div>
    <Banner />
    <Formulario aoProfCadastrado={prof => adicionaProf(prof)} />
    <Lista objetos={professores} />
  </div>
);
}
export default App;