import { Link } from "react-router-dom";

function CustomButton({ title, to, disabled }) {
	if (disabled) {
		return (
			<button
				className="bg-gray-400 hover:bg-amber-500/40 cursor-not-allowed h-11 w-32 text-white rounded-full flex items-center justify-center text-sm font-rregular"
				disabled
			>
				{title}
			</button>
		);
	}

	return (
		<Link
			to={to}
			className="bg-slate-800 hover:bg-amber-500 hover:text-slate-800 transition-all h-11 w-32 text-white rounded-full flex items-center justify-center text-sm font-rregular"
		>
			{title}
		</Link>
	);
}

export default CustomButton;
