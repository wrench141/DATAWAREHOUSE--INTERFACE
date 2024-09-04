"use client"
import Navigation from "@/components/navigation/navigation";
import "./style.css"
import { useEffect, useRef, useState } from "react";
import Card from "@/components/card/card";

const stepPropTypes = {
    label: String,
    sub: String,
    selected: Boolean,
    enableLine: Boolean
}

function Step({ label, sub, selected, enableLine }: stepPropTypes) {
    return (
        <div className="step-wrap">
            <div className="icons">
                <div className={selected ? "circle sel" : "circle"}>
                    {
                        selected ? (
                            <ion-icon name="checkmark"></ion-icon>
                        ) : (
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                        )
                    }
                </div>
                {
                    enableLine ? (
                        <div className="line-wrap">
                            <div className="ver-line"></div>
                        </div>
                    ) : null
                }
            </div>
            <div className="script">
                <p className="tag-label">{label}</p>
                <p className="tag-sublabel">{sub}</p>
            </div>
        </div>
    )
}

export default function Datasets() {
    const [currentComponent, setCurrentComponent] = useState("datasets");
    const uploadRef = useRef();
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const uploadHandler = (e) => {
        console.log(e.target.files);
        if (e.target.files.length > 0) {
            setUploadedFiles(e.target.files)
        } else {
            //notify no files selected
        }
    };

    return (
        <div className="container">
            <Navigation />
            <div className="dummy"></div>
            <div className="canvas">
                <div className="search-wrap">
                    <input type="text" placeholder="Search Keywords..." className="search" />
                    <div className="hor-wrap">
                        <button className="btn">
                            <ion-icon name="notifications-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div className="title-wrap">
                    <div className="wrap-row">
                        <div className="logo">
                            <img width="30" height="30" src="https://img.icons8.com/dotty/80/database-options.png" alt="database-options" />
                        </div>
                        <div className="wrap-col">
                            <p className="title">Datasets</p>
                            <p className="sub">Manage your datasets</p>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn">
                            <ion-icon name="cloud-download-outline"></ion-icon>
                            Export
                        </button>
                        <button className="btn filled">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            Upload Dataset
                        </button>
                    </div>
                </div>
                <div className="submenu">
                    <p className={currentComponent == "datasets" ? "option sel" : "option"} onClick={() => setCurrentComponent("datasets")}>Datasets</p>
                    <p className={currentComponent == "uploads" ? "option sel" : "option"} onClick={() => setCurrentComponent("uploads")}>Upload</p>
                </div>

                {
                    currentComponent == "uploads" ? (
                        <div className="upload-canvas">
                            <div className="upload" onClick={() => uploadRef.current.click()}>
                                <input type="file" ref={uploadRef} onChange={(e) => uploadHandler(e)} hidden />
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                                <p className="utxt">Upload Datasets</p>
                                <p className="sutxt">Drag and Drop or Select a file</p>
                                <div className="wrap-row">
                                    <button className="btn" onClick={() => uploadRef.current.click()}>
                                        <ion-icon name="cloud-upload-outline"></ion-icon>
                                        Upload a File
                                    </button>
                                    <button className="btn">
                                        <ion-icon name="link-outline"></ion-icon>
                                        Add Link
                                    </button>
                                </div>
                            </div>
                            <div className="steps">
                                <Step label={"Upload"} selected={true} sub={"DND or Link a dataset file"} enableLine={true} />
                                <Step label={"Meta Description"} selected={false} sub={"Fill all the required Meta data"} enableLine={false} />
                            </div>
                        </div>
                    ) : (
                        <div className="dataset-canvas">
                            <Card />
                            <Card />
                        </div>
                    )
                }

            </div>
        </div>
    )
}