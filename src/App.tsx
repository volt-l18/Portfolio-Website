import Button from "./components/Button";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import { useState } from "react";

function App() {
  //
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar />
      <Content />
      {alertVisible && (
        <Alert onclose={() => setAlertVisibility(false)}>
          good now hire me <br /> Email :
          {
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZcmFDJbgkRSxKdzfbBPMxJlSpcgmkrsqGTmRlshxNjpnLgdJVgcxbCQSKJnqMkQVjGkdC"
            >
              khushalneekhr@gmail.com
            </a>
          }
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} color="info">
        click me
      </Button>
    </div>
  );
}

export default App;
