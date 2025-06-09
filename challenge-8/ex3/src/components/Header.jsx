import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="h-16 bg-yellow-100 flex items-center justify-end px-6 border-b border-gray-300 z-0 relative">
        <FontAwesomeIcon
          icon={faGear}
          className="text-gray-500 hover:scale-105 text-2xl"
        />
      </nav>
    </div>
  );
};

export default Header;
