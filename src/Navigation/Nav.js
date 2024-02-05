import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query, count }) => {
  return (
    <nav className="bg-gray-200 p-4 ">
      <div className="flex items-center justify-between mx-20 ">
        <div>
        <h1>🛒</h1>
        </div>
        <div className="border-2 px-5 py-3">
          <input
            className="border-none outline-none"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="flex items-center space-x-5">
          <a href="#" className="text-2xl text-black">
            <AiOutlineHeart />
          </a>
          <div className="relative">
            <a href="#" className="text-3xl text-black">
              <AiOutlineShoppingCart />
            </a>
            {count > 0 && (
              <span className="bg-blue-500 text-white rounded-full px-2 absolute top-0 right-0 -mt-2 -mr-2">
                {count}
              </span>
            )}
          </div>
          <a href="#" className="text-2xl text-black">
            <AiOutlineUserAdd />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
