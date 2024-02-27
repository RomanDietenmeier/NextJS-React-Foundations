import { LikeButton } from "./like-button";

function Header({ title = "Develop. Preview.Ship." }) {
  return <h1>{title}</h1>;
}

export default function Homepage() {
  const names = ["Robert Habeck", "JensSpahn", "Karl Lauterbach"];

  return (
    <div>
      <Header title="React" />
      <Header />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
