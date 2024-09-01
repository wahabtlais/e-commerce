import { useState } from "react";
import FilterCard from "../components/FilterCard";
import GridProductCard from "../components/GridProductCard";
import Meta from "../components/Meta";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import GridRowProductCard from "../components/GridRowProductCard";

const Store = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [gridCols, setGridCols] = useState(4); // State to manage the number of columns

	const products = [
		// Your products data here
		{
			image: "/assets/images/12.jpg",
			hoverImage: "/assets/images/12_02.jpg",
			brand: "Momax",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
			colors: ["#000000", "#888888", "#00BFFF", "#FFFFFF"],
		},
		{
			image: "/assets/images/11.jpg",
			hoverImage: "/assets/images/11_02.jpg",
			brand: "Samsung",
			title: "Samsung R6 Wireless 360° Multiroom Speaker",
			price: "43.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/20.jpg",
			hoverImage: "/assets/images/20_02.jpg",
			brand: "Mcdodo",
			title: "Phonokart USB Type C OTG Pendrive Cable",
			price: "14.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
			colors: ["#000000", "#888888"],
		},
		{
			image: "/assets/images/16.jpg",
			hoverImage: "/assets/images/16_02.jpg",
			brand: "HP",
			title: "Microware 9  Cap DualSense Wireless Controller",
			price: "32.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/17.jpg",
			hoverImage: "/assets/images/17_02.jpg",
			brand: "Logi",
			title: "Logitech M350 WHITE Optical Wireless Mouse",
			price: "20.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/09.jpg",
			hoverImage: "/assets/images/09_02.jpg",
			brand: "Boss",
			title: "J.P.Gold Wireless Stereo Earphones Headphonea",
			price: "15.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/18.jpg",
			hoverImage: "/assets/images/18_02.jpg",
			brand: "Google",
			title: "Google Home Smart Voice Activated Speaker",
			price: "25.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/14.jpg",
			hoverImage: "/assets/images/14_02.jpg",
			brand: "Apple",
			title: "Apple HomePod Assistant and Voice Recognition",
			price: "50.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
		{
			image: "/assets/images/12.jpg",
			hoverImage: "/assets/images/12_02.jpg",
			brand: "Momax",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
			colors: ["#000000", "#888888", "#00BFFF", "#FFFFFF"],
		},
		{
			image: "/assets/images/14.jpg",
			hoverImage: "/assets/images/14_02.jpg",
			brand: "Apple",
			title: "Apple HomePod Assistant and Voice Recognition",
			price: "50.00",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto libero, dolor quae eligendi quis illo quas eos provident consequatur reprehenderit ex voluptatibus delectus porro. Animi in praesentium hic necessitatibus.",
		},
	];

	const itemsPerPage = gridCols === 3 ? 9 : 8; // Set limit for items per page
	const totalItems = products.length; // Total number of items (replace with your actual data length)
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const getCurrentPageItems = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return products.slice(startIndex, endIndex);
	};

	const next = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const getItemProps = (index) => ({
		variant: currentPage === index ? "filled" : "text",
		color: currentPage === index ? "amber" : "gray",
		onClick: () => setCurrentPage(index),
		className: `flex items-center justify-center font-rregular ${
			currentPage === index ? "bg-amber-400 text-white" : "bg-white text-black"
		}`,
	});

	const getGridClasses = () => {
		switch (gridCols) {
			case 1:
				return "grid grid-cols-1 gap-4";
			case 2:
				return "grid grid-cols-1 sm:grid-cols-2 gap-4";
			case 3:
				return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7";
			case 4:
			default:
				return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4";
		}
	};

	return (
		<>
			<Meta title="Store" />
			<div className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full">
						<div className="w-[25%]">
							<FilterCard />
						</div>
						<div className="w-[75%]">
							{/* Sorting */}
							<div className="w-full px-3 flex items-center justify-end gap-16">
								<div className="flex items-center gap-2">
									<p className="text-base text-gray-500 font-rregular">
										Sort By:
									</p>

									<select
										name="sort_by"
										id="SortBy"
										className="bg-transparent rounded-lg border-gray-300 text-gray-500 text-sm font-rregular focus:border-gray-300 focus:ring-0"
									>
										<option value="manual">Featured</option>
										<option value="best-selling" selected="selected">
											Best selling
										</option>
										<option value="title-ascending">Alphabetically, A-Z</option>
										<option value="title-descending">
											Alphabetically, Z-A
										</option>
										<option value="price-ascending">Price, low to high</option>
										<option value="price-descending">Price, high to low</option>
										<option value="created-ascending">Date, old to new</option>
										<option value="created-descending">Date, new to old</option>
									</select>
								</div>

								<div>
									<p className="text-base text-gray-500 font-rregular">
										{products.length} Products
									</p>
								</div>
								{/* Grid Buttons */}
								<div className="flex items-center gap-2">
									<div
										className={`h-9 w-9 flex items-center justify-center rounded-lg cursor-pointer ${
											gridCols === 4 ? "bg-amber-400" : "bg-white"
										}`}
										onClick={() => setGridCols(4)}
									>
										<img
											src="/assets/images/gr4.svg" // 4 cards
											alt=""
											className="w-4 h-4"
										/>
									</div>
									<div
										className={`h-9 w-9 flex items-center justify-center rounded-lg cursor-pointer ${
											gridCols === 3 ? "bg-amber-400" : "bg-white"
										}`}
										onClick={() => setGridCols(3)}
									>
										<img
											src="/assets/images/gr3.svg" // 3 cards
											alt=""
											className="w-4 h-4"
										/>
									</div>
									<div
										className={`h-9 w-9 flex items-center justify-center rounded-lg cursor-pointer ${
											gridCols === 2 ? "bg-amber-400" : "bg-white"
										}`}
										onClick={() => setGridCols(2)}
									>
										<img
											src="/assets/images/gr2.svg" // 2 cards
											alt=""
											className="w-4 h-4"
										/>
									</div>
									<div
										className={`h-9 w-9 flex items-center justify-center rounded-lg cursor-pointer ${
											gridCols === 1 ? "bg-amber-400" : "bg-white"
										}`}
										onClick={() => setGridCols(1)}
									>
										<img
											src="/assets/images/gr.svg" // 1 card
											alt=""
											className="w-4 h-4"
										/>
									</div>
								</div>
							</div>
							{/* Blog */}
							<section className="p-8">
								{/* grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10 //3 */}
								{/* grid grid-cols-1 sm:grid-cols-2 gap-4 //2*/}
								{/*  grid grid-cols-1 gap-4 //1*/}
								<div className={getGridClasses()}>
									{getCurrentPageItems().map((product, index) =>
										gridCols === 1 ? (
											<GridRowProductCard
												key={index}
												image={product.image}
												hoverImage={product.hoverImage}
												brand={product.brand}
												title={product.title}
												price={product.price}
												description={product.description}
												colors={product.colors}
											/>
										) : (
											<GridProductCard
												key={index}
												image={product.image}
												hoverImage={product.hoverImage}
												brand={product.brand}
												title={product.title}
												price={product.price}
												colors={product.colors}
												additionalStyle={`${
													gridCols === 2 ? " object-contain" : "object-cover"
												}`}
											/>
										)
									)}
								</div>
							</section>
							{/* Pagination Component */}
							<div className="flex justify-center items-center gap-4 mt-4">
								<Button
									size="sm"
									variant="outlined"
									onClick={prev}
									disabled={currentPage === 1}
									className="p-3 bg-white"
								>
									<ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
								</Button>
								<div className="flex items-center gap-2 justify-center">
									{[...Array(totalPages)].map((_, i) => (
										<IconButton key={i} {...getItemProps(i + 1)}>
											{i + 1}
										</IconButton>
									))}
								</div>
								<Button
									size="sm"
									variant="outlined"
									onClick={next}
									disabled={currentPage === totalPages}
									className="p-3 bg-white"
								>
									<ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Store;
