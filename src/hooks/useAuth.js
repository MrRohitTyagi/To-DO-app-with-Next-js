import { AuthContext } from "@/Components/Authorize";
import { useContext } from "react";

const useAuth = () => {
  const { user, isLoading, isAuthorised, setUser } = useContext(AuthContext);
  return { user, isLoading, isAuthorised, setUser };
};

export default useAuth;
