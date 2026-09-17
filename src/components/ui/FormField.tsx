interface FormFieldProps {
	label: string;
	id: string;
	placeholder: string;
	multiline?: boolean;
	value: string;
	onChange: (value: string) => void;
}

export default function FormField({ label, id, placeholder, multiline = false, value, onChange }: FormFieldProps) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-xs uppercase tracking-widest text-green-brand">
				{label}
			</label>
			{multiline ? (
				<textarea
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="w-full bg-green-brand/5 rounded-2xl px-4 py-5 text-base text-green-brand resize-none h-32 outline-none"
				/>
			) : (
				<input
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className="w-full bg-green-brand/5 rounded-2xl px-4 py-5 text-base text-green-brand outline-none"
				/>
			)}
		</div>
	)

};