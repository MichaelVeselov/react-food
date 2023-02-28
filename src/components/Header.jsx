import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='teal accent-4'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          🧆 Food
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a href='https://github.com/MichaelVeselov/react-food' target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </li>
          <li>
            <a href='https://mve-react-food.vercel.app' target='_blank' rel='noreferrer'>
              Deploy
            </a>
          </li>
          <li>
            <a href='https://github.com/MichaelVeselov' target='_blank' rel='noreferrer'>
              Author's Page
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
