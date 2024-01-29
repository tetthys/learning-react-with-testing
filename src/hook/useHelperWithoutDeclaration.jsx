import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useHelperWithoutDeclaration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return {
    dispatch,
    navigate,
  };
};

export default useHelperWithoutDeclaration;
