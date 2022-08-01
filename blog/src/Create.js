import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Daniel");
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      redirect("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Daniel">Daniel</option>
          <option value="Kebede">Kebede</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
