import { useState } from "react";

import {
    useLocation,
    Link
} from "react-router-dom";

import Navbar from "../components/Navbar";

import {
    reportMenuData
} from "../data/reportMenuData";



function findReport(pathname) {

    for (const report of reportMenuData) {

        for (const subReport of report.subReports) {

            const miniReport =
                subReport.miniReports.find(
                    (item) => item.path === pathname
                );


            if (miniReport) {

                return {
                    ...miniReport,

                    category: report.name,

                    subReport: subReport.name
                };

            }

        }

    }


    return {

        name: "Report",

        category: "Reports",

        subReport: ""

    };

}



function ReportPage() {

    const location = useLocation();


    const report =
        findReport(location.pathname);



    /* ===============================
       FILTER STATES
    =============================== */

    const [fromDate, setFromDate] =
        useState("");


    const [toDate, setToDate] =
        useState("");


    const [plant, setPlant] =
        useState("");


    const [region, setRegion] =
        useState("");


    const [section, setSection] =
        useState("");



    /* ===============================
       SAMPLE DATA
    =============================== */

    const plants = [

        "WKS Kabras",

        "WKS Olepito",

        "WKS Naitiri"

    ];



    const regions = {

        "WKS Kabras": [

            "Kabras North",

            "Kabras West"

        ],


        "WKS Olepito": [

            "Busia"

        ],


        "WKS Naitiri": [

            "Misikhu",

            "Kitale"

        ]

    };



    const sections = {

        "Kabras North": [

            "North 1",

            "North 2"

        ],


        "Kabras West": [

            "WA 1",

            "WA 2"

        ],


        "Busia": [

            "Butula 1",

            "Butula 2"

        ],


        "Misikhu": [

            "Lukusi 1",

            "Lukusi 2"

        ],


        "Kitale": [

            "Kitale 1",

            "Kitale 2"

        ]

    };



    /* ===============================
       GENERATE REPORT
    =============================== */

    function generateReport() {

        console.log(

            `Generating ${report.name}`,

            {

                fromDate,

                toDate,

                plant,

                region,

                section

            }

        );

    }



    return (

        <div className="leads-page">

            <Navbar />


            <main className="leads-content">


                {/* BACK BUTTON */}

                <Link
                    to="/"
                    className="back-home-link"
                >

                    ← Back to Home

                </Link>



                {/* REPORT HEADER */}

                <div className="leads-header">


                    <span className="report-breadcrumb">

                        {report.category}

                        {" / "}

                        {report.subReport}

                    </span>



                    <h1>

                        {report.name}

                    </h1>



                    <p>

                        Select the required filters to generate
                        the {report.name}.

                    </p>


                </div>



                {/* FILTER PANEL */}

                <div className="filter-panel">


                    {/* DATE FROM */}

                    <div className="filter-field">

                        <label>
                            Date From
                        </label>


                        <input
                            type="date"

                            value={fromDate}

                            onChange={(e) =>
                                setFromDate(e.target.value)
                            }
                        />

                    </div>



                    {/* DATE TO */}

                    <div className="filter-field">

                        <label>
                            Date To
                        </label>


                        <input
                            type="date"

                            value={toDate}

                            onChange={(e) =>
                                setToDate(e.target.value)
                            }
                        />

                    </div>



                    {/* PLANT */}

                    <div className="filter-field">

                        <label>
                            Plant
                        </label>


                        <select

                            value={plant}

                            onChange={(e) => {

                                setPlant(e.target.value);

                                setRegion("");

                                setSection("");

                            }}

                        >

                            <option value="">
                                Select Plant
                            </option>


                            {plants.map((item) => (

                                <option
                                    key={item}
                                    value={item}
                                >

                                    {item}

                                </option>

                            ))}

                        </select>

                    </div>



                    {/* REGION */}

                    <div className="filter-field">

                        <label>
                            Region
                        </label>


                        <select

                            value={region}

                            disabled={!plant}

                            onChange={(e) => {

                                setRegion(e.target.value);

                                setSection("");

                            }}

                        >

                            <option value="">
                                Select Region
                            </option>


                            {(regions[plant] || []).map(
                                (item) => (

                                    <option
                                        key={item}
                                        value={item}
                                    >

                                        {item}

                                    </option>

                                )
                            )}

                        </select>

                    </div>



                    {/* SECTION */}

                    <div className="filter-field">

                        <label>
                            Section
                        </label>


                        <select

                            value={section}

                            disabled={!region}

                            onChange={(e) =>
                                setSection(e.target.value)
                            }

                        >

                            <option value="">
                                Select Section
                            </option>


                            {(sections[region] || []).map(
                                (item) => (

                                    <option
                                        key={item}
                                        value={item}
                                    >

                                        {item}

                                    </option>

                                )
                            )}

                        </select>

                    </div>



                    {/* BUTTON */}

                    <div className="filter-action">

                        <button

                            type="button"

                            className="generate-report-button"

                            onClick={generateReport}

                        >

                            Generate Report

                        </button>

                    </div>


                </div>



                {/* RESULTS */}

                <div className="report-results-placeholder">

                    <h2>

                        {report.name} Results

                    </h2>


                    <p>

                        Your report data will appear here after
                        you generate the report.

                    </p>

                </div>


            </main>

        </div>

    );

}


export default ReportPage;