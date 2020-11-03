import React from "react";

const ImageList = (props) => {
  const images = props.item.map((image) => {
    return (
      <ul key={image.id}>
        <img src={image.urls.small} alt={image.id} />
        <li>Description: {image.alt_description}</li>
        <li>
          Name: {image.user.first_name} {image.user.last_name}
        </li>
        <li> Instagram: {image.user.instagram_username}</li>
      </ul>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
