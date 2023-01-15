import { useSelector } from "react-redux/es/exports";

export const Home = () => {
	const username = useSelector((state: any) => state.user.value.username);

	return <h1>This is the home page {username}</h1>;
};
