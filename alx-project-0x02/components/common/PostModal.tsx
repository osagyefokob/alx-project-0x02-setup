import { useState } from "react";
import { type Post } from "@/interfaces";

interface PostModalProps {
  onCreate: (post: Post) => void;
  onClose: () => void;
  open: boolean;
}

export default function PostModal({ onCreate, onClose, open }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onCreate({ title: title.trim(), content: content.trim() });
    setTitle("");
    setContent("");
    onClose();
  }

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.4)",
      zIndex: 1000
    }}>
      <div style={{
        width: "min(600px, 95%)",
        background: "white",
        padding: "1rem",
        borderRadius: 8,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
      }}>
        <h2>Add a Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 8 }}>
            <label>
              Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                style={{ display: "block", width: "100%", marginTop: 4 }}
              />
            </label>
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>
              Content
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post content"
                style={{ display: "block", width: "100%", marginTop: 4 }}
              />
            </label>
          </div>

          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
