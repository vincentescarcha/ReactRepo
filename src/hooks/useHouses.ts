import { useEffect, useState } from "react";
import House from "../models/IHouse";

export default function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(()=>{
    const fetchHouses = async () => {
      const response = await fetch("https://my-json-server.typicode.com/vincentescarcha/demo/house");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  return {houses, setHouses}
}