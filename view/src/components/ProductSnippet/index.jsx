import { useState, useEffect } from "react";
import { fetchProductImageService } from "../../services/ProductService";
import { useFirebaseStorage } from "../../context/FirebaseContext";
import { useNavigate } from "react-router-dom";

const ProductSnippet = (props) => {
  const { product} = props;
  const navigate = useNavigate();
  const useStorage = useFirebaseStorage();
  const [image, setImage] = useState();

  useEffect(() => {
    fetchProductImageService(useStorage, product.imageUrl, setImage);
  }, []);

  return (
    image && 
      <div className="scroll">
        <img
          src={image}
          alt={product.productName}
          onClick={() =>
            navigate(`/product/${product.id}`, {
              state: product,
              replace: true,
            })
          }
        />
      </div>
  );
};

export default ProductSnippet;
