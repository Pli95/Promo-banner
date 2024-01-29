import React, { useState, useEffect } from "react";
import "./promo-banner.css";

const PromotionBanner = () => {
  // Set your promotion details
  const mainInfo = "Hurry! Start building now:"; // Change this to your desired text
  const endDate = new Date("2024-2-1"); // Change this to your promotion end date
  const popupInfo = "*With system purchase"; // Change this to your desired text for the popup
  const pageLink = "Start Building"; // Change this to your desired text for the link
  const promoInfo =
    "Additional details about the promotion will be displayed here."; // Change this to your desired text for promo info

  // State variables
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = endDate - now;

      setDays(
        Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0")
      );
      setHours(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0")
      );
      setMinutes(
        Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0")
      );
      setSeconds(
        Math.floor((timeRemaining % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0")
      );

      if (timeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  // Popup state
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
    console.log(isPopupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div id="promotion-banner">
        <span id="img-set">
          <img src="https://picsum.photos/id/237/250" alt="puppy" />
          <img src="https://picsum.photos/id/237/250" alt="puppy" />
          <img src="https://picsum.photos/id/237/250" alt="puppy" />
        </span>
        <div id="main-container">
          {`${mainInfo}`}
          <span id="countdown-timer">
            <div>{`${days}d`}</div>
            <div>{`${hours}h`}</div>
            <div>{`${minutes}m`}</div>
            <div>{`${seconds}s`}</div>
          </span>
          <div id="details-popup" onClick={openPopup}>
            {`${popupInfo}`}
          </div>
        </div>
        <span id="link">{`${pageLink}`}</span>
      </div>

      {isPopupOpen && (
        <div id="popup">
          <div id="popup-content">
            <span id="close-popup" onClick={closePopup}>
              X
            </span>
            <p>{`${promoInfo}`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionBanner;
