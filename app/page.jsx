import { useState } from "react";

function Header({ title = "Develop. Preview.Ship." }) {
  return <h1>{title}</h1>;
}

export default function Homepage() {
  const names = ["Robert Habeck", "JensSpahn", "Karl Lauterbach"];
  const [likes, setLikes] = useState(0);

  function onClickLike() {
    setLikes((x) => x + 1);
  }

  return (
    <div>
      <Header title="React" />
      <Header />
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={onClickLike}>Like {likes}</button>
    </div>
  );
}
