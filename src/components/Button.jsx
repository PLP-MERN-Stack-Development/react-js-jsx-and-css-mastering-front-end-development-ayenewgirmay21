const Button = ({ children, variant = "primary", onClick }) => {
  const baseClass = "px-4 py-2 rounded font-semibold transition-all";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
