const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-black hover:bg-transparent border-transparent hover:border-black border-2 text-gray-100 hover:text-black box-border"
				 : "transparent border-2 border-black text-black hover:bg-black hover:text-gray-100 box-border"
		}`}>
		{children}
	</button>
);

export default Button;