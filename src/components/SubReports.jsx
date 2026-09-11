import { Link } from "react-router-dom";


function SubReports({
    selectedReport
}) {


    const reportData = {


        Agriculture: [

            {
                name: "Leads to Service",

                miniReports: [

                    "Leads",
                    "Business Partner Conversion",
                    "Field Scouting",
                    "E-Contracting",
                    "Service Request"

                ]

            },


            {
                name: "Activity Completion",

                miniReports: [

                    "Allocated vs Actual",
                    "Completion Rate",
                    "Activity Wise Allocation"

                ]

            }

        ],


        Transport: [

            {
                name: "Logistics and Dispatch",

                miniReports: [

                    "Logistics Report",
                    "Dispatch Report"

                ]

            }

        ],


        Finance: [

            {
                name: "Commercial Control",

                miniReports: [

                    "Commercial Control Report"

                ]

            },


            {
                name: "Procurement",

                miniReports: [

                    "Procurement Report"

                ]

            }

        ],


        "Human Resource": [],


        Factory: []

    };


    const subReports =
        reportData[selectedReport] || [];


    return (

        <div className="sub-reports-container">


            <div className="sub-reports-header">

                {selectedReport}

            </div>


            {subReports.length === 0 ? (


                <div className="no-sub-reports">

                    <p>
                        Sub reports will be added here.
                    </p>

                </div>


            ) : (


                <div className="sub-report-list">


                    {subReports.map(
                        function(subReport) {


                            return (

                                <div
                                    key={subReport.name}
                                    className="sub-report-item"
                                >


                                    <div className="sub-report-button">

                                        <span>
                                            {subReport.name}
                                        </span>


                                        <span>
                                            →
                                        </span>

                                    </div>


                                    <div className="mini-report-menu">


                                        {subReport.miniReports.map(
                                            function(miniReport) {


                                                if (
                                                    miniReport === "Leads"
                                                ) {


                                                    return (

                                                        <Link
                                                            key={miniReport}
                                                            to="/reports/leads"
                                                            className="mini-report-button"
                                                        >

                                                            {miniReport}

                                                        </Link>

                                                    );

                                                }


                                                return (

                                                    <button
                                                        key={miniReport}
                                                        className="mini-report-button"
                                                    >

                                                        {miniReport}

                                                    </button>

                                                );

                                            }
                                        )}


                                    </div>


                                </div>

                            );

                        }
                    )}


                </div>

            )}


        </div>

    );

}


export default SubReports;