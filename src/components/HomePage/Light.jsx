const Light = ({ color, cambiarColor, colorActivo }) => {
  const isSelected = color === colorActivo;

  return (
    <div
      onClick={() => cambiarColor(color)}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        border: isSelected ? "solid 3px black" : "none",
        cursor: "pointer",
      }}
      className="rounded-circle"
    ></div>
  );
};

export default Light;
