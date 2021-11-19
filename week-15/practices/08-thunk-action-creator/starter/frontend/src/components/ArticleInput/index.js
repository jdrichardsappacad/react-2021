import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { addArticle, writeArticle } from '../../store/articleReducer';
import "./ArticleInput.css";

const ArticleInput = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const reset = () => {
    setTitle("");
    setImageUrl("");
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      // id: nanoid(),
      title,
      body,
      imageUrl,
    };

    dispatch(writeArticle(newArticle));
    reset();
  };

  return (
    <div className="inputBox">
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder="Image URL"
          name="imageUrl"
        />
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add your entry"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
