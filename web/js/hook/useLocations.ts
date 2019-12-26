import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useLocations() {
  const [locations, setLocations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location !== locations[locations.length - 1]) {
      const nextLocations = [...locations, location];
      nextLocations.slice(Math.max(nextLocations.length - 5, 0));
      setLocations(nextLocations);
    }
  }, [locations, location]);

  return locations;
}
