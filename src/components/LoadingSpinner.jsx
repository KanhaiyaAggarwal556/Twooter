import React from "react";
import "./LoadingPage.css";
export default function LoadingSpinner() {
  return (
    <div className="LoadingPage">
      <div
        class="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
