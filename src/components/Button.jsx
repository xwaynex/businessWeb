

const Button = ({ text, href, className }) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-md font-semibold shadow ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
