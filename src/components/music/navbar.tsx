import { JSX, useState } from "react";
import NotificationPopupMenu from "./notificationPopupMenu";

const Navbar = (): JSX.Element => {
    const [isSearch, setIsSearch] = useState(false);
    const [showNotiMenu, setShowNotiMenu] = useState(false);

    const handleSearch = () => {
        setIsSearch(!isSearch);
    }

    const handleNotiClick = () => {
        setShowNotiMenu(!showNotiMenu);
    }

    return (
        <div className="d-flex justify-content-between align-items-center" style={{
            height: 30
        }}>
            {isSearch ?
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Search..."
                    onBlur={handleSearch} /> :
                <i className="fa fa-search" onClick={handleSearch} />}
            <div className="position-relative">
                <i className="fa fa-bell fa-lg" onClick={handleNotiClick} />
                <div style={{
                    backgroundColor: "red",
                    width: 12,
                    aspectRatio: 1,
                    borderRadius: "100%",
                    position: "absolute",
                    top: 2,
                    right: -5,
                    fontSize: 8,
                    textAlign: "center",
                    color: "#ffffff"
                }}>
                    5
                </div>
            </div>
            {showNotiMenu && <NotificationPopupMenu />}
        </div>
    );
}

export default Navbar;