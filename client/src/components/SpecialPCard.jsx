import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import CustomButton from "./CustomButton";

function SpecialPCard({
	image,
	hoverImage,
	brand,
	title,
	discPrice,
	oldPrice,
	colors = [],
	productsCount = 0,
}) {
	const [isHovered, setIsHovered] = useState(false);
	let buttonTitle;
	let isButtonDisabled = false;

	if (productsCount === 0) {
		buttonTitle = "Sold Out";
		isButtonDisabled = true;
	} else {
		isButtonDisabled = false;
		if (colors.length > 1) {
			buttonTitle = "Choose Option";
		} else {
			buttonTitle = "Add to Cart";
		}
	}
	return (
		<Link
			to="#"
			className="flex bg-white rounded-xl shadow-custom group"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative overflow-hidden cursor-pointer w-[40%]">
				{/* Default Image */}
				<img
					src={image}
					alt="Image 1"
					className={`w-full h-auto object-cover transition-opacity duration-500 rounded-t-xl ${
						isHovered ? "opacity-0" : "opacity-100"
					}`}
				/>

				{/* Hover Image */}
				<img
					src={hoverImage}
					alt="Image 2"
					className={`w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 rounded-t-xl ${
						isHovered ? "opacity-100" : "opacity-0"
					}`}
				/>
				<div className="flex items-center justify-center px-1 rounded-sm bg-red-600 absolute top-2 left-2">
					<p className="text-xs font-rregular text-white">Sale</p>
				</div>
				<div className="absolute overflow-hidden right-[-30px] top-0 group-hover:top-4 group-hover:right-3 transition-all duration-300 ease-in-out">
					<div className="flex flex-col gap-1">
						<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
							<img
								src="/assets/images/wish.svg"
								alt="wish"
								className="w-4 h-4"
							/>
						</Link>
						<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
							<img src="/assets/images/prodcompare.svg" alt="compare" />
						</Link>
						<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
							<img src="/assets/images/view.svg" alt="view" />
						</Link>
					</div>
				</div>
				{colors?.length > 1 && (
					<div className="absolute bottom-[50%] left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

			<div className="w-[60%]">
				<div className="pt-6 pb-8 px-5">
					<p className="text-[13px] text-amber-600 font-rregular mb-3">
						{brand}
					</p>
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
					<p className="text-base font-rregular mt-3">
						<strike className="text-gray-500 mr-2">${oldPrice}</strike>
						<span className="text-rose-600">${discPrice}</span>
					</p>
					<div className="flex gap-3 items-center mt-3">
						<p className="font-rregular text-sm">
							<span className="font-rbold mr-2">5</span>
							<span className="text-gray-500">Days</span>
						</p>
						<div className="flex gap-2 text-sm">
							<span className="rounded-full bg-red-600 w-[30px] h-[30px] flex items-center justify-center font-rregular text-white ">
								1
							</span>
							<span className="rounded-full bg-red-600 w-[30px] h-[30px] flex items-center justify-center font-rregular text-white">
								1
							</span>
							<span className="rounded-full bg-red-600 w-[30px] h-[30px] flex items-center justify-center font-rregular text-white">
								1
							</span>
						</div>
					</div>
					<div className="mt-3">
						<p className="text-gray-500 mb-1 font-rregular text-sm">
							Products: {productsCount}
						</p>
						<ProgressBar
							completed={`${productsCount}`}
							maxCompleted="100"
							isLabelVisible={false}
							bgColor="#0077b6"
							height="8px"
						/>
					</div>
					<div className="mt-6">
						<CustomButton
							title={buttonTitle}
							disabled={isButtonDisabled}
							to="#"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default SpecialPCard;
