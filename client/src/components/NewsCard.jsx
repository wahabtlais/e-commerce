import CustomButton from "./CustomButton";

function NewsCard({ image, date, title, description }) {
	return (
		<div className="bg-white rounded-xl shadow-custom">
			<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
				<img
					src={`/assets/images/${image}`}
					alt="blog"
					className="w-full h-auto rounded-t-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"
				/>
			</div>
			<div className="pt-6 pb-8 px-5">
				<p className="text-sm text-gray-500 font-rregular mb-3">{date}</p>
				<h3 className="text-lg font-rmedium text-gray-900 truncate mb-3 hover:text-amber-500 cursor-pointer">
					{title}
				</h3>
				<p className="text-sm text-gray-500 font-rregular line-clamp-2 mb-4">
					{description}
				</p>
				<CustomButton title="Read More" />
			</div>
		</div>
	);
}

export default NewsCard;
