import { useEffect, useState } from "react";

const useInfiniteRender = () => {
  const [rendered, setRendered] = useState(1);
  useEffect(() => {
    setRendered((prev) => prev + 1);
    return () => {};
  }, [rendered]);

  return true;
};

export default useInfiniteRender;
