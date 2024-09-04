"use client"
import { useState } from "react";
import "./style.css"

export default function Card() {
    const [showDescription, setShowDescription] = useState(false);

    let dummyDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi sunt praesentium iusto. Distinctio odio optio explicabo nihil esse ullam repellendus a iure laboriosam vero adipisci sit, nesciunt voluptatibus officiis!"

    return (
        <div className="card">
            <div className="row bd">
                <div className="htag">License: MIT</div>
                <p className="date">29-5-2003</p>
            </div>
            <p className="name">Dataset Name</p>
            <p className="desc" onClick={() => setShowDescription(!showDescription)}>
                {
                    !showDescription ? dummyDescription.slice(0, 70) + "..." : dummyDescription
                }
            </p>
            <div className="tags">
                <p className="tag">Software</p>
                <p className="tag">Data warehouse</p>
            </div>
            <div className="row bdt">
                <>
                    <p className="info">
                        <span>12GB</span>    
                        <span className="subtag">Size</span>
                    </p>
                    <p className="info">
                        <span>CSV</span>
                        <span className="subtag">Type</span>
                    </p>
                    <p className="info">
                        <span>89%</span>
                        <span className="subtag">Usability</span>
                    </p>
                </>
            </div>
        </div>
    )
}