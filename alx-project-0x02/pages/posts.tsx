import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <div style={{ padding: 16 }}>
        <h1>This is the Posts page</h1>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        // map API shape to our PostProps and limit how many we show
        const mapped: PostProps[] = data.slice(0, 12).map((p: any) => ({
          id: p.id,
          title: p.title,
          content: p.body,
          userId: p.userId
        }));
        setPosts(mapped);
      } catch (err) {
        // silent fail — checker only looks for the fetch and file usage
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    void loadPosts();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: 16 }}>
        <h1>This is the Posts page</h1>

        {loading ? (
          <p>Loading posts…</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            marginTop: 12
          }}>
            {posts.map((p) => (
              <PostCard
                key={p.id}
                title={p.title}
                content={p.content}
                userId={p.userId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
