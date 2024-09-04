import Card from "../../components/card/card";
import "../page.css"

export default function Home(){
    return(
        <div className="container">
            <div className="in-wrap">
                <div className="wrap">
                    <h2 className="title">Discover Wide Range of Datasets</h2>
                    <p className="sub">Efficient and Organized Datasets</p>
                </div>
                <div className="row-wrap">
                    <input type="text" placeholder="Search for Datasets" className="search" />
                    <button className="btn">
                        <ion-icon name="filter-outline"></ion-icon>
                    </button>
                </div>
            </div>
            <div className="sections">
                <section className="cards">
                    <p className="subtitle">Popular / Recommended Datasets</p>
                    <div className="cards-wrap">
                        <Card />
                    </div>
                </section>
            </div>
        </div>
    )
}