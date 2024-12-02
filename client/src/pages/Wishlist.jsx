import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
	const products = [
		// Your products data here
		{
			image: "/assets/images/12.jpg",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
		},
		{
			image: "/assets/images/12.jpg",
			title: "Vybrix Magnetic Power Bank Wireless Charging",
			price: "32.00",
		},
	];

	return (
		<>
			<Meta title="Wishlist" />
			<div className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full">
						<section className="p-8">
							{/* grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10 //3 */}
							{/* grid grid-cols-1 sm:grid-cols-2 gap-4 //2*/}
							{/*  grid grid-cols-1 gap-4 //1*/}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{products.map((product, index) => (
									<WishlistCard
										key={index}
										image={product.image}
										title={product.title}
										price={product.price}
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

export default Wishlist;
