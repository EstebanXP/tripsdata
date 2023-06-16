import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../components/Schemas";

export default function useFetchFuel() {
  const [fuelData, setFuelData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(baseURL+"/logbook/trips/")
      .then((response) => console.log(response) /*response.json()*/)
      //.then(setFuelData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { fuelData, error, loading };
}
