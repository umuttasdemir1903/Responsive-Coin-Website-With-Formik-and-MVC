import { SiCoinmarketcap } from "react-icons/si";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";

export class DetailModel {
  constructor(coin, history) {
    (this.coin = coin),
      (this.infoFields = [
        {
          icon: <SiCoinmarketcap />,
          label: "Market Volume",
          value: this.coin?.marketCapUsd,
        },
        {
          icon: <MdEventAvailable />,
          label: "Supply",
          value: this.coin?.supply,
        },
        {
          icon: <MdPriceChange />,
          label: "Price Change",
          value: this.coin?.priceUsd,
        },
        {
          icon: <FaPercent />,
          label: "24Hr Change",
          value: this.coin?.changePercent24Hr,
        },
        {
          icon: <RiStockFill />,
          label: "24Hr Volume (%)",
          value: this.coin?.priceUsd,
        },
      ]);

    this.chartData = {
      labels: history?.map((i) => 
      new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          label: "Price",
          data:history?.map((i) => +i.priceUsd),
        },
      ],
    };
  }
}

// elde etmemiz gereken

//    data={{
//     labels: ['Jun', 'Jul', 'Aug'],
//     datasets: [
//       {
//         id: 1,
//         label: '',
//         data: [5, 6, 7],
//       },

//     ],
//   }}
