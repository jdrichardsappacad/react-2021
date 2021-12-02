import { NavLink } from 'react-router-dom';

const ArticleDetail = ({ title, id }) => {
  return (
    <li>
      <NavLink to={`/article/${id}`}>{title}</NavLink>
    </li>
  );
};
export default ArticleDetail;
