import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";

export default function HouseList(props: any) {
  const { houses, setHouses } = useHouses();

  function addHouse() {
    setHouses(
      [...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000
      }
      ]);
  }

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(x => <HouseRow key={x.id} house={x} selectHouse={props.selectHouse} />)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>Add</button>
    </>
  );
}