import Banner from "../../components/banner/Banner";
import Portfolio from "../../components/portfolio/Portfolio";

import './Home.css';

const Home = () => {
  return (
    <>
      <Banner />
      <h1 className="page_heading">Upcoming Events Near You</h1>
      <Portfolio />
    </>
  );
};

export default Home;
