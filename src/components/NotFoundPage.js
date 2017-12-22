import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    Nope, not found.  Why not <Link to="/">go home</Link> instead?
  </div>
);

export default NotFoundPage;