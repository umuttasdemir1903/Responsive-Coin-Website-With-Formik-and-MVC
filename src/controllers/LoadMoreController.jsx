import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../views/LoadMoreView";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // url'deki page parametersini al
   const pageNumber = params.get("page") || 1;

    // url'i güncelleme ve sayfa değerini 1 arttır
    // (+pageNumber) > Number'a çevirmenin başa bir yöntemi
    // başında + varsa number olarak algılar.
    setParams({page: +pageNumber + 1 });
  };
  return (
    <div>
      <LoadMoreView handleClick={handleClick} />
    </div>
  );
};

export default LoadMoreController;
