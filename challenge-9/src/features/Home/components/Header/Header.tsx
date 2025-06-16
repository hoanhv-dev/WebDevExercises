import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className='h-16 bg-yellow-100 flex items-center justify-end px-6 border-b border-gray-300 z-0 relative fixed top-0 left-0'>
      <button
        className='text-gray-500 hover:scale-105 text-2xl focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full p-2'
        aria-label='Settings'
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
    </nav>
  );
};

export default Header;
