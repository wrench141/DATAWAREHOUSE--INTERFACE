'use client';
import { useEffect, useState } from "react";
import "./navigation.css";

export default function Navigation(){
    const [currentRoute, setRoute] = useState("dashboard");
    useEffect(() => {
        setRoute((new URL(window.location.href)).pathname.split("/")[2])
    }, [])
    return(
        <div className="nav">
            <div className="title-wrap">
                <p className="title">Data Warehouse</p>
            </div>
            <div className="ctag">
                <div className="logo">
                    <ion-icon name="bonfire-outline"></ion-icon>
                </div>
                <div className="wrap">
                    <p className="cname">Aegion Dynamics</p>
                    <p className="subtag">20 Team members</p>
                </div>
            </div>
            <div className="menu">
                <p className="cat-tag">General</p>
                <div className={currentRoute == "dashboard" ? "hor-wrap sel" : "hor-wrap"}>
                    <ion-icon name="server-outline"></ion-icon>
                    <p className="nav-lab">Dashboard</p>
                </div>
                <div className={currentRoute == "datasets" ? "hor-wrap sel" : "hor-wrap"}>
                    <ion-icon name="library-outline"></ion-icon>
                    <p className="nav-lab">Datasets</p>
                </div>
                <div className={currentRoute == "orchestrator" ? "hor-wrap sel" : "hor-wrap"}>
                    <ion-icon name="git-network-outline"></ion-icon>
                    <p className="nav-lab">Orchestrator</p>
                </div>
            </div>
            <div className="menu">
                <p className="cat-tag">User</p>
                <div className={currentRoute == "settings" ? "hor-wrap sel" : "hor-wrap"}>
                    <ion-icon name="settings-outline"></ion-icon>
                    <p className="nav-lab">Settings</p>
                </div>
                <div className="hor-wrap">
                    <ion-icon name="log-out-outline"></ion-icon>
                    <p className="nav-lab">Logout</p>
                </div>
            </div>
        </div>
    )
}