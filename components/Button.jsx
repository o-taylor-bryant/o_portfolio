export default function Button({ children, className = "", ...props }) {
  const base =
    "px-8 py-3 rounded-full font-semibold transition-all duration-200 focus:outline-none bg-black text-white shadow-lg hover:bg-white hover:text-black hover:scale-105 active:scale-95";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
