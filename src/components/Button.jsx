const Button = (prop) => {
  return (
    <button
      style={{
        backgroundColor: prop.bgcolor,
        borderStyle: prop.border,
        borderWidth: prop.borderWidth,
        borderColor: prop.borderColor,
        borderRadius: prop.radius
      }}
      className="flex gap-3 items-center px-7 py-2 rounded-full hover:opacity-[0.55]"
    >
      <div style={{color: prop.color, fontSize: prop.size}} className="text">{prop.title}</div>
      <div className="icon">
        <img style={{  width: prop.iconsize}} src={prop.icon} alt="arrow" />
      </div>
    </button>
  );
};

export default Button;
