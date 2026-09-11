import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaLeaf,
    FaTruck,
    FaMoneyBillWave,
    FaUsers,
    FaIndustry
} from "react-icons/fa";

import { reportMenuData } from "../data/reportMenuData";


const icons = {
    leaf: <FaLeaf />,
    truck: <FaTruck />,
    money: <FaMoneyBillWave />,
    users: <FaUsers />,
    industry: <FaIndustry />
};


function ReportsTab() {

    // Controls which MAIN report is currently open
    const [activeReport, setActiveReport] = useState(null);

    // Controls which SUB report is currently open
    const [activeSubReport, setActiveSubReport] = useState(null);


    // Open a main report
    const handleReportEnter = (reportName) => {

        setActiveReport(reportName);

        // Reset mini reports when changing main report
        setActiveSubReport(null);

    };


    // Close everything
    const handleReportLeave = () => {

        setActiveReport(null);

        setActiveSubReport(null);

    };


    // Open a sub report
    const handleSubReportEnter = (subReportName) => {

        setActiveSubReport(subReportName);

    };


    return (

        <div className="report-tabs">

            {reportMenuData.map((report) => {

                const isActive =
                    activeReport === report.name;


                return (

                    <div
                        key={report.name}

                        className={`
                            report-tab-wrapper
                            flyout-${report.side}
                            ${isActive ? "active-report" : ""}
                        `}

                        onMouseEnter={() =>
                            handleReportEnter(report.name)
                        }

                        onMouseLeave={
                            handleReportLeave
                        }
                    >


                        {/* =========================
                            MAIN REPORT
                        ========================== */}

                        <button
                            type="button"
                            className="report-tab"
                        >

                            <div className="report-tab-icon">

                                {icons[report.icon]}

                            </div>


                            <span className="report-tab-name">

                                {report.name}

                            </span>


                            <span className="report-tab-arrow">

                                →

                            </span>

                        </button>



                        {/* =========================
                            SUB REPORT DROPDOWN
                        ========================== */}

                        {isActive && (

                            <div
                                className="sub-report-flyout"
                            >

                                <div className="flyout-title">

                                    {report.name}

                                </div>


                                {report.subReports.map(
                                    (subReport) => {

                                        const subKey =
                                            `${report.name}-${subReport.name}`;


                                        const isSubActive =
                                            activeSubReport === subKey;


                                        return (

                                            <div
                                                key={subReport.name}

                                                className={`
                                                    flyout-sub-report
                                                    ${
                                                        isSubActive
                                                            ? "active-sub-report"
                                                            : ""
                                                    }
                                                `}

                                                onMouseEnter={() =>
                                                    handleSubReportEnter(
                                                        subKey
                                                    )
                                                }

                                            >


                                                {/* SUB REPORT */}

                                                <button
                                                    type="button"

                                                    className="
                                                        flyout-sub-report-button
                                                    "
                                                >

                                                    <span>

                                                        {subReport.name}

                                                    </span>


                                                    <span>

                                                        ›

                                                    </span>

                                                </button>



                                                {/* =====================
                                                    MINI REPORT DROPDOWN
                                                ====================== */}

                                                {isSubActive && (

                                                    <div
                                                        className="
                                                            mini-report-flyout
                                                        "
                                                    >

                                                        <div
                                                            className="
                                                                mini-flyout-title
                                                            "
                                                        >

                                                            {subReport.name}

                                                        </div>


                                                        {subReport.miniReports.map(
                                                            (miniReport) => (

                                                                <Link
                                                                    key={
                                                                        miniReport.path
                                                                    }

                                                                    to={
                                                                        miniReport.path
                                                                    }

                                                                    className="
                                                                        mini-report-link
                                                                    "
                                                                >

                                                                    {
                                                                        miniReport.name
                                                                    }

                                                                </Link>

                                                            )
                                                        )}

                                                    </div>

                                                )}

                                            </div>

                                        );

                                    }
                                )}

                            </div>

                        )}

                    </div>

                );

            })}

        </div>

    );

}


export default ReportsTab;