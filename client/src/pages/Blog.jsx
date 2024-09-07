import Meta from "../components/Meta";
import NewsCard from "../components/NewsCard";

const Blog = () => {
	return (
		<>
			<Meta title="Blog" />
			<div className="bg-gray-100 py-12">
				<div className="container mx-auto px-4 max-w-screen-2xl">
					<div className="flex w-full">
						<section className="p-8">
							<div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
								<NewsCard
									image="blog-01.jpg"
									date="July 20, 2024"
									title="How to Write a Blog Post Your Readers Will Love in 5 Steps"
									author="Hussien Tlais"
								/>

								<NewsCard
									image="blog-02.jpg"
									date="July 20, 2024"
									title="9 Content Marketing Trends and Ideas to Increase Traffic"
									author="Hussien Tlais"
								/>

								<NewsCard
									image="blog-03.jpg"
									date="July 20, 2024"
									title="How to Write a Blog Post Outline: A Simple Formula to Follow"
									author="Hussien Tlais"
								/>

								<NewsCard
									image="blog-04.jpg"
									date="July 20, 2024"
									title="Why do people think business software is a good idea!"
									author="Hussien Tlais"
								/>

								<NewsCard
									image="blog-05.jpg"
									date="July 20, 2024"
									title="The Ultimate Guide to Marketing Strategies to Improve Sales"
									author="Hussien Tlais"
								/>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
