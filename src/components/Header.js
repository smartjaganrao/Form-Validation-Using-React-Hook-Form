import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link  to="/CreateForm" >CreateForm</Link>
          </li>

          <li>
            <Link to="/FormA" >FormA</Link>
          </li>

          <li>
            <Link to="/FormB" >FormB</Link>
          </li>

          <li>
            <Link to="/FormC" >FormC</Link>
          </li>
       
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
