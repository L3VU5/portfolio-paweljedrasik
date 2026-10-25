function Button({ className, title, onClick, disabled }) {
	return (
		<button type="button" onClick={onClick} className={className} disabled={disabled}>
			{title}
		</button>
	);
}

export default Button;
