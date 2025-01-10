import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  let items = ["alee", "nya nya", "nickorange", "uvomber"];

  const heandleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="frens inside puter"
        onSelectItem={heandleSelectItem}
      />
      {alertVisible && (
        <Alert onclose={() => setAlertVisibility(false)}>WEEEBBBB!!!!!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="info">
        erm.?
      </Button>
    </div>
  );
}

export default App;
