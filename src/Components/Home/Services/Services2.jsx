import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

const Services2 = () => {
	return (
		<div className="services2__container bg-lemon-chiffon">
			<div className="grid grid-cols-1 md:grid-cols-2 px-8">
				{/* Text Container */}
				<div className="order-1 flex flex-col justify-center md:order-2 py-4 md:px-8 md:py-8">
					<h3 className="mt-10 text-bright-teal font-semibold xl:text-xl">
						Web Design & Development
					</h3>
					<h2 className="font-bold text-darkGreen text-2xl mb-8 xl:text-3xl">
						Crafting Digital Experiences That Connect and Convert
					</h2>
					<p className="mb-10">
						At NextWave, we believe in building websites that go
						beyond aesthetics. Our goal is to create digital spaces
						that not only look stunning but are strategically
						developed to drive results. From the initial design to
						the final line of code, we work with you to develop a
						site that supports your business goals and elevates user
						experience.
					</p>

					{/* Icons and Text Grid */}
					<div className="grid grid-cols-5 grid-rows-2 gap-0 xl:flex">
						{/* Icon 1 */}
						<div className="row-start-1 col-start-1 flex items-center justify-center">
							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
								<GroupAddIcon
									className="text-white text-2xl"
									style={{ width: '30px', height: '30px' }}
								/>
							</div>
						</div>

						{/* Text 1 */}
						<div className="row-start-1 col-start-2 col-end-6 flex items-center">
							<div className="services2__icon__text p-5">
								<h2 className="font-semibold mb-2 text-bright-teal">
									User-Centric Design
								</h2>
								<p>
									Our designs prioritize user experience,
									creating intuitive, seamless interactions
									that keep users engaged and returning.
								</p>
							</div>
						</div>

						{/* Icon 2 */}
						<div className="row-start-2 col-start-1 flex items-center justify-center">
							<div className="bg-yale-blue rounded-full flex items-center justify-center w-16 h-16">
								<ManageAccountsIcon
									className="text-white"
									style={{ width: '35px', height: '35px' }}
								/>
							</div>
						</div>

						{/* Text 2 */}
						<div className="row-start-2 col-start-2 col-end-6 flex items-center">
							<div className="services2__icon__text p-5">
								<h2 className="font-semibold mb-2 text-bright-teal">
									Ongoing Support & Growth
								</h2>
								<p>
									Our team provides continual support,
									ensuring your website adapts as your
									business grows and meets the needs of your
									expanding audience.
								</p>
							</div>
						</div>
					</div>

					<div className="services2__button justify-center items-center mb-5">
						<Link to="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call">
							<button
								id="zoom-service-button"
								className="btn-primary text-white mt-5 py-2 rounded-md flex justify-center w-full
                md:w-4/5 md:py-3 lg:justify-around lg:px-4 lg:w-3/5 xl:w-2/5 xl:px-4 2xl:w-1/2 2xl:px-12"
							>
								<span className="leading-none">
									No Pressure Zoom Call
								</span>
								<ArrowForwardIosIcon fontSize="small" />
							</button>
						</Link>
					</div>
				</div>

				{/* Image Container */}
				<div className="order-2 flex flex-col justify-center items-center md:order-1">
					<div className="grid grid-cols-1 gap-0 py-12 md:px-0 md:py-0 md:grid-cols-4 md:grid-rows-7 md:gap-2 lg:grid-cols-9 lg:grid-rows-6 lg:gap-2">
						{/* Image 1 */}
						<div className="md:row-start-5 md:row-end-8 md:col-start-1 md:col-end-5 lg:col-start-3 lg:col-end-8 lg:row-start-4 lg:row-end-7">
							<img
								loading="lazy"
								className="w-full object-cover my-2 md:my-0"
								src="/images/services/design.svg"
								alt="Design"
							/>
						</div>

						{/* Image 2 */}
						<div className="hidden md:block md:flex md:items-center md:justify-center md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-4">
							<img
								loading="lazy"
								className="w-full object-cover mb-2 md:mb-0"
								src="/images/services/landingPage.svg"
								alt="LandingPage"
							/>
						</div>

						{/* Image 3 */}
						<div className="hidden md:block md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4 lg:flex lg:items-center lg:justify-center">
							<img
								loading="lazy"
								className="w-full object-cover mb-2 md:mb-0"
								src="/images/services/mobileDev.svg"
								alt="MobileDev"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services2;
