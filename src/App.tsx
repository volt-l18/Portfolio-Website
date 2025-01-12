import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  let items = ["Name : khushal Neekhra"];

  const heandleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar />
      <ListGroup
        items={items}
        heading="hello"
        onSelectItem={heandleSelectItem}
      />
      {alertVisible && (
        <Alert onclose={() => setAlertVisibility(false)}>
          good now hire me
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="info">
        click me
      </Button>
    </div>
  );
}

export default App;
