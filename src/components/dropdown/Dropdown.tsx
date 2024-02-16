import "./Dropdown.css";

const Dropdown = (props:any) => {
  return (
    <div className="dropdown">
      {props.children}
      <div className="dropdown-content">
        <p>My Profile</p>
        <ul className="menu">
          <li>Bookings</li>
          <li>Notifications</li>
          <li>Notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
