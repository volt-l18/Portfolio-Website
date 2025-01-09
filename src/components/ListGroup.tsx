import { useState } from "react";
function ListGroup() {
  const items = ["alee", "nya nya", "nickorange", "uvomber"];
  // hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <div className="container">
        <h1>frens inside computer</h1>
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
              onClick={() => {
                setSelectedIndex(index);
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
