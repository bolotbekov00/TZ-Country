import loadingGif from "../pulsating-dots-dribbble.gif";

export const Loading = () => (
  <div className="loading-container d-flex justify-content-center align-items-center vh-100">
    <img
      src={loadingGif}
      alt="Loading..."
      style={{ width: "500px", height: "500px" }}
    />
  </div>
);
