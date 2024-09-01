const Checkbox = ({ label, name, id }) => {
	return (
		<div className="flex items-center gap-3">
			<input
				type="checkbox"
				name={name}
				id={id}
				className="cursor-pointer w-4 h-4 
          border-gray-400 hover:border-amber-400 
          focus:border-gray-500 focus:ring-0  
          text-amber-400 checked:bg-amber-400 checked:border-amber-400
          transition duration-300 ease-in-out"
			/>
			<label
				htmlFor={id}
				className="cursor-pointer text-sm font-rregular text-gray-500 hover:text-amber-400 transition duration-300 ease-in-out"
			>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
