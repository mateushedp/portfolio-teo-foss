import { ArrowRight, Blocks, TabletSmartphone, User, Armchair } from "lucide-react";

const cards = [
	{ title: "Atendimento de Adultos e Crianças", icon: Blocks },
	{ title: "Psicoeducação nas Redes", icon: TabletSmartphone },
	{ title: "Terapia Individual", icon: User },
	{ title: "Online e Presencial", icon: Armchair },
];

export default function Services() {
	return (
		<section id="servicos" className="bg-cream">
			<div className="flex flex-col md:flex-row gap-12 px-6 md:px-12 py-11 md:py-32">
				<div className="flex flex-col gap-3 md:w-1/2 max-w-[576px]">
					<span className="text-xs uppercase tracking-widest text-orange-cta">
						Especialidades
					</span>

					<h2 className="text-2xl text-center mb-4 md:mb-0 md:text-justify md:text-5xl tracking-tight text-green-brand">
						Cuidado sob medida para você.
					</h2>

					<p className="text-base text-justify md:text-xl text-green-brand">
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

				<div className="grid grid-cols-2 gap-4 md:ml-8 md:w-1/2">
					{cards.map(({ title, icon: Icon }) => (
						<div
							key={title}
							className="flex flex-col items-center justify-center gap-4 bg-green-brand rounded-2xl p-6 md:p-10 shadow-[0px_4px_4px_rgba(17,72,23,0.2)] text-center"
						>
							<div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-cream shadow-sm shrink-0">
								<Icon size={40} className="text-orange-cta" strokeWidth={1.5} />
							</div>
							<span className="font-headland text-lg md:text-2xl text-cream leading-snug">
								{title}
							</span>
						</div>
					))}
				</div>
			</div>
		</section >
	);
}