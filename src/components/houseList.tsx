const houses = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000
  }
]

export default function HouseList() {
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
          {houses.map(x => (
            <tr key={x.id}>
              <td>{x.address}</td>
              <td>{x.country}</td>
              <td>{x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}