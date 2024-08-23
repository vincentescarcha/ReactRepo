import navValues from "../helpers/navValues";
import House from "./house";
import HouseList from "./houseList";

export default function ComponentPicker(props: any) {
  switch (props.currentNavLocation) {
    case navValues.home:
      return <HouseList />
    case navValues.house:
      return <House />
    default:
      return (
        <h3>
          No for navigation value {props.currentNavLocation} found
        </h3>
      );
  }
}