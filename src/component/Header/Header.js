import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/chart">Cart</Link>
    </div>
  );
}
