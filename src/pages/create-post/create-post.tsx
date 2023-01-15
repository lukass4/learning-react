import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { CreateForm } from "./create-form";

export const CreatePost = () => {
	const [user] = useAuthState(auth);

	return (
		<div>
			{user ? (
				<CreateForm />
			) : (
				<p style={{ color: "red" }}>
					You need to be logged in to view this page.
				</p>
			)}
		</div>
	);
};
