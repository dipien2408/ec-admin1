import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Ec-Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/69873628_2572541156306706_8821361195278663680_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jAQE6t4zdeoAX_vf2vx&_nc_ht=scontent.fdad3-3.fna&oh=6176a08a1f63a8df1e81e9225f7ae465&oe=618323E0" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
