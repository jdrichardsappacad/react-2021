import { NavLink } from 'react-router-dom';

const ArticleDetail = ({ id, title }) => {
  return (
    <li>
      <NavLink to={`/article/${id}`}>{title}</NavLink>
    </li>
  );
};

export default ArticleDetail;
