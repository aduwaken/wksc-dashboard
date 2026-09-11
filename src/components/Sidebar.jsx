function Sidebar() {


    function scrollToReports() {

        const reportsSection =
            document.getElementById(
                "reports-section"
            );


        if (reportsSection) {

            reportsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    return (

        <aside className="sidebar">


            <button
                className="sidebar-button active"
                onClick={function() {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }}
            >

                Home

            </button>


            <button
                className="sidebar-button"
                onClick={scrollToReports}
            >

                Reports

            </button>


            <button
                className="sidebar-button"
            >

                Saved Reports

            </button>


            <button
                className="sidebar-button"
            >

                Data Sources

            </button>


            <button
                className="sidebar-button"
            >

                Settings

            </button>


        </aside>

    );

}


export default Sidebar;