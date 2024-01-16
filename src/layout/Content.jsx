import React from "react";

export const Content = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div style={{ width: "80%" }}>{children}</div>
    </div>
  );
};
