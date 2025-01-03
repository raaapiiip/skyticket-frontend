import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faHistory,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useNotifications from "../../../hooks/useNotifications";
function FooterMobile({ active }) {
  const { notifications } = useNotifications();

  return (
    <div className="absolute bottom-0 flex w-full items-center justify-around py-2 shadow-lg shadow-black">
      <Link
        to="/"
        className={`flex flex-col items-center text-[${active == "beranda" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faHouse} className="size-6" />
        <p className="text-xs">Beranda</p>
      </Link>
      <Link
        to="/history"
        className={`flex flex-col items-center text-[${active == "riwayat" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faHistory} className="size-6" />
        <p className="text-xs">Riwayat</p>
      </Link>
      <Link
        to="/notification"
        className={`flex flex-col items-center text-[${active == "notifikasi" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="size-6" />
          {notifications.length > 0 && (
            <div className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {notifications.length > 99 ? '99+' : notifications.length}
            </div>
          )}
        </div>
        <p className="text-xs">Notifikasi</p>
      </Link>
      <Link
        to="/account"
        className={`flex flex-col items-center text-[${active == "akun" ? "#4B1979" : "#8A8A8A"}]`}
      >
        <FontAwesomeIcon icon={faCircleUser} className="size-6" />
        <p className="text-xs">Akun</p>
      </Link>
    </div>
  );
}

export default FooterMobile;