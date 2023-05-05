import React from "react";

export default function NavBar(props) {
  return (
    <div className="navbar bg-base-100" data-theme="dark">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-100"
          >
            <li>
            <a href="/epl">EPL</a>
          </li>
          <li tabIndex={0}>
            <a href="/laliga">La Liga</a>
          </li>
          <li>
            <a href="/seriea">Serie A</a>
          </li>
          <li>
            <a href="/ligue">Ligue 1</a>
          </li>
          <li>
            <a href="/bundesliga">BundesLiga</a>
          </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          LiveScores
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/epl">EPL</a>
          </li>
          <li tabIndex={0}>
            <a href="/laliga">La Liga</a>
          </li>
          <li>
            <a href="/seriea">Serie A</a>
          </li>
          <li>
            <a href="/ligue">Ligue 1</a>
          </li>
          <li>
            <a href="/bundesliga">BundesLiga</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label htmlFor="my-modal-3" className="btn" onClick={props.onOpen}>
          ABOUT
        </label>
      </div>
    </div>
  );
}
