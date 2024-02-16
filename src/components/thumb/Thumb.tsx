import "./Thumb.css";

export interface ThumbProps {
  date: string;
  imageUrl: string;
  title: string;
  description: string;
  paid?: boolean;
}

const Thumb = ({
  date,
  imageUrl,
  title,
  description,
  paid = false,
}: ThumbProps) => {
  return (
    <div className="portfolio_thumb">
      <img src={imageUrl} />
      <div className="detail">
        <div className="date">{date}</div>
        {paid ? (
          <a className="book_now">Book Now</a>
        ) : (
          <a className="book_now">Reserve Now</a>
        )}
      </div>
      <div className="footer">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Thumb;
