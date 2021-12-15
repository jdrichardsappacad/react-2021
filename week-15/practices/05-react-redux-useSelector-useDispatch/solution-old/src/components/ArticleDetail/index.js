//!!START
import { NavLink } from 'react-router-dom';
//!!END

const ArticleDetail = ({ title, id }) => {
  return (
    <>
      {/*!!START */}
      <li>
        <NavLink to={`/article/${id}`}>{title}</NavLink>
      </li>
      {/*END */}

      {/*!!ADD */}
      <div>
        <h1>Article Detail Component</h1>
      </div>
      {/*!!END_ADD */}
    </>
  );
};
export default ArticleDetail;
