// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
    return (
      
        <div className=" mt-24  bg-white rounded shadow-lg w-[350px] h-[428px] rounded-2xl">
        <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
        </div>
        <div className="p-3 flex flex-col flex-1">
          <div className="grid grid-rows-3-3 gap-4 mt-2 flex-1">
            <div className="h-4 bg-gray-200 w-full rounded animate-pulse">
            </div>
            <div className="h-4  bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-4  bg-gray-200 rounded animate-pulse">
            </div>
            <div className="h-8 w-[50%] bg-gray-200 rounded animate-pulse">
            </div>
             
            <div className="h-8 w-[50%] bg-gray-200 rounded animate-pulse">
            </div>
             
            {/* Add more child elements here */}
          </div>
        </div>
      </div>
    
    );
  };
  
  export default CardSkeleton;
  