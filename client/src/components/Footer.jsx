import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<footer className="">
				<div className="py-3 bg-dark">
					<div className="container mx-auto px-4 max-w-screen-2xl py-4">
						<div className="flex items-center w-full">
							<div className="w-[50%]">
								<div className="flex gap-3 justify-center">
									<img src="/assets/images/newsletter.png" alt="newsletter" />
									<h2 className="font-rmedium text-white text-2xl">
										Subscribe For Newsletter!
									</h2>
								</div>
							</div>
							<div className=" w-[50%]">
								<div className="flex justify-center w-[500px]">
									<input
										type="text"
										className="border-[1px] border-transparent rounded-l-md px-3 py-2 w-full focus:outline-none focus:border-gray-500 font-rregular"
										placeholder="Enter your email address..."
										aria-label="Enter your email address..."
										aria-describedby="basic-addon2"
									/>
									<span className="hover:bg-amber-400 bg-slate-600 px-3 py-2 rounded-r-md hover:text-gray-700 text-white items-center flex cursor-pointer transition-all font-rregular">
										Subscribe
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="py-3 bg-dark border-t-gray-500 border-t-[1px]">
					<div className="container mx-auto px-8 max-w-screen-2xl py-10">
						<div className="flex w-full items-start">
							<div className="text-white w-[25%] flex justify-center flex-col">
								<h4 className="font-rmedium text-lg mb-6">Contact Info</h4>
								<div className="flex flex-col gap-3 font-rlight text-sm">
									<address>Baalbek, Lebanon</address>
									<a href="mailto:wahabtlais@gmail.com">wahabtlais@gmail.com</a>
									<a href="tel:+961 70 428 794">+961 70 428 794</a>
								</div>
								<div className="flex gap-2 mt-5">
									<a
										href="#"
										className="bg-slate-700 hover:bg-amber-400 hover:text-slate-900 transition-all h-10 w-10 rounded-full flex items-center justify-center"
									>
										<BsLinkedin />
									</a>
									<a
										href="#"
										className="bg-slate-700 hover:bg-amber-400 hover:text-slate-900 transition-all h-10 w-10 rounded-full flex items-center justify-center"
									>
										<BsGithub />
									</a>
									<a
										href="#"
										className="bg-slate-700 hover:bg-amber-400 hover:text-slate-900 transition-all h-10 w-10 rounded-full flex items-center justify-center"
									>
										<BsInstagram />
									</a>
								</div>
							</div>
							<div className="text-white w-[25%] flex justify-center flex-col">
								<h4 className="font-rmedium text-lg mb-6">Store Policy</h4>
								<div className="flex flex-col gap-3 font-rlight text-sm">
									<Link className="hover:text-amber-400 transition-all">
										Information
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Privacy
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Refund
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Shipping
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Service
									</Link>
								</div>
							</div>
							<div className="text-white w-[25%] flex justify-center flex-col">
								<h4 className="font-rmedium text-lg mb-6">Quick Links</h4>
								<div className="flex flex-col gap-3 font-rlight text-sm">
									<Link className="hover:text-amber-400 transition-all">
										About Us
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Contact
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										FAQs
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Compare
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Wishlist
									</Link>
								</div>
							</div>
							<div className="text-white w-[25%] flex justify-center flex-col">
								<h4 className="font-rmedium text-lg mb-6">Collection</h4>
								<div className="flex flex-col gap-3 font-rlight text-sm">
									<Link className="hover:text-amber-400 transition-all">
										Our Store
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Appliances
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Speakers
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Watches
									</Link>
									<Link className="hover:text-amber-400 transition-all">
										Laptops
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="py-3 bg-dark border-t-gray-500 border-t-[1px]">
					<div className="container mx-auto px-4 max-w-screen-2xl py-4">
						<div className="flex flex-wrap">
							<div className="w-full">
								<p className="font-rregular text-sm text-white text-center">
									Copyright &copy; {new Date().getFullYear()} by Wahab Tlais
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
