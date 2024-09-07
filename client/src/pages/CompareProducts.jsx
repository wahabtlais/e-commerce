import CompareProductsCard from "../components/CompareProductsCard";
import Meta from "../components/Meta";

const CompareProducts = () => {
	const products = [
		// Your products data here
		{
			image: "/assets/images/12.jpg",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
			vendor: "Momax",
			type: "Power Bank",
			sku: "",
			availability: "In Stock",
			colors: ["#000000", "#888888", "#00BFFF", "#FFFFFF"],
			sizes: ["S", "M", "L", "XL"],
		},
		{
			image: "/assets/images/12.jpg",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
			vendor: "Momax",
			type: "Power Bank",
			sku: "",
			availability: "In Stock",
			colors: ["#000000", "#888888", "#00BFFF", "#FFFFFF"],
			sizes: ["S", "L", "XL"],
		},
		{
			image: "/assets/images/12.jpg",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
			vendor: "Momax",
			type: "Power Bank",
			sku: "",
			availability: "In Stock",
			colors: ["#000000", "#888888", "#00BFFF", "#FFFFFF"],
			sizes: ["M", "L"],
		},
	];

	return (
		<>
			<Meta title="Compare Products" />
			<div className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full">
						<section className="p-8">
							{/* grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10 //3 */}
							{/* grid grid-cols-1 sm:grid-cols-2 gap-4 //2*/}
							{/*  grid grid-cols-1 gap-4 //1*/}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
								{products.map((product, index) => (
									<CompareProductsCard
										key={index}
										image={product.image}
										title={product.title}
										price={product.price}
										vendor={product.vendor}
										type={product.type}
										sku={product.sku}
										availability={product.availability}
										colors={product.colors}
										sizes={product.sizes}
									/>
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompareProducts;
