import MainCarousel from "./MainCarousel";

const Home = (props) => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <h1 className="fs-3 text">Popular movies</h1>
                        <MainCarousel categoryUrl='movie/upcoming'/>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row mb-5">
                        <h1 className="fs-3 text">Popular series</h1>
                        <MainCarousel categoryUrl={'tv/popular'}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <h1 className="fs-3 text">Documentary</h1>
                        <MainCarousel categoryUrl={'discover/movie'}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home