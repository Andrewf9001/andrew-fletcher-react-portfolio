import React from "react";
import contactImage from "../../../static/assets/images/contact/contactPicture.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">></div>

            <div className="text">555-555-5555</div>
          </div>
        </div>
      </div>
    </div>
  );
}
