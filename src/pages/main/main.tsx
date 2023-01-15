import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

export interface Post {
	id: string;
	userId: string;
	title: string;
	description: string;
	username: string;
}

export const Main = () => {
	const [postsList, setPostsList] = useState<Post[] | null>(null); // array of posts or null
	const postRef = collection(db, "posts");

	const getPosts = async () => {
		const data = await getDocs(postRef);
		setPostsList(
			data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[] // all the data will be a post (as post)
		);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			{postsList?.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};
