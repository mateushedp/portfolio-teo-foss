import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
	return (
		<section id="sobre" className="bg-cream">
			<div
				className="flex flex-col md:flex-row"
				style={{ minHeight: "calc(100dvh - var(--header-height))" }}
			>
				<div className="md:w-1/2 md:self-stretch order-2 md:order-1 shrink-0 px-6 md:px-12 py-6 md:py-12">
					<div className="relative w-full h-[358px] md:h-full rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
						<Image
							src="/profile-pic.jpg"
							alt="Foto de Teodora Foss"
							fill
							className="object-cover object-[center_15%]"
						/>
					</div>
				</div>

				<div className="flex flex-col justify-center gap-3 w-full md:w-1/2 md:pl-12 px-6 pt-11 pb-6 md:px-12 md:py-24 order-1 md:order-2">
					<span className="text-xs uppercase tracking-widest text-orange-cta">
						Sobre Mim
					</span>

					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-green-brand">
						Teodora Foss
					</h2>

					<p className="text-lg md:text-xl tracking-tight text-green-brand pb-6">
						CRP 07/45575
					</p>

					<p className="text-base md:text-xl text-justify text-green-brand">
						Acredito que cada indivíduo possui uma história única que merece ser
						ouvida com empatia e técnica. Minha abordagem integra o rigor
						científico com a sensibilidade necessária para tratar questões
						profundas da mente humana.
					</p>

					<div className="pt-4">
						<a
							href="#"
							className="inline-flex items-center gap-2 text-sm text-green-brand border-b-2 border-green-brand pb-1 hover:opacity-70 transition-opacity"
						>
							Saiba mais sobre minha trajetória
							<ArrowRight size={15} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}