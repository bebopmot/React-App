import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //on a vu avec le prof aujourd'hui

function AddProduct({ callbackToCreate }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            description,
            price,
            category,
            rating
        };
        // we will transfer this object we created to app jsx by the mean of
        //callbackToCreate , it will add the product to the sttate in app jsx to productlist
        callbackToCreate(newProduct)
        setTitle('');
        setPrice('');
        setCategory('');
        setDescription('');
        navigate('/');
    }



    return (
        <div className="card-body">
            <form onSubmit={handleSubmit} className="product-form" >
                <h2>Add a Product</h2>

                <label>
                    Name: <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </label>

                <label>
                    Price: <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </label>

                <label>
                    Description <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                </label>

                <label>
                    Category <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></input>
                </label>


                <label>
                    Rating :<input
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    ></input>
                </label>

                <div className="button" ><button type="submit">Submit</button> </div>

            </form>

        </div>
    );
}

export default AddProduct;
