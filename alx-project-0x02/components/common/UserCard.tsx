import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <article style={{
      border: "1px solid #e5e7eb",
      padding: 12,
      borderRadius: 8,
      background: "#fff"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ margin: "0 0 6px 0" }}>{email}</p>
      <small style={{ color: "#6b7280" }}>{address}</small>
    </article>
  );
}
