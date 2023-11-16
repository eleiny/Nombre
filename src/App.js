import React, { useState } from "react";
import C01componente from "./componentes/C01componente";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div>
      <h1>Instituto Honorio Delgado Espinoza</h1>
      <h2>Eleiny Pamela Herrera Laguna</h2>
      <h3>Noche</h3>
    </div>
  );
}

export default App;
