import currencyFormatter from "../helpers/currencyFormatter";
import House from "../models/house";

export default function HouseRow(props: any) {
  let house = props.house;

  return (
    <tr onClick={() => props.selectHouse((oldHouse: House) => house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
    </tr>
  );
}