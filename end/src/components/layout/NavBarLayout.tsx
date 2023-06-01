import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBarLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/createItems">Create Items</Link>
          </li>
          <li>
            <Link to="/stopwatch">Stopwatch</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBarLayout;
