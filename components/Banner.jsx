// components/Banner.js
import React from "react";
import PropTypes from "prop-types";

const Banner = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto rounded-lg shadow-lg mb-4"
      />
    </a>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Banner;
