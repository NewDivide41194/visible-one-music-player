import { Switch } from "@mui/material";

const ProfilePopupMenu = () => {
    return (
        <div className="list-group position-absolute top-5 px-0 shadow-lg" style={{
            fontSize: 11,
            zIndex: 999,
            marginLeft: -20
        }} >
            <ul className="list-group bg-white p-2 gap-2">
                <li className="d-flex flex-row justify-content-between">
                    <span>Private</span>
                    <Switch size="small" checked />
                </li>
                <li className="d-flex flex-row justify-content-between">
                    <span>Explict Filter</span>
                    <Switch size="small" />
                </li>
                <li className="d-flex flex-row justify-content-between">
                    <span>Favourites</span>
                    <Switch size="small" />
                </li>
                <li className="d-flex flex-row ">
                    <span>Account Setting</span>
                </li>
                <li className="d-flex flex-row w-100 justify-content-end">
                    <i className="fa fa-arrow-left pt-1 me-2"/>
                    Logout
                </li>
            </ul>
        </div>

    )
}

export default ProfilePopupMenu;