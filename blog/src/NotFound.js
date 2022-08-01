import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
