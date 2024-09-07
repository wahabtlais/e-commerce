import { Link } from "react-router-dom";

function FeaturedCard({
	image,
	heading,
	title,
	smallTextColor,
	titleColor,
	subtitle,
}) {
	return (
		<div className="bg-white rounded-xl shadow-custom group overflow-hidden">
			<div className="flex flex-col h-full ">
				<Link className="relative overflow-hidden bg-cover bg-no-repeat">
					<img
						src={image}
						alt="banner"
						className="rounded-xl transition duration-300 ease-in-out group-hover:scale-110"
					/>
				</Link>
				<div className="absolute top-[9%] left-10 pr-3">
					<p
						className={`text-[13px] font-rlight mb-3 uppercase ${smallTextColor}`}
					>
						{heading}
					</p>
					<h3
						className={`text-2xl font-rmedium mb-3 cursor-pointer ${titleColor}`}
					>
						{title}
					</h3>
					<p className={`text-base font-rlight mb-3 ${smallTextColor}`}>
						{subtitle}
					</p>
				</div>
			</div>
		</div>
	);
}

export default FeaturedCard;
