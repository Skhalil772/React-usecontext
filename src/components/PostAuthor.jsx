import { useSelector } from "react-redux";
import { selectAllusers } from "../Features/UserSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllusers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
