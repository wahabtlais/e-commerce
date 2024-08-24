import Marquee from "react-fast-marquee";
import NewsCard from "../components/NewsCard";
import CustomButton from "../components/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Import autoplay CSS
import CollectionCard from "../components/CollectionCard";
import SpecialPCard from "../components/SpecialPCard";

const Home = () => {
	return (
		<>
			<section className="py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full gap-6">
						<div className="w-[50%]">
							<div className=" relative flex h-full">
								<img
									src="/assets/images/main-banner-1.jpg"
									alt="banner"
									className="max-w-full h-auto rounded-lg shadow-custom"
								/>
								<div className="absolute top-20 left-16">
									<h4 className="text-base text-amber-700 uppercase font-rregular mb-4">
										Supercharged for pros
									</h4>
									<h5 className="text-5xl font-rsemibold text-slate-800 mb-6">
										iPad S13+ Pro
									</h5>
									<p className="text-base text-slate-800 mb-8 font-rregular uppercase">
										From $999.00 or $41.62/mo.
										<br />
										for 24 mo. Footnote*
									</p>
									<CustomButton title="BUY NOW" />
								</div>
							</div>
						</div>
						<div className="w-[50%]">
							<div className="grid gap-6 grid-cols-2">
								<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
									<img
										src="/assets/images/catbanner-01.jpg"
										alt="banner"
										className=" h-auto rounded-lg shadow-custom max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
									/>
									<div className="absolute top-[18%] left-9">
										<h4 className="text-sm text-amber-700 uppercase font-rregular mb-3">
											Best Sale
										</h4>
										<h5 className="text-lg font-rsemibold text-slate-800 mb-3">
											Laptops Max
										</h5>
										<p className="text-sm text-slate-800  font-rregular uppercase">
											From $1699.00 or
											<br />
											$64.62/mo.
										</p>
									</div>
								</div>
								<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
									<img
										src="/assets/images/catbanner-03.jpg"
										alt="banner"
										className="h-auto rounded-lg shadow-custom max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
									/>
									<div className="absolute top-[18%] left-9">
										<h4 className="text-sm text-amber-700 uppercase font-rregular mb-3">
											New Arrival
										</h4>
										<h5 className="text-lg font-rsemibold text-slate-800 mb-3">
											Buy IPad Air
										</h5>
										<p className="text-sm text-slate-800  font-rregular uppercase">
											From $599 or
											<br />
											$49.91/mo. for 12 mo.
										</p>
									</div>
								</div>
								<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
									<img
										src="/assets/images/catbanner-02.jpg"
										alt="banner"
										className="h-auto rounded-lg shadow-custom max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
									/>
									<div className="absolute top-[18%] left-9">
										<h4 className="text-sm text-amber-700 uppercase font-rregular mb-3">
											15% off
										</h4>
										<h5 className="text-lg font-rsemibold text-slate-800 mb-3">
											Smartwatch 7
										</h5>
										<p className="text-sm text-slate-800  font-rregular uppercase">
											Shop the latest band
											<br />
											styles and colors.
										</p>
									</div>
								</div>
								<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
									<img
										src="/assets/images/catbanner-04.jpg"
										alt="banner"
										className="h-auto rounded-lg shadow-custom max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
									/>
									<div className="absolute top-[18%] left-9">
										<h4 className="text-sm text-amber-700 uppercase font-rregular mb-3">
											Free Engraving
										</h4>
										<h5 className="text-lg font-rsemibold text-slate-800 mb-3">
											AirPods Max
										</h5>
										<p className="text-sm text-slate-800  font-rregular uppercase max-w-[170px]">
											High-fidelity playback & ultra-low distortion
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex">
						<div className="w-full">
							<div className="flex items-start justify-center">
								<div className="flex gap-5 w-[20%] items-center justify-center">
									<img
										src="/assets/images/service-01.png"
										alt="service"
										className="transition-transform duration-500 hover:animate-flip text-sm"
									/>
									<div>
										<h6 className="text-base font-rsemibold">Free Shipping</h6>
										<p className="text-sm font-rregular text-gray-400">
											From all orders over $100
										</p>
									</div>
								</div>
								<div className="flex gap-5 w-[20%] items-center justify-center">
									<img
										src="/assets/images/service-02.png"
										alt="service"
										className="transition-transform duration-500 hover:animate-flip"
									/>
									<div>
										<h6 className="text-base font-rsemibold">
											Daily Surprise Offers
										</h6>
										<p className="text-sm font-rregular text-gray-400">
											Save up to 25% off
										</p>
									</div>
								</div>
								<div className="flex gap-5 w-[20%] items-center justify-center">
									<img
										src="/assets/images/service-03.png"
										alt="service"
										className="transition-transform duration-500 hover:animate-flip"
									/>
									<div>
										<h6 className="text-base font-rsemibold">Support 24/7</h6>
										<p className="text-sm font-rregular text-gray-400">
											Shop with an expert
										</p>
									</div>
								</div>
								<div className="flex gap-5 w-[20%] items-center justify-center">
									<img
										src="/assets/images/service-04.png"
										alt="service"
										className="transition-transform duration-500 hover:animate-flip"
									/>
									<div>
										<h6 className="text-base font-rsemibold">
											Affordable Prices
										</h6>
										<p className="text-sm font-rregular text-gray-400">
											Get Factory direct price
										</p>
									</div>
								</div>
								<div className="flex gap-5 w-[20%] items-center justify-center">
									<img
										src="/assets/images/service-05.png"
										alt="service"
										className="transition-transform duration-500 hover:animate-flip"
									/>
									<div>
										<h6 className="text-base font-rsemibold">
											Secure Payments
										</h6>
										<p className="text-sm font-rregular text-gray-400">
											100% Protected Payments
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex">
						<div className="w-full">
							<div className="bg-white shadow-custom1 flex justify-between items-center py-5 px-5 rounded-lg">
								<div className="flex items-center justify-between border-r border-slate-200 w-[20%] px-3 ">
									<div>
										<h3 className="mb-1">
											<a
												href="#"
												className="text-base font-rmedium hover:underline transition-all"
											>
												Laptops
											</a>
										</h3>
										<a className="text-sm font-rregular cursor-pointer">
											View All
										</a>
									</div>
									<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
										<img
											src="/assets/images/laptop.jpg"
											alt="laptop"
											className="w-20 max-w-xs transition duration-300 ease-in-out hover:scale-110"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between border-r border-slate-200 w-[20%] px-3">
									<div>
										<h3 className="mb-1">
											<a
												href="#"
												className="text-base font-rmedium hover:underline transition-all"
											>
												Speakers
											</a>
										</h3>
										<a className="text-sm font-rregular cursor-pointer">
											View All
										</a>
									</div>
									<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
										<img
											src="/assets/images/speaker.jpg"
											alt="speaker"
											className="w-20 max-w-xs transition duration-300 ease-in-out hover:scale-110"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between border-r border-slate-200 w-[20%] px-3">
									<div>
										<h3 className="mb-1">
											<a
												href="#"
												className="text-base font-rmedium hover:underline transition-all"
											>
												Television
											</a>
										</h3>
										<a className="text-sm font-rregular cursor-pointer">
											View All
										</a>
									</div>
									<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
										<img
											src="/assets/images/tv.jpg"
											alt="tv"
											className="w-20 max-w-xs transition duration-300 ease-in-out hover:scale-110"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between border-r border-slate-200 w-[20%] px-3">
									<div>
										<h3 className="mb-1">
											<a
												href="#"
												className="text-base font-rmedium hover:underline transition-all"
											>
												Mini Cameras
											</a>
										</h3>
										<a className="text-sm font-rregular cursor-pointer">
											View All
										</a>
									</div>
									<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
										<img
											src="/assets/images/camera.jpg"
											alt="camera"
											className="w-20 max-w-xs transition duration-300 ease-in-out hover:scale-110"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between w-[20%] px-3">
									<div>
										<h3 className="mb-1">
											<a
												href="#"
												className="text-base font-rmedium hover:underline transition-all"
											>
												Gaming
											</a>
										</h3>
										<a className="text-sm font-rregular cursor-pointer">
											View All
										</a>
									</div>
									<div className="relative  max-w-xs overflow-hidden bg-cover bg-no-repeat">
										<img
											src="/assets/images/gaming.jpg"
											alt="gaming"
											className="w-20 max-w-xs transition duration-300 ease-in-out hover:scale-110"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					{/* <div className="flex">
						<div className="w-full flex gap-5"> */}
					<h2 className="text-2xl font-semibold text-gray-900 mb-5">
						Featured Collection
					</h2>
					<Swiper
						// modules={[Autoplay]}
						loop={true}
						navigation
						pagination={{ clickable: true }}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2, // 1 slide on small screens
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 3, // 2 slides on medium screens
								spaceBetween: 15,
							},
							1024: {
								slidesPerView: 4, // 3 slides on larger screens
								spaceBetween: 20,
							},
							1280: {
								slidesPerView: 5, // 4 slides on extra-large screens
								spaceBetween: 20,
							},
						}}
					>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/12.jpg"
								hoverImage="/assets/images/12_02.jpg"
								brand="Momax"
								title="Vybrix Magnetic Power Bank Wireless Charging"
								price="32.00"
								colors={["#000000", "#888888", "#00BFFF", "#FFFFFF"]}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/11.jpg"
								hoverImage="/assets/images/11_02.jpg"
								brand="Samsung"
								title="Samsung R6 Wireless 360° Multiroom Speaker"
								price="43.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/20.jpg"
								hoverImage="/assets/images/20_02.jpg"
								brand="Mcdodo"
								title="Phonokart USB Type C OTG Pendrive Cable"
								price="14.00"
								colors={["#000000", "#888888"]}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/16.jpg"
								hoverImage="/assets/images/16_02.jpg"
								brand="HP"
								title="Microware 9  Cap DualSense Wireless Controller"
								price="32.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/17.jpg"
								hoverImage="/assets/images/17_02.jpg"
								brand="Logi"
								title="Logitech M350 WHITE Optical Wireless Mouse"
								price="20.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/09.jpg"
								hoverImage="/assets/images/09_02.jpg"
								brand="Boss"
								title="J.P.Gold Wireless Stereo Earphones Headphonea"
								price="15.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/18.jpg"
								hoverImage="/assets/images/18_02.jpg"
								brand="Google"
								title="Google Home Smart Voice Activated Speaker"
								price="25.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<CollectionCard
								image="/assets/images/14.jpg"
								hoverImage="/assets/images/14_02.jpg"
								brand="Apple"
								title="Apple HomePod Assistant and Voice Recognition"
								price="50.00"
							/>
						</SwiperSlide>
					</Swiper>
					{/* </div>
					</div> */}
				</div>
			</section>
			<section className="py-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					{/* <div className="flex">
						<div className="w-full flex gap-5"> */}
					<h2 className="text-2xl font-semibold text-gray-900 mb-5">
						Special Products
					</h2>
					<Swiper
						// modules={[Autoplay]}
						loop={true}
						navigation
						pagination={{ clickable: true }}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2, // 1 slide on small screens
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 2, // 2 slides on medium screens
								spaceBetween: 15,
							},
							1024: {
								slidesPerView: 3, // 3 slides on larger screens
								spaceBetween: 20,
							},
							1280: {
								slidesPerView: 3, // 4 slides on extra-large screens
								spaceBetween: 20,
							},
						}}
					>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/22.jpg"
								hoverImage="/assets/images/22_02.jpg"
								brand="Apple"
								title="SwapME Braided Nylon Woven Smart Watch"
								discPrice="32.00"
								oldPrice="38.00"
								colors={["#000000", "#888888", "#00BFFF", "#FFFFFF"]}
								productsCount="17"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/06.jpg"
								hoverImage="/assets/images/06_02.jpg"
								brand="Oppo"
								title="Oppo A16 64 GB, 4 GB RAM, Pearl Blue, Mobile Phone"
								discPrice="32.00"
								oldPrice="38.00"
								productsCount="30"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/05.jpg"
								hoverImage="/assets/images/05_02.jpg"
								brand="Whirlpool"
								title="LG 674 litres Side by Side Refrigerator, Noble Steel"
								discPrice="32.00"
								oldPrice="38.00"
								colors={["#000000", "#888888"]}
								productsCount="44"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/04.jpg"
								hoverImage="/assets/images/04_02.jpg"
								brand="HP"
								title="HP LaserJet P1108 Mono Single Function Laser Printer"
								discPrice="32.00"
								oldPrice="38.00"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/23.jpg"
								hoverImage="/assets/images/23_02.jpg"
								brand="Momax"
								title="Ceptics India to Europe & More Travel Adapter Plug"
								discPrice="32.00"
								oldPrice="38.00"
								productsCount="40"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/08.jpg"
								hoverImage="/assets/images/08_02.jpg"
								brand="HP"
								title="Bose Portable Speaker, Upto 12 hrs of playtime"
								discPrice="32.00"
								oldPrice="38.00"
								productsCount="5"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/01.jpg"
								hoverImage="/assets/images/01_02.jpg"
								brand="Apple"
								title="Apple Watch Cellular 40 mm Starlight Aluminium Case"
								discPrice="32.00"
								oldPrice="38.00"
								productsCount="23"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SpecialPCard
								image="/assets/images/07.jpg"
								hoverImage="/assets/images/07_02.jpg"
								brand="Apple"
								title="Apple Airpods Pro (2nd Gen) with MagSafe Charging Case"
								discPrice="32.00"
								oldPrice="38.00"
								productsCount="10"
							/>
						</SwiperSlide>
					</Swiper>
					{/* </div>
					</div> */}
				</div>
			</section>

			<section className="py-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex">
						<div className="w-full">
							<div className="bg-white shadow-custom1 flex justify-between items-center py-3 rounded-lg">
								<Marquee>
									<div className="mx-5">
										<img src="/assets/images/brand-01.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-02.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-03.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-04.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-05.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-06.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-07.png" alt="brand" />
									</div>
									<div className="mx-5">
										<img src="/assets/images/brand-08.png" alt="brand" />
									</div>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 bg-slate-100">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					{/* <div className="flex">
						<div className="w-full flex gap-5"> */}
					<h2 className="text-2xl font-semibold text-gray-900 mb-5">
						Our Latest News
					</h2>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={20}
						loop={true}
						navigation
						pagination={{ clickable: true }}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2, // 1 slide on small screens
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 3, // 2 slides on medium screens
								spaceBetween: 15,
							},
							1280: {
								slidesPerView: 4, // 4 slides on extra-large screens
								spaceBetween: 20,
							},
						}}
					>
						<SwiperSlide>
							<NewsCard
								image="blog-01.jpg"
								date="July 20, 2024"
								title="How to Write a Blog Post Your Readers Will Love in 5 Steps"
								description="Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily me person. The 11 worst business software in history. Why latest electronic gadgets will make you question everything. The evolution of cool science experiments. 16 facts about cool tech gadgets that'll keep you up..."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NewsCard
								image="blog-02.jpg"
								date="July 20, 2024"
								title="9 Content Marketing Trends and Ideas to Increase Traffic"
								description="Unbelievable dollar general application The science article world What everyone is saying about An expert interview here Cool tech gadgets by the numbers Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget success stories. Why science fair ideas are afraid Why our world would end..."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NewsCard
								image="blog-03.jpg"
								date="July 20, 2024"
								title="How to Write a Blog Post Outline: A Simple Formula to Follow"
								description="We must moderate costs for both employers and workers who might otherwise move elsewhere,” he said.Following two months of declining business sentiment among its members, the head of the Associated Industries of Massa chusetts predicts a grim future for the state’s employers amid a nationwide shortage of workers and rising..."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NewsCard
								image="blog-04.jpg"
								date="July 20, 2024"
								title="Why do people think business software is a good idea!"
								description="We must moderate costs for both employers and workers who might otherwise move elsewhere,” he said.Following two months of declining business sentiment among its members, the head of the Associated Industries of Massa chusetts predicts a grim future for the state’s employers amid a nationwide shortage of workers and rising..."
							/>
						</SwiperSlide>
						<SwiperSlide>
							<NewsCard
								image="blog-05.jpg"
								date="July 20, 2024"
								title="The Ultimate Guide to Marketing Strategies to Improve Sales"
								description="Many things about electronic devices your kids don't want you to knowHow storage devices can help you predict the future. Why mom was right about wholesale accessories. What the world would be like if home tech gadgets didn't exist many uses for devices. How devices can help you predict the..."
							/>
						</SwiperSlide>
					</Swiper>
					{/* </div>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Home;
