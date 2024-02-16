import "./ServiceLinks.css";

const ServiceLinks = () => {
  return (
    <div className="service_list">
      <h1>We Provide Service To Make Events Better</h1>
      <ul className="flex_box">
        <li>
          <div>
            <span className="material-icons">fastfood</span>
          </div>
          <h2>Food & Beverages</h2>
          <p>
            You can order food and beverages for parties and events in good
            taste and best price.
          </p>
          <div>
            <button className="primary">Click For Detail</button>
          </div>
        </li>
        <li>
          <div>
            <span className="material-icons">local_taxi</span>
          </div>
          <h2>Rental Vehicle</h2>
          <p>
            You can order food and beverages for parties and events in good
            taste and best price.
          </p>
          <div>
            <button className="primary">Click For Detail</button>
          </div>
        </li>
        <li>
          <div>
            <span className="material-symbols-outlined">camping</span>
          </div>
          <h2>Camping or Decoration</h2>
          <p>
            You can order food and beverages for parties and events in good
            taste and best price.
          </p>
          <div>
            <button className="primary">Click For Detail</button>
          </div>
        </li>
        <li>
          <div>
            <span className="material-symbols-outlined">apartment</span>
          </div>
          <h2>Service Apartment</h2>
          <p>
            You can order food and beverages for parties and events in good
            taste and best price.
          </p>
          <div>
            <button className="primary">Click For Detail</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServiceLinks;
