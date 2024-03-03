import { AuthContext } from "@/Components/Authorize";
import { useContext } from "react";

const useAuth = () => {
  const { user, isLoading, isAuthorised } = useContext(AuthContext);
  return { user, isLoading, isAuthorised };
};

export default useAuth;
