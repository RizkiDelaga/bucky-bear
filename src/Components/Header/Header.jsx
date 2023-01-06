import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="header">
        <div className="header__logo">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width={100} alt="Netflix Logo" />
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
