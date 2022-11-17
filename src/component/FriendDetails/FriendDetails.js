import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

export default function FriendDetails() {
  const { friendId } = useParams();
  const [friendDetails, setFriendDetails] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriendDetails(data));
  }, [friendId]);
  return (
    <div>
      <h4>name: {friendDetails.name}</h4>
      <h4>username: {friendDetails.username}</h4>
      <h4>address: {friendDetails.address?.city}</h4>
    </div>
  );
}
