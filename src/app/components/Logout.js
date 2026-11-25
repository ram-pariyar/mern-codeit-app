import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/features/authSlice";
import { logout } from "@/api/auth";
import { LOGIN_ROUTE } from "../constants/routes";

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  function signOut() {
    dispatch(logoutUser()); // state
    logout(); // api

    router.push(LOGIN_ROUTE);
  }

  return (
    <button
      onClick={signOut}
      className="w-full rounded bg-red-500 text-white px-4 py-1"
    >
      Logout
    </button>
  );
};

export default Logout;
