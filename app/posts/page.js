import { Suspense } from "react";
import LikeButton from "./[id]/LikeButton";
import Link from "next/link";

async function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => {
    return res.json();
  });
}

export default async function Posts({ params }) {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
}
