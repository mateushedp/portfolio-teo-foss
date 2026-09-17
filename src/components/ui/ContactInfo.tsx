import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
	icon: LucideIcon;
	title: string;
	value: string;
}

export default function ContactInfo({ icon: Icon, title, value }: ContactInfoProps) {
	return (
		<div className="flex items-start gap-6">
			<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-brand/5 shrink-0">
				<Icon size={20} strokeWidth={1.5} />
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-base text-green-brand">{title}</span>
				<span className="text-xs text-green-brand">{value}</span>
			</div>
		</div>
	);
}