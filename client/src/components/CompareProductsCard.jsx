import { Link } from "react-router-dom";

const CompareProductsCard = ({
	image,
	brand,
	title,
	price,
	vendor,
	type,
	sku,
	availability,
	colors = [],
	sizes,
}) => {
	return (
		<Link className="relative bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden group">
			<div className="relative overflow-hidden cursor-pointer">
				<img
					className={`h-56 lg:h-60 w-full transition-opacity duration-500 rounded-t-xl`}
					src={image}
					alt="Image"
				/>
			</div>
			<div className="pt-6 pb-8 px-5">
				<p className="text-[13px] text-amber-600 font-rregular mb-3">{brand}</p>
				<h3 className="text-sm font-rmedium text-gray-900 mb-3 hover:text-amber-500 cursor-pointer">
					{title}
				</h3>
				<p className="text-base text-gray-950 font-rregular my-3">${price}</p>
				<ul>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">Vendor:</p>
						<p className="compare-product-card-li-value">{vendor}</p>
					</li>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">Type:</p>
						<p className="compare-product-card-li-value">{type}</p>
					</li>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">SKU:</p>
						<p className="compare-product-card-li-value">{sku}</p>
					</li>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">Availability:</p>
						<p className="compare-product-card-li-value">{availability}</p>
					</li>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">Color:</p>
						<div className="flex space-x-1">
							{colors.map((color, index) => (
								<span
									key={index}
									className="w-4 h-4 rounded-full border border-gray-200"
									style={{ backgroundColor: color }}
								></span>
							))}
						</div>
					</li>
					<li className="compare-product-card-li">
						<p className="compare-product-card-li-title">Size:</p>
						<p className="compare-product-card-li-value">{sizes}</p>
					</li>
				</ul>
			</div>
			<div className="absolute right-[-25px] top-4 group-hover:right-3 transition-all duration-300 ease-in-out">
				{/* problem fixed */}
				<div className="flex flex-col gap-2">
					<Link className="rounded-full hover:bg-amber-400 flex items-center justify-center w-7 h-7">
						<img
							src="/assets/images/cross.svg"
							alt="cross"
							className="w-4 h-4"
						/>
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default CompareProductsCard;
