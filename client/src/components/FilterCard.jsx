import { useState } from "react";
import {
	Typography,
	List,
	ListItem,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Checkbox from "../components/Checkbox";
import RandomProductCard from "./RandomProductCard";

const FilterCard = () => {
	// Use an object to keep track of each accordion's state
	const [open, setOpen] = useState({});

	const handleOpen = (id) => {
		setOpen((prevState) => ({
			...prevState,
			[id]: !prevState[id], // Toggle the state of the clicked accordion
		}));
	};
	return (
		<div className="bg-white p-3 shadow-custom rounded-lg">
			<h2 className="text-[17px] font-rmedium text-gray-800">Filter</h2>
			<List>
				<Accordion
					open={open[1]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[1] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[1]}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Availability
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<ListItem className="py-0">
								<Checkbox label="In Stock (23)" id={"inStock"} />
							</ListItem>
							<ListItem className="py-0">
								<Checkbox label="Out of Stock (1)" id={"outOfStock"} />
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open[2]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[2] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[2]}>
						<AccordionHeader
							onClick={() => handleOpen(2)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Price
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<div className="flex flex-col items-start gap-2 ml-[15px]">
								<p className="text-xs font-rregular text-gray-400">
									The highest price is $70.00
								</p>
								<div className="flex items-center gap-2">
									<span className="text-sm font-rregular text-gray-400">$</span>
									<input
										type="number"
										name=""
										id=""
										placeholder="0"
										className="w-28 h-10 rounded-xl border-gray-300 text-sm font-rregular text-gray-800 focus:border-gray-700 focus:border-2 focus:ring-0"
									/>
									<input
										type="number"
										name=""
										id=""
										placeholder="70.00"
										className="w-28 h-10 rounded-xl border-gray-300 text-sm font-rregular text-gray-800 focus:border-gray-700 focus:border-2 focus:ring-0"
									/>
								</div>
							</div>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open[3]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[3] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[3]}>
						<AccordionHeader
							onClick={() => handleOpen(3)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Product Type
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<ListItem>
								<Checkbox label="Watches (2)" id={"watches"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Tablets (1)" id={"tablets"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Speakers (2)" id={"speakers"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Speaker Accessories (2)" id={"speakersAcc"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Smart TV (1)" id={"smartTv"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Printer (1)" id={"printer"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Power Bank (1)" id={"powerbank"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Plug (1)" id={"plug"} />
							</ListItem>
							<ListItem>
								<p className="text-xs font-rregular text-gray-500 hover:text-amber-400 transition duration-300 ease-in-out">
									+ Show more
								</p>
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open[4]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[4] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[4]}>
						<AccordionHeader
							onClick={() => handleOpen(4)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Brand
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<ListItem>
								<Checkbox label="Apple (2)" id={"apple"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Boss (1)" id={"boss"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Google (1)" id={"google"} />
							</ListItem>
							<ListItem>
								<Checkbox label="HP (2)" id={"HP"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Laptop (1)" id={"laptop"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Lenovo (1)" id={"lenovo"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Logi (1)" id={"logi"} />
							</ListItem>
							<ListItem>
								<Checkbox label="Mcdodo (2)" id={"mcdodo"} />
							</ListItem>
							<ListItem>
								<p className="text-xs font-rregular text-gray-500 hover:text-amber-400 transition duration-300 ease-in-out">
									+ Show more
								</p>
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open[5]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[5] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[5]}>
						<AccordionHeader
							onClick={() => handleOpen(5)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Color
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<div className="flex flex-wrap ml-[15px]">
								<ul className="flex flex-wrap gap-1">
									<li className="w-6 h-6 bg-[#000000] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#0077b6] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#00BFFF] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#131921] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#888888] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#4e8a65] border-gray-500 border rounded-full cursor-pointer"></li>
									<li className="w-6 h-6 bg-[#66a1ed] border-gray-500 border rounded-full cursor-pointer"></li>
								</ul>
							</div>
							<ListItem>
								<p className="text-xs font-rregular text-gray-500 hover:text-amber-400 transition duration-300 ease-in-out">
									+ Show more
								</p>
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open[6]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[6] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[6]}>
						<AccordionHeader
							onClick={() => handleOpen(6)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Size
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<ListItem className="py-0">
								<Checkbox label="M (0)" id={"m"} />
							</ListItem>
							<ListItem className="py-0">
								<Checkbox label="L (1)" id={"l"} />
							</ListItem>
							<ListItem className="py-0">
								<Checkbox label="XL (0)" id={"xl"} />
							</ListItem>
							<ListItem className="py-0">
								<Checkbox label="55 (0)" id={"55"} />
							</ListItem>
							<ListItem className="py-0">
								<Checkbox label="65 (0)" id={"65"} />
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>

				<Accordion
					open={open[7]}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open[7] ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open[7]}>
						<AccordionHeader
							onClick={() => handleOpen(7)}
							className="border-b-0 p-3"
						>
							<Typography
								color="blue-gray"
								className="mr-auto font-rlight text-gray-800 text-[15px]"
							>
								Product Tag
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							<div className="flex flex-wrap ml-[15px] gap-3">
								<span className="py-2 px-3 bg-slate-100 rounded-lg text-sm font-rregular text-gray-600 cursor-pointer hover:bg-slate-200 transition-all">
									Headphone
								</span>
								<span className="py-2 px-3 bg-slate-100 rounded-lg text-sm font-rregular text-gray-600 cursor-pointer hover:bg-slate-200 transition-all">
									Mobile
								</span>
								<span className="py-2 px-3 bg-slate-100 rounded-lg text-sm font-rregular text-gray-600 cursor-pointer hover:bg-slate-200 transition-all">
									Laptop
								</span>
								<span className="py-2 px-3 bg-slate-100 rounded-lg text-sm font-rregular text-gray-600 cursor-pointer hover:bg-slate-200 transition-all">
									Tablet
								</span>
								<span className="py-2 px-3 bg-slate-100 rounded-lg text-sm font-rregular text-gray-600 cursor-pointer hover:bg-slate-200 transition-all">
									Speaker
								</span>
							</div>
							<ListItem>
								<p className="text-xs font-rregular text-gray-500 hover:text-amber-400 transition duration-300 ease-in-out">
									+ Show more
								</p>
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>

				<div className="mt-3">
					<h3
						color="blue-gray"
						className="font-rmedium text-gray-800 text-[15px] ml-3"
					>
						Random Products
					</h3>
					<RandomProductCard
						title={"Kids Tab bulk 10 pack multi colored for students"}
						image={"/assets/images/tab1.jpg"}
						price={"12.00"}
						additionalStyles={"border-b"}
						className="border-b"
					/>

					<RandomProductCard
						title={"Watch bulk 10 pack multi colored for students"}
						image={"/assets/images/watch.jpg"}
						price={"20.00"}
					/>
				</div>
			</List>
		</div>
	);
};

export default FilterCard;
