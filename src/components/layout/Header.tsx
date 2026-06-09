"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
	{ label: "Home", href: "#home" },
	{ label: "Sobre", href: "#sobre" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Depoimentos", href: "#depoimentos" },
	{ label: "Contato", href: "#contato" },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-green-brand/10">
			<div className="px-4 md:px-12 h-[70px] md:h-[80px] flex items-center justify-between">

				<a href="#home" className="flex items-end gap-2">
					<Image
						src="/leaf-logo.svg"
						alt="Logo Teodora Foss"
						width={21}
						height={30}
					/>
					<span className="text-xl md:text-2xl text-green-brand tracking-[-1.2px]">
						Teodora Foss
					</span>
				</a>

				<nav className="hidden md:flex items-center gap-10">
					{links.map((link, i) => (
						<a
							key={link.href}
							href={link.href}
							className={`text-sm uppercase text-green-brand hover:opacity-70 transition-opacity ${i === 0 ? "border-b-2 border-orange-cta pb-1" : ""
								}`}
						>
							{link.label}
						</a>
					))}
				</nav>

				<button
					className="md:hidden text-green-brand"
					onClick={() => setOpen(!open)}
					aria-label="Menu"
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{open && (
				<nav className="md:hidden bg-cream border-t border-green-brand/10 px-6 py-4 flex flex-col gap-4">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className="text-sm uppercase tracking-wider text-green-brand hover:opacity-70 transition-opacity"
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}