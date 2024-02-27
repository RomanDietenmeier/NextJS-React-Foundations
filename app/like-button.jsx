"use client";

import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);

  function onClickLike() {
    setLikes((x) => x + 1);
  }
  return <button onClick={onClickLike}>Like {likes}</button>;
}
