import { useDispatch } from "react-redux";

const useHelperWithoutDeclaration = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
  };
};

export default useHelperWithoutDeclaration;
