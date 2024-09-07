import CustomButton from "../components/CustomButton";
import Meta from "../components/Meta";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
	return (
		<>
			<Meta title="Contact Us" />
			<div className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full mb-8">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d211981.85378178064!2d35.666590749550735!3d33.884078514907344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1725211918227!5m2!1sen!2slb"
							className="border-0 w-full h-96"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Map Embed"
						></iframe>
					</div>
					<hr />
					<div className="flex w-full mt-8 px-8">
						<div className="w-[50%]">
							<h2 className="text-4xl font-rmedium text-gray-950 mb-5">
								Get In Touch
							</h2>
							<div className="flex flex-col gap-3">
								<div className="contact-info-centered">
									<div className="contact-info-icon-container">
										<FaLocationDot className="contact-info-icon" />
									</div>
									<p className="contact-info">Baalbek, Lebanon</p>
								</div>
								<div className="contact-info-centered">
									<div className="contact-info-icon-container">
										<FaPhoneAlt className="contact-info-icon" />
									</div>
									<p className="contact-info">+000 00 000 000</p>
								</div>
								<div className="contact-info-centered">
									<div className="contact-info-icon-container">
										<MdEmail className="contact-info-icon" />
									</div>
									<p className="contact-info">info@zipzap.com</p>
								</div>
							</div>
						</div>
						<div className="w-[50%] flex flex-col gap-5">
							<div className="flex justify-between">
								<input
									type="text"
									name=""
									id=""
									className="w-[48%] contact-form-input"
									placeholder="Name"
								/>
								<input
									type="email"
									name=""
									id=""
									className="w-[48%] contact-form-input"
									placeholder="Email"
								/>
							</div>
							<input
								type="tel"
								placeholder="Phone Number"
								className="contact-form-input"
							/>
							<textarea
								name=""
								id=""
								placeholder="Comment"
								rows={10}
								className="contact-form-input"
							></textarea>
							<CustomButton title="Send" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
