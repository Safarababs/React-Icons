import { FaLocationDot, FaClock, FaEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <p>
              <FaLocationDot />
              safar
            </p>
            <p>
              <FaClock />
              safar
            </p>
          </div>
          <div>
            <p>
              <FaEnvelope />
              info@example.com
            </p>
            <p>
              {" "}
              <IoIosCall />
              123 456 789
            </p>
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>about</li>
            <li>project</li>
            <li>contact</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
