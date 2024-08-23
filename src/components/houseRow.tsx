import currencyFormatter from "../helpers/currencyFormatter";
import { useNavigate } from "react-router-dom";

export default function HouseRow(props: any) {
  const house = props.house;
  const navigate = useNavigate();

  return (
    <tr key={house.id} onClick={() => navigate(`/House?id=${house.id}`)} style={{ cursor: 'pointer' }}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>{currencyFormatter.format(house.price)}</td>
      )}
    </tr>
  );
}