import React from 'react';
import { useState } from 'react';

function ThankYou() {
	const [showBooking, setShowBooking] = useState(false); // Add state for showing booking iframe

	return (
		<div className="thankYou__container">
			<div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 mt-8">
				{/* Success Message */}
				{/* <div className="desktop__text__img__container flex flex-col"> */}
				<div className="flex-1 text-center lg:text-left bg-white p-6 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold text-bright-teal xl:text-4xl">
						Empowering Your Next Move 🌐
					</h2>
					<p className="mt-4 text-gray-700 lg xl:text-lg">
						You’re one step closer to gaining the insights needed to
						drive real growth. Please check your email and confirm
						your subscription to receive your report. If you don’t
						see it, check your spam folder!
					</p>
					<div className="img__container">
						<img
							className="hidden lg:block xl:w-2/3"
							src="/images/thank_you.webp"
							alt="thank_you_img"
						/>
					</div>
				</div>
				{/* </div> */}

				{/* Booking Iframe */}
				<div className="flex-1 mt-8 lg:mt-0 text-center">
					<p className="text-xl mb-4">
						Book your FREE strategy call below!
					</p>
					<iframe
						src="https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call?embed=true"
						frameBorder="0"
						className="w-full h-[700px] rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
}

export default ThankYou;
