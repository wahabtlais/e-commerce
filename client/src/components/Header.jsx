import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Dropdown from "./UI/Dropdown";

const Header = () => {
	return (
		<>
			<header>
				<div className="container mx-auto px-6 max-w-screen-2xl bg-dark border-b-gray-500 border-b-[1px] py-3">
					<div className="flex flex-wrap justify-between">
						<div className="">
							<p className="text-white mb-0 text-sm font-rregular lg:block hidden">
								Free Shipping Over $100 & Free Returns
							</p>
						</div>
						<div className="">
							<p className="text-end text-white mb-0 text-sm font-rregular lg:block hidden">
								Phone: <a href="tel:+961 70428794">+961 70 428 794</a>
							</p>
						</div>
					</div>
				</div>
				<nav className="">
					<div className="container mx-auto px-4 max-w-screen-2xl bg-dark py-4">
						<div className="flex flex-wrap justify-between items-center">
							<div className="flex w-[50%] gap-16 items-center">
								<div>
									<h1>
										<Link className="text-white text-3xl font-rsemibold">
											ZipZap
										</Link>
									</h1>
								</div>
								<div className="w-[60%] ">
									<div className="flex">
										<input
											type="text"
											className="border-[1px] border-transparent rounded-l-lg px-3 py-2 w-full focus:outline-none focus:border-gray-500 font-rregular"
											placeholder="Search Product Here..."
											aria-label="Search Product Here"
											aria-describedby="basic-addon2"
										/>
										<span className="bg-amber-400 px-3 py-2 rounded-r-md text-gray-700 items-center flex cursor-pointer ">
											<BsSearch />
										</span>
									</div>
								</div>
							</div>
							<div className="w-[50%]">
								<div className="flex items-center gap-7 justify-end">
									<div>
										<Link className="flex gap-[10px] items-center">
											<img
												src="/assets/images/compare.svg"
												alt="compare"
												className="w-8 h-8"
											/>
											<p className="text-white text-sm font-rregular lg:block hidden">
												Compare <br /> Products
											</p>
										</Link>
									</div>
									<div>
										<Link className="flex gap-[10px] items-center">
											<img
												src="/assets/images/wishlist.svg"
												alt="compare"
												className="w-8 h-8"
											/>
											<p className="text-white text-sm font-rregular lg:block hidden">
												Favorate <br /> Wishlist
											</p>
										</Link>
									</div>
									<div>
										<Link className="flex gap-[10px] items-center">
											<img
												src="/assets/images/user.svg"
												alt="compare"
												className="w-8 h-8"
											/>
											<p className="text-white text-sm font-rregular lg:block hidden">
												Login <br /> My Account
											</p>
										</Link>
									</div>
									<div>
										<Link className="flex gap-[10px] items-center">
											<img
												src="/assets/images/cart.svg"
												alt="compare"
												className="w-8 h-8"
											/>
											<div className="flex flex-col gap-1">
												<span className="text-black bg-white w-6 h-4 rounded-lg flex items-center justify-center text-xs font-rregular">
													0
												</span>
												<span className="text-white font-rregular text-sm">
													$0.00
												</span>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-slate-800 container mx-auto px-4 max-w-screen-2xl py-4">
						<div className="flex flex-wrap">
							<div className="w-full">
								<div className="flex items-center">
									<Dropdown
										title="Shop Categories"
										titleStyles="mr-10"
										containerStyles=" w-64 mr-9"
										additionalElement={
											<img
												src="/assets/images/menu.svg"
												alt="menu"
												className="w-5 h-6"
											/>
										}
									/>

									<div className="flex items-center gap-4">
										<NavLink
											className="text-white font-rregular text-sm uppercase"
											to="/"
										>
											Home
										</NavLink>
										<NavLink
											className="text-white font-rregular text-sm uppercase"
											to="/"
										>
											Our Store
										</NavLink>
										<NavLink
											className="text-white font-rregular text-sm uppercase"
											to="/"
										>
											Blogs
										</NavLink>
										<NavLink
											className="text-white font-rregular text-sm uppercase"
											to="/contact"
										>
											Contact
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
