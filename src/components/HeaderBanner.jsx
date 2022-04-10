import React from "react";

export default function HeaderBanner(props) {
  return (
    <div className="bg-primary py-7">
      <div className="container norwester checkout-work text-center text-gcgreen">
        <h3 className="header-banner-text">{props.title}</h3>
      </div>
    </div>
  );
}
