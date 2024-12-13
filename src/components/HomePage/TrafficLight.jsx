import { useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
  const [colorActivo, setColorActivo] = useState("");
  const colores = ["red", "yellow", "green"];

  const cambiarAlSiguienteColor = () => {
    const indexActual = colores.indexOf(colorActivo);
    const indexSiguiente = (indexActual + 1) % colores.length;
    setColorActivo(colores[indexSiguiente]);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {colores.map((color) => (
        <Light
          key={color}
          color={color}
          cambiarColor={setColorActivo}
          colorActivo={colorActivo}
        />
      ))}

      <button
        onClick={cambiarAlSiguienteColor}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cambiar color
      </button>
    </div>
  );
};

export default TrafficLight;
