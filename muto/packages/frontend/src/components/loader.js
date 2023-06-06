import { useState, useEffect } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLoader && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border border-warning" style={{ height: "3rem", width: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!showLoader && <p>Your content goes here</p>}
    </>
  );
}
