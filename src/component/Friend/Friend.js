import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Friend(props) {
  const { id, name, email, username } = props.friend;
  const navigate = useNavigate();
  return (
    <div>
      <h4>name: {name}</h4>
      <Button
        onClick={() => {
          navigate(`/friend/${id}`);
        }}
      >
        {username}, id: {id}
      </Button>
    </div>
  );
}
