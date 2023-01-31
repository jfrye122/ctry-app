import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/country">CountryDetail</Link>
            </li>
            <li>
            <Link to="/language">LanguageDetail</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
export default Layout;