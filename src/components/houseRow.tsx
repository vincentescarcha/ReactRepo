import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import { navigationContext } from "../app/App";
import navValues from "../helpers/navValues";

export default function HouseRow(props: any) {
  let house = props.house;
  const { navigate } = useContext(navigationContext);

  return (
    <tr onClick={() => navigate(navValues.house, house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
    </tr>
  );
}