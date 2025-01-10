import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onclose: () => void;
}

const Alert = ({ children, onclose }: AlertProps) => {
  return (
    <div className="container">
      <div className="alert alert-info alert-dismissible " role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onclose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
