import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export const Form = () => {
	const [submitted, setSubmitted] = useState(false);

	const schema = yup.object().shape({
		fullName: yup.string().required("Your full name is required"), // error message
		email: yup.string().email().required(),
		age: yup.number().positive().integer().min(18).required(),
		password: yup.string().min(4).max(20).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null])
			.required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors }, // gets errors
	} = useForm({
		resolver: yupResolver(schema), // checks with the schema from yup
	});

	const onSubmit = (data) => {
		// what happens on a submit without errors
		console.log(data);
		setSubmitted(true);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Full name..."
				{...register("fullName")}
			/>
			<p>{errors.fullName?.message}</p>{" "}
			{/* ^ Displays on incorrect password */}
			<input
				type="text"
				placeholder="Email..."
				{...register("email")}
			/>
			<input
				type="number"
				placeholder="Age..."
				{...register("age")}
			/>
			<input
				type="password"
				placeholder="Password..."
				{...register("password")}
			/>
			<input
				type="password"
				placeholder="Confirm Password..."
				{...register("confirmPassword")}
			/>
			<input type="submit" />
			{submitted && <p>Thanks, form submitted</p>}
		</form>
	);
};
