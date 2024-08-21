import currencyFormatter from "../helpers/currencyFormatter";

export default function HouseRow(props: any) {
  let house = props.house;
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
}