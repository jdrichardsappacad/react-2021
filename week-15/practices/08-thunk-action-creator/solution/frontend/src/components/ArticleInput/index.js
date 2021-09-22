import { useState } from "react";
//!!START SILENT
// import { nanoid } from "nanoid";
//!!END
//!!ADD
// import { nanoid } from "nanoid";
//!!END_ADD
import { useDispatch } from "react-redux";

//!!START SILENT
import { writeArticle } from "../../store/articleReducer";
//!!END
//!!ADD
// import { addArticle } from '../../store/articleReducer';
//!!END_ADD
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
      //!!ADD
      // id: nanoid(),
      //!!END_ADD
      title,
      body,
      imageUrl,
    };

    //!!START SILENT
    const article = await dispatch(writeArticle(newArticle));
    //!!END
    //!!ADD
    // dispatch(addArticle(newArticle));
    //!!END_ADD
    if (article) {
      reset();
    }
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
