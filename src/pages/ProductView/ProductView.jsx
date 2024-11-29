import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductView.css";

const ProductView = ({ addToCart }) => {
  const { id } = useParams(); // Get the product ID from the URL

  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Brinjal Moju",
      price: 10.0,
      description: "Delicious homemade Brinjal Moju.",
      detailedDescription: "Brinjal Moju is a unique Sri Lankan dish made with brinjal (eggplant) cooked in a tangy and spicy sauce. It is commonly served with rice or flatbreads as an accompaniment. Made from fresh, locally sourced ingredients, it’s a must-try for food lovers.",
      mainImage: "/images/brinjal.jfif",
      sideImages: ["/images/star.png", "/images/overlay.png", "/images/about.jpg"],
    },
    {
      id: 2,
      title: "Pineapple Jam",
      price: 7.5,
      description: "Fresh and organic pineapple jam.",
      detailedDescription: "This pineapple jam is made with ripe, organic pineapples, sugar, and a touch of lemon juice for added tang. It's perfect as a spread on toast, in desserts, or as an ingredient in baking. A true taste of tropical sweetness.",
      mainImage: "/images/pineapple.jpeg",
      sideImages: ["/images/about.jpg", "/images/star.png", "/images/overlay.png"],
    },
    {
      id: 3,
      title: "Mango Pickle",
      price: 8.0,
      description: "Spicy and tangy mango pickle.",
      detailedDescription: "Our Mango Pickle is made from the finest green mangoes, spices, and vinegar to create a deliciously spicy and tangy condiment. It pairs wonderfully with curries, rice, or even as a side dish for a perfect meal.",
      mainImage: "/images/mango.jpeg",
      sideImages: ["/images/star.png", "/images/overlay.png", "/images/about.jpg"],
    },
    {
      id: 4,
      title: "Mixed Veges",
      price: 12.0,
      description: "Healthy and fresh mixed vegetables.",
      detailedDescription: "A variety of farm-fresh vegetables, including carrots, beans, peas, and corn, mixed together to create a nutritious, colorful dish. These vegetables are lightly seasoned and perfect for stir-frying or steaming.",
      mainImage: "/images/vege.jpeg",
      sideImages: ["/images/about.jpg", "/images/star.png", "/images/overlay.png"],
    },
  ];

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [mainImage, setMainImage] = useState(product.mainImage);
  const [sideImages, setSideImages] = useState(product.sideImages);

  // Handle side image click to update the main image and swap positions
  const handleImageClick = (imageSrc, index) => {
    const newSideImages = [...sideImages];
    const currentMainImage = mainImage;

    // Swap the images
    setMainImage(imageSrc); // Set clicked side image as the main image
    newSideImages[index] = currentMainImage; // Place the current main image in the clicked side image's position

    setSideImages(newSideImages); // Update the side images array
  };

  useEffect(() => {
    // Reset the main image and side images when the product changes
    // setMainImage(product.mainImage);
    // setSideImages(product.sideImages);
  }, [product]);

  return (
    <div className="product-view">
      <div className="content">
        <div className="image-side">
          <div className="main-image">
            <img src={mainImage} alt="Main product view" />
          </div>
          <div className="side-images">
            {sideImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Side view ${index + 1}`}
                onClick={() => handleImageClick(image, index)} // Click to swap the image
                className={`side-image ${image === mainImage ? 'active' : ''}`} // Add 'active' class to the main image
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price.toFixed(2)}</h2>
          <p>{product.detailedDescription}</p> {/* Display the detailed description here */}
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
