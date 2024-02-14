import { Link, useLocation } from "react-router-dom";
import "./NavList.css";

const NavList = () => {
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  const navMenu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Events", path: "/event" },
    { id: 3, title: "Publish", path: "/publish" },
  ];

  const handleClick = (item: string) => {
    console.log(item, "is clicked");
  };

  return (
    <div className="flex_box">
      <nav className="menu">
        {navMenu.map((item) => (
          <Link
            className={pathname === item.path ? "active" : ""}
            to={item.path}
            key={item.id}
            onClick={() => handleClick(item.title)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <span className="material-icons account">account_circle</span>
    </div>
  );
};

export default NavList;
