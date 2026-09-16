interface SectionHeadingProps {
	eyebrow: string;
	title: string;
	className?: string;
}

export default function SectionHeading({ eyebrow, title, className = "" }: SectionHeadingProps) {
	return (
		<div className={`flex flex-col gap-3 ${className}`}>
			<span className="text-[0.625rem] md:text-xs uppercase tracking-widest text-orange-cta">
				{eyebrow}
			</span>
			<h2 className="text-2xl md:text-5xl tracking-tight text-green-brand">
				{title}
			</h2>
		</div>
	);
}