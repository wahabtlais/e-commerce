import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function CollectionCard({
	image,
	hoverImage,
	brand,
	title,
	price,
	colors = [],
}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Link
			to="#"
			className="bg-white rounded-xl shadow-custom group mb-2 overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative overflow-hidden cursor-pointer">
				{/* Default Image */}
				<img
					src={image}
					alt="Image 1"
					className={`w-full h-full object-cover transition-opacity duration-500 rounded-t-xl ${
						isHovered ? "opacity-0" : "opacity-100"
					}`}
				/>

				{/* Hover Image */}
				<img
					src={hoverImage}
					alt="Image 2"
					className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 rounded-t-xl ${
						isHovered ? "opacity-100" : "opacity-0"
					}`}
				/>
				{colors?.length > 1 && (
					<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{colors.map((color, index) => (
							<span
								key={index}
								className="w-4 h-4 rounded-full border border-gray-200"
								style={{ backgroundColor: color }}
							></span>
						))}
					</div>
				)}
			</div>

			<div className="pt-6 pb-8 px-5">
				<p className="text-[13px] text-amber-600 font-rregular mb-3">{brand}</p>
				<h3 className="text-sm font-rmedium text-gray-900 mb-3 hover:text-amber-500 cursor-pointer">
					{title}
				</h3>
				<div className="flex items-center">
					<ReactStars
						count={5}
						size={18}
						isHalf={true}
						emptyIcon={<i className="far fa-star"></i>}
						halfIcon={<i className="fa fa-star-half-alt"></i>}
						fullIcon={<i className="fa fa-star"></i>}
						activeColor="#ffd700"
						value="3.5"
						edit={false}
					/>
					<span className="text-xs font-rregular ml-2">(134)</span>
				</div>
				<p className="text-base text-gray-950 font-rregular mt-3">${price}</p>
			</div>
			<div className="absolute overflow-hidden right-[-50px] top-4 group-hover:right-3 transition-all duration-300 ease-in-out">
				<div className="flex flex-col gap-2">
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img src="/assets/images/wish.svg" alt="wish" className="w-4 h-4" />
					</Link>
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img src="/assets/images/prodcompare.svg" alt="compare" />
					</Link>
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img src="/assets/images/view.svg" alt="view" />
					</Link>
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img src="/assets/images/add-cart.svg" alt="add-cart" />
					</Link>
				</div>
			</div>
		</Link>
	);
}

export default CollectionCard;
