import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart } from "../store/CartSlice";
import GetUser from "../customHook/GetUser";
import { useNavigate } from "react-router-dom";
// import CardSkeleton from "./Skeleton/CardSkeleton";
import { Product_Insert } from "../store/ProductSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const ratingList = [1, 2, 3, 4, 5];
  const productList = useSelector((state)=> state.product)
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(true)
  const allProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // setProducts(data);
    dispatch(Product_Insert(data))
    // setIsLoading(false)
    // console.log(data);
  };
  useEffect(() => {
   
     
      !productList.length &&
      allProducts();
  
  }, []);

  

  // extract unique catagories

  const categories = [...new Set(productList.map((item) => item.category))];
  const navigate = useNavigate();
  const user = GetUser();

  const handleAddToCart = (product) => {
    if (user?.email) {
      dispatch(Add_To_Cart(product));
    } else {
      navigate("/login");
    }
  };

  // const products = productList.find((item)=>item.id === id)

  // if(!products){
  //   return null
  // }

  return (
    <div>
     {/* {
      isLoading ? (
        <div className="flex flex-wrap container mx-auto p-4 gap-4">
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
        </div>
      ) : ( */}
        <div className="container mx-auto p-4">
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold py-6 uppercase">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productList
                .filter((item) => item.category === category)
                .map(({ image, title, price, id, rating }, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <img
                      src={image}
                      alt="ecommerce"
                      className="object-cover object-center w-48 h-48 mb-4 mx-auto"
                    />
                    <h3 className="text-gray-900 text-lg font-medium mb-4">
                      {title}
                    </h3>
                    <p className="text-gray-700 mb-2">${Math.floor(price)}</p>
                      {/* <div>Rating:{products.rating.length>0 ? products.rating: "not rating yet"}</div> */}
                      <div className=" flex relative mt-16 pb-4">
                      {ratingList.map((value, index) => (
                        <div key={index}>
                          <span
                            
                            className="text-yellow-600 text-2xl"
                          >
                            {value <= rating[0] ? (
                              <AiFillStar />
                            ) : (
                              <AiOutlineStar />
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() =>
                        handleAddToCart({ image, title, price, id })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* ) */}
     {/* } */}
    </div>
  );
};

export default Products;
