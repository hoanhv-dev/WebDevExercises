import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faStar, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <aside className="fixed w-1/5 h-full bg-yellow-100 p-4 flex flex-col gap-6 border-r border-gray-300 absolute top-0 left-0 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-600 font-bold text-2xl mb-4">
        <FontAwesomeIcon icon={faBook} />
        <span>TO-DO-LIST</span>
      </div>

      {/* <!-- Navigation Buttons --> */}
      <nav className="flex flex-col gap-2">
        <button className="flex items-center gap-2 px-3 py-2 bg-green-300 text-xl text-green-900 rounded-md hover:scale-105 transition">
          <FontAwesomeIcon icon={faCheck} className="text-gray-500" />
          Tasks
        </button>
        <button className="flex items-center gap-2 px-2.5 py-2 bg-green-300 text-xl text-green-900 rounded-md hover:scale-105 transition">
          <FontAwesomeIcon icon={faStar} className="text-gray-500" />
          Important
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-green-300 text-xl text-green-900 rounded-md hover:scale-105 transition">
          <FontAwesomeIcon icon={faTrash} className="text-gray-500" />
          Completed
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;
