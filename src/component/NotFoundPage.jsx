import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
const NotFoundPage = ()=>(
  <div>
    <div className="max-width">
      <i>404 Page</i>
    </div>
    <div>
      <Link to="/"> Go Home </Link>
    </div>
  </div>
);

export default NotFoundPage;
