import React from 'react'
import { Outlet } from 'react-router-dom';
import {Sidebar} from '../Sidebar';

import './index.scss';


export const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />

        <span className="tags botton-tags">
          &lt;body&gt;
          <br />
          <span className="botton-tag-html">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  )
}
