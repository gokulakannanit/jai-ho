import "./Thumb.css";

export interface ThumbProps {
  date: string;
  imageUrl: string;
  title: string;
  description: string;
}

const Thumb = ({ date, imageUrl, title, description }: ThumbProps) => {
  return (
    <div className="portfolio_thumb">
      <img src={imageUrl} />
      <div className="detail">
        <div className="date">{date}</div>
        <a className="book_now">Book Now</a>
      </div>
      <div className="footer">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Thumb;
