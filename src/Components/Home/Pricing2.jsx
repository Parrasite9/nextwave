import React from 'react';
import { Link } from 'react-router-dom';

function Pricing2() {
	const handleButtonClick = async () => {
		try {
			// Push event to GTM's data layer
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: 'custom_button_click',
				button_name: 'Book A FREE Consultation', // Static name for the single button
			});

			console.log('Event pushed to dataLayer');

			// Introduce a short delay to allow GTM to process the event
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Redirect to the external link
			window.location.href =
				'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call';
		} catch (error) {
			console.error('Error sending event:', error);
		}
	};

	return (
		<div className="px-8">
			<section
				id="relume"
				className="px-[5%] py-16 flex justify-center md:py-24 lg:py-28"
			>
				<div className="container">
					<div className="mb-8 w-full max-w-lg lg:mb-20">
						<p className="mb-3 text-bright-teal font-semibold md:mb-4">
							Professional Web Services Tailored to Your Needs
						</p>
						<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							Pricing plan
						</h2>
						<p className="md:text-md">
							We provide comprehensive web design, development,
							and digital marketing solutions to help your
							business thrive online.
						</p>
					</div>
					<div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										loading="lazy"
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-8"
										alt="Relume logo 1"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
										Web Design & Development
									</h3>
									<p>
										Craft modern, user-friendly websites
										designed to convert visitors into
										customers while reflecting your brand’s
										unique personality and goals.
									</p>
								</div>
							</div>
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										loading="lazy"
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-8"
										alt="Relume logo 2"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
										Search Engine Optimization (SEO)
									</h3>
									<p>
										Increase visibility on Google and drive
										organic traffic to your website with
										tailored SEO strategies designed for
										long-term success.
									</p>
								</div>
							</div>
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										loading="lazy"
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-8"
										alt="Relume logo 3"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
										Digital Marketing
									</h3>
									<p>
										Run effective campaigns on Google,
										Facebook, and other platforms, targeting
										the right audience to maximize your ROI
										and business growth.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="h-full border border-border-primary px-6 py-8 md:p-8">
								<div className="flex flex-col items-start justify-between lg:flex-row">
									<div>
										<h4 className="mb-2 text-sandy-brown text-xl font-bold md:text-2xl">
											Customizable Plan{' '}
										</h4>
										<p>
											Your Needs, Your Budget, Your
											Success
										</p>
									</div>
									<h5 className="mt-4 justify-self-end text-6xl font-bold md:text-9xl lg:text-6xl lg:ml-4">
										$X
										<span className="ml-4 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
											Varies
										</span>
									</h5>
								</div>
								<div className="my-8 h-px w-full shrink-0 bg-border"></div>
								<p>Includes:</p>
								<div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Custom digital marketing packages
											available on request
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Tailored web design to match your
											brand and goals
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Responsive layouts optimized for
											mobile and desktop
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											SEO-ready website structure for
											improved rankings
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Google Analytics integration for
											performance tracking
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Basic content setup (text and
											images) to get you started
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Professional email setup for
											streamlined communication
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Optional blog functionality to
											improve engagement
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Scalable cloud hosting solutions for
											fast performance
										</p>
									</div>
									<div className="flex self-start">
										<div className="mr-4 flex-none self-start">
											<svg
												stroke="green"
												fill="green"
												// stroke-width="0"
												// viewBox="0 0 24 24"
												className="size-6"
												// height="1em"
												// width="1em"
												// xmlns="http://www.w3.org/2000/svg"
											>
												<path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
											</svg>
										</div>
										<p>
											Ongoing maintenance and support
											options
										</p>
									</div>
								</div>
								<div className="my-8 h-px w-full shrink-0 bg-border"></div>
								<div>
									<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
										<button
											onClick={handleButtonClick}
											id="priceTable-button"
											className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-blue-600 text-white px-6 py-3 w-full rounded-md"
											title="Get started"
										>
											Book A FREE Consultation
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Pricing2;
