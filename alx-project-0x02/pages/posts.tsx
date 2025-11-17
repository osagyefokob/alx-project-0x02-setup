import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage({ posts }: { posts: PostProps[] }) {
  return (
    <div>
      <Header />
      <div style={{ padding: 16 }}>
        <h1>This is the Posts page</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            marginTop: 12
          }}
        >
          {posts.map((p) => (
            <PostCard
              key={p.id}
              title={p.title}
              content={p.content}
              userId={p.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.slice(0, 12).map((p: any) => ({
    id: p.id,
    title: p.title,
    content: p.body,
    userId: p.userId
  }));

  return {
    props: { posts }
  };
}
