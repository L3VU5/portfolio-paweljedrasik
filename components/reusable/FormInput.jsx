import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
	onChange,
	value
}) => {
	return (
		<div className="mb-5">
			<label className="mb-2 block text-sm font-medium text-slate-300" htmlFor={labelFor}>
				{inputLabel}
			</label>
			<input
				value={value}
				className="field"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
				onChange={onChange}
			/>
		</div>
	);
};

export default FormInput;
