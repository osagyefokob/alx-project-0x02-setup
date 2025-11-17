import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <article style={{
      border: "1px solid #e5e7eb",
      padding: 12,
      borderRadius: 8,
      background: "#fff"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <p style={{ margin: "0 0 12px 0" }}>{content}</p>
      <small style={{ color: "#6b7280" }}>User ID: {userId}</small>
    </article>
  );
}
