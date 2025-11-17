import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home page</h1>

      <Card title="First Card" content="This is the first card." />
      <Card title="Second Card" content="This is the second card." />
    </div>
  );
}

import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type Post } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "First Card", content: "This is content for the first card." },
    { id: 2, title: "Second Card", content: "This is content for the second card." }
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  function handleCreate(post: Post) {
    // assign a simple id
    const id = posts.length ? (Math.max(...posts.map(p => p.id ?? 0)) + 1) : 1;
    setPosts(prev => [{ id, ...post }, ...prev]);
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>This is the Home page</h1>

      <div style={{ margin: "12px 0" }}>
        <button onClick={() => setModalOpen(true)}>Create Post</button>
      </div>

      <PostModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreate}
      />

      <div style={{ display: "grid", gap: 12 }}>
        {posts.map((p) => (
          <Card key={p.id} title={p.title} content={p.content} />
        ))}
      </div>
    </div>
  );
}
