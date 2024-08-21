import currencyFormatter from "../helpers/currencyFormatter";

export default function HouseRow(props: any) {
  let house = props.house;

  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
    </tr>
  );
}