import { MFEs } from './mfeRegister';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const appRoutes = MFEs.map((mfe) => (
    <li key={mfe.name}>
      <Link to={mfe.route}>{mfe.name}</Link>
    </li>
  ));
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {appRoutes}
      </ul>
    </nav>
  );
};

export default NavMenu;
