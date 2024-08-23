import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import useHouses from "../hooks/useHouses";
import { useLocation } from "react-router-dom";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

export default function House() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id') ?? undefined;

  const { houses, loadingState } = useHouses(id);

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />
  }

  const houseData = Array.isArray(houses) ? houses[0] : houses;

  if (!houseData) {
    return <div>House information not available</div>;
  }
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img
            className="img-fluid"
            src={
              houseData.photo ? `./houseImages/${houseData.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{houseData.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{houseData.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(houseData.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{houseData.description}</div>
        </div>
      </div>
    </div>
  );
}