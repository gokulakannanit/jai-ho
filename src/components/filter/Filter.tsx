import { useState } from "react";
import "./Filter.css";

const tags: string[] = [
  "All",
  "Competition",
  "Kids",
  "Free",
  "Culture",
  "Dance",
  "Party",
  "Celebration",
  "Food"
];

const Filter = () => {
  const [selectedTag, setSelectedTag] = useState(tags[0]);
  const handleTagSelection = (selectedItem: string) => {
    setSelectedTag(selectedItem);
  };
  return (
    <div className="filter">
      <div className="search_txt">
        <span className="search_icon material-icons">search</span>
        <input type="text" placeholder="Search by event name, date.." />
        <span className="close_icon material-icons">close</span>
      </div>
      <div className="flex_box">
        {tags.map((item: string) => (
          <div className={selectedTag === item ? 'tags selected' : 'tags'}  onClick={() => handleTagSelection(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
