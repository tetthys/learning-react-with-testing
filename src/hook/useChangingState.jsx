import { useEffect, useState } from "react";

const useChangingState = () => {
  const [data, setData] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setData(2);
    }, 1000);
  }, []);
  return { data };
};

export default useChangingState;
