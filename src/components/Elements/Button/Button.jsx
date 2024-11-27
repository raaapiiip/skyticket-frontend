import LoginIcon from "../../../assets/login.svg";
import SearchIcon from "../../../assets/search.svg";

const buttonIcon = {
  login: <img src={LoginIcon} alt="Login Icon" className="w-5 h-5" />,
  search: <img src={SearchIcon} alt="Search Icon" className="w-5 h-5" />,
};

const Button = ({
  type = "login",
  children = "Login",
  onAction,
  color = "purple",
  width = "md",
}) => {
  const baseStyles = `flex items-center justify-center gap-2 h-12 rounded-xl py-2 px-4 text-sm text-center font-normal shadow-lg focus:outline-none focus:ring transition-colors duration-300`;

  const colorStyles = {
    purple: `bg-[#7126B5] text-white hover:bg-purple-600 active:bg-[#4B1979] active:ring-4 active:ring-purple-400`,
    gray: `bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-700 active:ring-4 active:ring-gray-400`,
    blue: `bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 active:ring-4 active:ring-blue-400`,
  };

  const widthStyles = {
    sm: "min-w-[80px] max-w-[105px]",
    md: "min-w-[106px] max-w-[126px]",
    lg: "min-w-[150px] max-w-[968px]",
    full: "w-full",
  };

  return (
    <button
      type="button"
      onClick={onAction}
      className={`${baseStyles} ${colorStyles[color]} ${widthStyles[width]}`}
    >
      {buttonIcon[type] && (
        <span className="flex items-center">{buttonIcon[type]}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
