import { Link } from 'react-router-dom';

import HomePage from './HomePage';

function NotFoundPage() {
  return (
    <h1>
      This page doesn't exist. Go <Link to='/'>Home</Link>.
    </h1>
  );
}

export default NotFoundPage;
