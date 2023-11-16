import { useEffect, useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeController = () => {
  const [queryParams, setParams] = useSearchParams();
  const [coins, setCoins] = useState([]);

  const page = +queryParams.get("page");

  // Limit > sayfaya gelcek elemanın sayısı
  // offset > atlanıcak eleman sayısı
  // doğru sayfadaki elemana erişmek için sayfa sayısının
  // bir eksiğinin limit ile çarpmak gerekir 3. sayfadaki
  // 5veriyi almak için ilk 10 taneyi atlamak gerekir yani
  //! 3 -1 * 5

  const params = {
    limit: 15,
    offset: (page - 1) * 15,
  };

  useEffect(() => {
    axios
      .get("/assets", { params })
      // more butonuna basınca alt alta sıralaması için
      // spread operatörünü kullandık.
      .then((res) => setCoins([...coins, ...res.data.data]))
      .catch((err) => console.log(err));
  }, [queryParams]);
  return (
    <div>
      <HomeView coins={coins} />
    </div>
  );
};

export default HomeController;
