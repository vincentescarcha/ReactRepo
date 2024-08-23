import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

export default function HouseList() {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState}/>
  }

  function addHouse() {
    setHouses(
      [...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
        description: "",
        photo: ""
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
          {houses.map(x => <HouseRow key={x.id} house={x} />)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>Add</button>
    </>
  );
}