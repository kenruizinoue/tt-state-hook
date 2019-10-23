import React, { useState } from "react";

function ContadorHook() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  return (
    <div>
      <p>Clic # {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Presioname</button>

      <p>Clic # {contador2}</p>
      <button onClick={() => setContador2(contador2 + 1)}>Presioname</button>
    </div>
  );
}

export default ContadorHook;
