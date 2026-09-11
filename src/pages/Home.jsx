import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportTabs from "../components/ReportsTab";

import sugarcaneImage from "../assets/sugar.jpg";

function Home() {
    return (
        <div className="homepage">
            <Navbar />

            <div className="homepage-body">
                <Sidebar />

                <main className="homepage-content">
                    <section
                        className="hero-section"
                        style={{
                            backgroundImage: `url(${sugarcaneImage})`
                        }}
                    >
                        <div className="hero-overlay">

                            <div className="hero-content">
                                <h1>
                                    Operations &amp; Performance Reports
                                </h1>

                                <p>
                                    Access company reports and operational
                                    information from one central platform.
                                </p>
                            </div>

                            {/* REPORT NAVIGATION */}
                            <div
                                id="reports-section"
                                className="reports-section"
                            >
                                <ReportTabs />
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Home;