import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>This is the About page</h1>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Button size="small" label="Small" shape="rounded-sm" />
        <Button size="medium" label="Medium" shape="rounded-md" />
        <Button size="large" label="Large" shape="rounded-full" />
      </div>
    </div>
  );
}
