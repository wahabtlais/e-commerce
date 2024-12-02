import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const WishlistCard = ({ image, title, price, additionalStyle }) => {
	return (
		<Link className="relative bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden group">
			<div className="relative overflow-hidden cursor-pointer">
				<img
					className={`h-56 lg:h-60 w-full transition-opacity duration-500 rounded-t-xl object-contain ${additionalStyle}`}
					src={image}
					alt="Image 1"
				/>
			</div>
			<div className="pt-6 pb-8 px-5">
				<h3 className="text-sm font-rmedium text-gray-900 mb-3 hover:text-amber-500 cursor-pointer">
					{title}
				</h3>
				<p className="text-base text-gray-950 font-rregular mt-3 mb-4">
					${price}
				</p>
				<CustomButton title="Add to Cart" to="/cart" />
			</div>
			<div className="absolute right-[-25px] top-4 group-hover:right-3 transition-all duration-300 ease-in-out">
				{/* problem fixed */}
				<div className="flex flex-col gap-2">
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img
							src="/assets/images/cross.svg"
							alt="wish"
							className="w-4 h-4"
						/>
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default WishlistCard;
