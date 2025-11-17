import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home page</h1>

      <Card
        title="First Card"
        content="This is content for the first card."
      />

      <Card
        title="Second Card"
        content="This is content for the second card."
      />
    </div>
  );
}
