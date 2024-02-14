import "./Portfolio.css";
import Thumb, { ThumbProps } from "../thumb/Thumb";
import Filter from "../filter/Filter";

import events from './data';

const Portfolio = () => {
  return (
    <>
      <Filter />
      <div className="portfolio">
        {events.map((event: ThumbProps) => (
          <Thumb {...event} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
