// src/components/Footer.js
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useIsMobile from '../hooks/ScreenSizeUpdate';
import FacebookIcon from '@mui/icons-material/Facebook';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Case Studies', path: '/case-studies' },
	{ name: 'Services', path: '/#services' },
	{ name: 'Pricing', path: '/#pricing' },
	{ name: 'Blogs', path: '/blogs' },
	{ name: 'Midland Web Design', path: '/web-design-midland-tx' },
	{
		name: 'Legal',
		subLinks: [
			{ name: 'Terms and Conditions', path: '/terms-and-conditions' },
			{ name: 'Privacy Policy', path: '/privacy-policy' },
			{ name: 'Cookies Policy', path: '/cookies-policy' },
		],
	},
	{ name: 'Contact', path: '/contact' },
];

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
	const isMobile = useIsMobile();
	const [legalOpen, setLegalOpen] = useState(false);

	const quickLinks = navLinks.filter(
		(l) => l.name !== 'Legal' && l.name !== 'Contact',
	);
	const supportLinks = navLinks.filter((l) => l.name === 'Contact');
	const legal = navLinks.find((l) => l.name === 'Legal');

	return (
		<footer className="relative bg-soft-navy text-white">
			{/* subtle top glow */}
			<div className="pointer-events-none absolute -top-8 left-0 right-0 mx-auto h-8 max-w-5xl rounded-full bg-gradient-to-r from-sky-400/20 via-cyan-300/15 to-emerald-300/20 blur-xl" />

			<div className="container mx-auto px-6 py-16 md:py-20">
				{/* GRID */}
				<div
					className="
            grid grid-cols-1 gap-10
            sm:grid-cols-2
            lg:grid-cols-12
          "
				>
					{/* Brand */}
					<div className="lg:col-span-4">
						<Link to="/" className="inline-block">
							<img
								src="/images/logo/logoLight.webp"
								alt="NextWave | Web Studio"
								className="w-44 h-auto"
							/>
						</Link>
						<p className="mt-4 text-sm leading-relaxed text-white/90">
							NextWave is your partner in crafting digital
							solutions that perform. We specialize in web design,
							development, and growth strategies to help
							businesses reach new heights.
						</p>

						{/* Social */}
						<div
							className="mt-6 flex items-center gap-4"
							aria-label="Social links"
						>
							<a
								href="https://www.facebook.com/NextWaveWebStudio/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="NextWave on Facebook (opens in a new tab)"
								className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 transition hover:bg-white/15"
								title="Facebook"
							>
								<FacebookIcon fontSize="small" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<nav className="lg:col-span-3" aria-label="Quick Links">
						<h4 className="text-lg font-semibold">Quick Links</h4>
						<ul className="mt-4 space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										to={link.path}
										className="text-white/90 transition hover:text-sky-300"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Legal (accordion on mobile) */}
					<div className="lg:col-span-3">
						<div className="flex items-center justify-between">
							<h4 className="text-lg font-semibold">Legal</h4>
							{isMobile && (
								<button
									type="button"
									onClick={() => setLegalOpen((s) => !s)}
									className="rounded-md px-2 py-1 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
									aria-expanded={legalOpen}
									aria-controls="footer-legal"
								>
									{legalOpen ? 'Hide' : 'Show'}
								</button>
							)}
						</div>

						<ul
							id="footer-legal"
							className={[
								'mt-4 space-y-2 overflow-hidden transition-[max-height] duration-300',
								isMobile
									? legalOpen
										? 'max-h-40'
										: 'max-h-0'
									: 'max-h-none',
							].join(' ')}
						>
							{legal?.subLinks.map((sub) => (
								<li key={sub.name}>
									<Link
										to={sub.path}
										className="text-white/90 transition hover:text-sky-300"
									>
										{sub.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<nav className="lg:col-span-2" aria-label="Support">
						<h4 className="text-lg font-semibold">Support</h4>
						<ul className="mt-4 space-y-2">
							{supportLinks.map((link) => (
								<li key={link.name}>
									<Link
										to={link.path}
										className="text-white/90 transition hover:text-sky-300"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* Divider */}
				<div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

				{/* Bottom bar */}
				<div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-white/80 md:flex-row">
					<p>
						© {getCurrentYear()}{' '}
						<span className="font-semibold">
							NextWave | Web Studio
						</span>
						. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<Link
							to="/privacy-policy"
							className="hover:text-sky-300"
						>
							Privacy
						</Link>
						<Link
							to="/terms-and-conditions"
							className="hover:text-sky-300"
						>
							Terms
						</Link>
						<Link
							to="/cookies-policy"
							className="hover:text-sky-300"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
