function Button({ className, title, onClick }) {
	return <button onClick={onClick} className={className}>{title}</button>;
}

export default Button;
