import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

export default function UsersPage({ users }: { users: UserProps[] }) {
  return (
    <div>
      <Header />
      <div style={{ padding: 16 }}>
        <h1>This is the Users page</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
          marginTop: 12
        }}>
          {users.map((u) => (
            <UserCard key={u.id} name={u.name} email={u.email} address={u.address} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((u: any) => {
    const addr = u.address;
    const addressString = `${addr.street}, ${addr.suite}, ${addr.city}`;
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      address: addressString
    };
  });

  return {
    props: { users }
  };
}
