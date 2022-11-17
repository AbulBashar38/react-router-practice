import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h1>Hellow friends.how are you</h1>
      <h3>hi friend this is my length{friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
}
