import ReactStars from "react-rating-stars-component";

const RandomProductCard = ({ title, price, image, additionalStyles }) => {
	return (
		<div className={`flex items-center ${additionalStyles}`}>
			<div className="w-[50%] relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
				<img
					src={image}
					alt="watch"
					className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
				/>
			</div>

			<div className="w-[50%]">
				<h5 className=" w-32 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-rmedium text-gray-900 mb-1 hover:text-amber-500 cursor-pointer">
					{title}
				</h5>
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
					<span className="text-xs font-rregular ml-2 text-gray-700">
						(134)
					</span>
				</div>
				<p className="text-sm text-gray-700 font-rregular mt-1">$ {price}</p>
			</div>
		</div>
	);
};

export default RandomProductCard;
