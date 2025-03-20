import { JSX, useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import UserImage from "../../assets/images/user.jpg";
import { Typography } from "@mui/material";
import ProfilePopupMenu from "./profilePopupMenu";

interface sideBarProps {
    recommendedAlbumList: any
}

const SideBar = (props: sideBarProps): JSX.Element => {
    const { recommendedAlbumList } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false)

    return (
        <div
            style={{
                borderRadius: "0 0 0 40px",
                overflow: 'hidden',
            }}>
            <Sidebar
                collapsed={collapsed}
                style={{ height: "87vh" }} backgroundColor='#f5f5f5'>
                <Menu>
                    <MenuItem icon={
                        <img
                            alt="user-img"
                            src={UserImage} width={35}
                            className='rounded-circle mx-4'
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    }>
                        <div className="position-relative" style={{position:"relative"}} onClick={() => setShowProfileMenu(!showProfileMenu)} >
                            <b className="me-4">
                                Joshua
                            </b>
                            <i className="fa fa-caret-down" />
                        </div>
                        {showProfileMenu && <ProfilePopupMenu />}
                    </MenuItem>
                </Menu>
                <Typography
                    className="ms-4 mt-4"
                    variant="body2"
                    fontWeight={600}
                    style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                >
                    BROWSE
                </Typography>
                <Menu>
                    <MenuItem icon={<i className="fa fa-home" />}> Home </MenuItem>

                    <MenuItem icon={<i className="fa fa-music" />}> Songs </MenuItem>
                    <MenuItem icon={<i className="fa fa-list" />}> Playlists </MenuItem>
                    <MenuItem icon={<i className="fa fa-user" />}> Just for You </MenuItem>
                    <MenuItem icon={<i className="fa fa-chart-simple" />}> Top Charts </MenuItem>

                </Menu>

                <Typography
                    className="ms-4 mt-4"
                    variant="body2"
                    fontWeight={600}
                    style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                >
                    YOUR PLAYLISTS <i className="fa fa-plus-circle ms-3"/>
                </Typography>
                <Menu>
                    {recommendedAlbumList?.map(
                        (item: any) => <MenuItem icon={<i className="fa fa-play" />}> {item.strAlbum} </MenuItem>)}
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SideBar;