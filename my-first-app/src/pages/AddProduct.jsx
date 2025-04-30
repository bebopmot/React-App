import React, { useState } from "react";
import ProductList from "../components/ProductList"; // Assuming ProductList manages product list

function AddProduct({ callbackToCreate }) { // Expect callback to be provided as a prop
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState("");
  const [shippingInformation, setShippingInformation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),  // Assigning a temporary unique ID
      title,
      description,
      category,
      price,
      rating,
      brand,
      weight,
      shippingInformation,
    };

    // Ensure callback exists before calling
    if (typeof callbackToCreate === "function") {
      callbackToCreate(newProduct);
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setRating("");
    setBrand("");
    setWeight("");
    setShippingInformation("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Name"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
          />
        </div>
        <div>
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand"
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />
        </div>
        <div>
          <label>Shipping Information</label>
          <input
            type="text"
            value={shippingInformation}
            onChange={(e) => setShippingInformation(e.target.value)}
            placeholder="Shipping Information"
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;