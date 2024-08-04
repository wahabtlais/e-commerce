import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({
	title,
	titleStyles,
	containerStyles,
	additionalElement,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	return (
		<div
			className={`relative text-left cursor-pointer flex justify-between ${containerStyles}`}
			onClick={toggleDropdown}
		>
			{additionalElement}
			<button
				className={`text-white font-rregular uppercase text-sm ${titleStyles}`}
			>
				{title}
			</button>
			<div className="flex items-center gap-3">
				<img src="/assets/images/arrow.svg" alt="" className="w-3 h-3" />
				<span className="w-[1px] h-6 bg-slate-500"></span>
			</div>
			{isOpen && (
				<ul
					className="absolute right-0 w-64 mt-10 bg-white border border-gray-300 flex flex-col"
					onClick={closeDropdown}
				>
					<li className="border-b-[1px] mx-4">
						<Link
							className="block py-2 text-gray-700 hover:text-amber-400 font-rregular text-sm "
							to="#"
						>
							Action
						</Link>
					</li>
					<li className="border-b-[1px] mx-4">
						<Link
							className="block py-2 text-gray-700 hover:text-amber-400 font-rregular text-sm"
							to="#"
						>
							Another action
						</Link>
					</li>
					<li className="mx-4">
						<Link
							className="block py-2 text-gray-700 hover:text-amber-400 font-rregular text-sm"
							to="#"
						>
							Something else here
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
