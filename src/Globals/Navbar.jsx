import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import useIsMobile from '../hooks/ScreenSizeUpdate';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Case Studies', path: '/case-studies' },
	{ name: 'Services', path: '/#services' },
	{ name: 'Pricing', path: '/#pricing' },
	{ name: 'Contact', path: '/contact' },
];

const CTA_CLASS =
	'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white ' +
	'bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 ' +
	'shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] ring-1 ring-white/30 ' +
	'transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,0.55)] ' +
	'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export default function Navbar() {
	const isMobile = useIsMobile();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow =
			isMobile && isMenuOpen ? 'hidden' : 'auto';
	}, [isMobile, isMenuOpen]);

	const renderNavLinks = (links, onClick) => (
		<ul
			className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row space-x-6'} items-center`}
		>
			{links.map((link) => (
				<li key={link.path} className="py-2 md:py-0">
					<Link
						smooth
						to={link.path}
						onClick={onClick}
						className="transition duration-300 hover:text-sky-600"
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);

	return (
		<>
			{/* Header (keeps translucent blur on desktop) */}
			<header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
				{!isMobile ? (
					<div className="mx-auto max-w-7xl px-6">
						<nav className="flex items-center justify-between py-4">
							<Link to="/" className="shrink-0" smooth>
								<img
									src="/images/logo/logoDark.webp"
									alt="Logo"
									className="h-8 w-auto md:h-9"
								/>
							</Link>

							<div className="hidden md:block">
								{renderNavLinks(navLinks)}
							</div>

							<button
								className={CTA_CLASS}
								aria-label="Schedule a Zoom call. Opens in a new tab."
								onClick={() =>
									window.open(
										'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call',
										'_blank',
									)
								}
							>
								Request A Proposal
							</button>
						</nav>
					</div>
				) : (
					<div className="px-4">
						<div className="flex items-center justify-between py-4">
							<Link to="/" smooth className="shrink-0">
								<img
									src="/images/logo/logoDark.webp"
									alt="Logo"
									className="h-7 w-auto"
								/>
							</Link>

							{isMenuOpen ? (
								<ClearIcon
									onClick={() => setIsMenuOpen(false)}
									className="text-yale-blue"
									fontSize="medium"
									role="button"
									aria-label="Close menu"
								/>
							) : (
								<MenuIcon
									onClick={() => setIsMenuOpen(true)}
									className="text-yale-blue"
									fontSize="medium"
									role="button"
									aria-label="Open menu"
								/>
							)}
						</div>
					</div>
				)}
			</header>

			{/* Mobile overlay rendered OUTSIDE the header */}
			{isMobile && isMenuOpen && (
				<div
					className="fixed inset-0 z-[1000] flex flex-col bg-white"
					role="dialog"
					aria-modal="true"
				>
					<div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
						<Link
							to="/"
							smooth
							onClick={() => setIsMenuOpen(false)}
						>
							<img
								src="/images/logo/logoDark.webp"
								alt="Logo"
								className="h-7 w-auto"
							/>
						</Link>
						<ClearIcon
							onClick={() => setIsMenuOpen(false)}
							className="text-yale-blue"
							fontSize="medium"
							role="button"
							aria-label="Close menu"
						/>
					</div>

					<div className="flex flex-1 flex-col items-center justify-center px-6">
						{renderNavLinks(navLinks, () => setIsMenuOpen(false))}
						<button
							className={`${CTA_CLASS} mt-8 w-full max-w-xs`}
							aria-label="Schedule a Zoom call. Opens in a new tab."
							onClick={() => {
								setIsMenuOpen(false);
								window.open(
									'https://scheduler.zoom.us/isaiah-johnson-c45fbx/discovery-call',
									'_blank',
								);
							}}
						>
							Request A Proposal
						</button>
					</div>
				</div>
			)}
		</>
	);
}
