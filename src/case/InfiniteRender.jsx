import { useEffect, useState } from "react";

const InfiniteRender = () => {
  const [rendered, setRendered] = useState(1);

  useEffect(() => {
    setRendered((prev) => prev + 1);
  }, [rendered]);

  return <div data-testid="rendered">{rendered}</div>;
};

export default InfiniteRender;
