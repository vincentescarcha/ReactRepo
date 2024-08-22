import { useEffect, useState } from "react";
import House from "../models/IHouse";
import useGetRequest from "./useGetRequest";

export default function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const {get, loadingState} = useGetRequest("https://my-json-server.typicode.com/vincentescarcha/demo/house");


  useEffect(() => {
    const fetchHouses = async () => {
      const house = await get();
      setHouses(house);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
}