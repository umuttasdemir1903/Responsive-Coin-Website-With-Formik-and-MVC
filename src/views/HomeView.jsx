import { FaBitcoin } from "react-icons/fa";
import millify from "millify";
import CardView from "./CardView";
import LoadMoreController from "../controllers/LoadMoreController";
import { useNavigate } from "react-router-dom";

const HomeView = ({ coins }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-3 ">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome to our coin list</span>
      </h4>
      <p>
        Coin list is an excellent resource for tracking cryptocurrencies and
        digital assets around the world.
      </p>

      <div className="d-flex justify-content-around ">
      {coins?.slice(0,3).map((data,i) =>
      <CardView  data={data} key={i}/>)}
      </div>
      <table className="table table-dark table-striped table-hover mt-4 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market volume</th>
            <th>Trading volume (24hrs)</th>
            <th>%Change (24hrs)</th>
          </tr>
        </thead>
        <tbody>
     {coins?.map((coin,i) => (
      <tr key={i}
      onClick={() => navigate(`/coin/${coin.id}`)}
      className="coin"
      >
      <td>{coin.rank}</td>
      <td>
        <span className="text-warning fw-bold me-2  ">{coin.symbol}</span>
        <span className="text-nowrap text-truncate">{coin.name}</span>
      </td>
      <td>$ {millify(coin.priceUsd)}</td>
      <td>$ {millify(coin.marketCapUsd)}</td>
      <td>$ {millify(coin.volumeUsd24Hr)}</td>
      <td className={coin.changePercent24Hr > 0 ? "up" : "down"}>
        {millify(coin.changePercent24Hr)} %
      </td>
    </tr>
     ))}
        </tbody>
      </table>
      <LoadMoreController/>
    </div>
  );
};

export default HomeView;
