import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        {items.length === 0 && <p>no items found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onMouseEnter={() => {
                setSelectedIndex(index);
              }}
              onMouseLeave={() => {
                setSelectedIndex(-1);
              }}
              onClick={() => {
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
