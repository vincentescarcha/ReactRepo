import { useEffect, useState } from "react";
import IHouse from "../models/IHouse";
import useGetRequest from "./useGetRequest";

export default function useHouses(id?: number | string) {
  const [houses, setHouses] = useState<IHouse | IHouse[]>([]);
  const { get, loadingState } = useGetRequest(`https://my-json-server.typicode.com/vincentescarcha/demo/house${id ? `/${id}` : ''}`);


  useEffect(() => {
    const fetchHouses = async () => {
      const house = await get();
      setHouses(house);
    };
    fetchHouses();
  }, [get]);

  return { houses, setHouses, loadingState };
}