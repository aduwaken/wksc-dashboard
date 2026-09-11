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
       PLANT → REGION → SECTION DATA
    =============================== */

    const locationData = {

        "WKS Kabras": {

            "Kabras North": [

                "North 1",
                "North 2",
                "North 3",

                "North-West 1",
                "North-West 2",
                "North-West 3",
                "North-West 4",
                "North-West 5",

                "North-East 1",
                "North-East 2",
                "North-East 3"

            ],


            "Kabras West": [

                "WA 1",
                "WA 2",
                "WA 3",
                "WA 4",
                "WA 5",
                "WA 6",

                "WB 1",
                "WB 2",
                "WB 3",
                "WB 4",

                "WC 1",
                "WC 2",
                "WC 3",
                "WC 4",
                "WC 5",
                "WC 6",

                "WD 1",
                "WD 2",
                "WD 3",
                "WD 4",
                "WD 5"

            ],


            "Magut": [

                "Magut 1",
                "Magut 2",
                "Magut 3",
                "Magut 4",

                "Lugari 1",
                "Lugari 2",
                "Lugari 3",
                "Lugari 4",

                "Lwandeti 1",
                "Lwandeti 2",
                "Lwandeti 3",
                "Lwandeti 4",
                "Lwandeti 5",

                "Panpaper 1",
                "Panpaper 2",
                "Panpaper 3",

                "Likuyani 1",
                "Likuyani 2",
                "Likuyani 3",
                "Likuyani 4",

                "Ziwa 1",
                "Ziwa 2",
                "Ziwa 3",

                "Manda 1",
                "Manda 2",
                "Manda 3",
                "Manda 4"

            ],


            "Chemelil": [

                "Miwani-A",
                "Taunet-A",
                "Taunet-B",
                "Chemelil 1",
                "Muhoroni 1",
                "Potopoto",
                "Soba",
                "Taunet",
                "Kimwani",
                "Kapkitany"

            ],


            "Turbo": [

                "Turbo 1",
                "Turbo 2",
                "Turbo 3",

                "Kaiboi 1",
                "Kaiboi 2",
                "Kaiboi 3",
                "Kaiboi 4",

                "Selia 1",
                "Selia 2",
                "Selia 3",
                "Selia 4",

                "Mosoriot 1",
                "Mosoriot 2",
                "Mosoriot 3",
                "Mosoriot 4",

                "Kabisaga 1",
                "Kabisaga 2",
                "Kabisaga 3",
                "Kabisaga 4",

                "Kaptel 1",
                "Kaptel 2",
                "Kaptel 3",

                "Tulon 1",
                "Tulon 2",
                "Tulon 3",

                "Ngeria 1",
                "Ngeria 2",
                "Ngeria 3",

                "Kapsasur 3",
                "Kapsasur 4",
                "Kapsasur 5"

            ],


            "Bukura": [

                "Makunga 1",
                "Makunga 2",
                "Makunga 3",
                "Makunga 4",
                "Makunga 5",
                "Makunga 6",
                "Makunga 7",

                "Bukura 1",
                "Bukura 2",
                "Bukura 3",

                "Musoli 1",
                "Musoli 2",
                "Musoli 3",
                "Musoli 4"

            ],


            "Dorofu": [

                "Khalaba 1",
                "Khalaba 2",
                "Khalaba 3",
                "Khalaba 4",

                "Bulondo 1",
                "Bulondo 2",
                "Bulondo 3",
                "Bulondo 4",
                "Bulondo 5",
                "Bulondo 6",
                "Bulondo 7",

                "Mwibale 1",
                "Mwibale 2",
                "Mwibale 3",
                "Mwibale 4",

                "Namulungu 1",
                "Namulungu 2",
                "Namulungu 3"

            ],


            "Kabras Central": [

                "Central-A1",
                "Central-A2",
                "Central-A3",
                "Central-A4",
                "Central-A5",

                "Central-B1",
                "Central-B2",
                "Central-B3",
                "Central-B4",

                "Central-C1",
                "Central-C2",
                "Central-C3",
                "Central-C4",
                "Central-C5",

                "Central-D1",
                "Central-D2",
                "Central-D3",
                "Central-D4",

                "East 1",
                "East 2",
                "East 3",
                "East 4",
                "East 5",
                "East 6"

            ],


            "Kabras South": [

                "South-A1",
                "South-A2",
                "South-A3",
                "South-A4",
                "South-A5",
                "South-A6",

                "South-B1",
                "South-B2",
                "South-B3",
                "South-B4"

            ],


            "Kakamega": [

                "KK3",

                "Shinyalu 1",
                "Shinyalu 2",
                "Shinyalu 3",
                "Shinyalu 4",

                "Khayega 1",
                "Khayega 2",
                "Khayega 3",
                "Khayega 4"

            ],


            "Siaya": [

                "Lake Agro",
                "Lake Agro 1"

            ],


            "Miwani": [

                "Miwani 1",
                "Miwani 2",

                "Nandi 1",
                "Nandi 2",

                "Kisumu 1",
                "Kisumu 2",
                "Kisumu 3",
                "Kisumu 4",
                "Kisumu 5",
                "Kisumu 6",

                "Homalime"

            ],


            "Kericho": [

                "Kericho 1",
                "Kericho 2",
                "Kericho 3",
                "Kericho 4",
                "Kericho 5",

                "Awasi",

                "Mhoroni"

            ],


            "Butere": [

                "Simakina 1",
                "Simakina 2",
                "Simakina 3",

                "West-E2 Dorofu",
                "West-E3",
                "West-E4",

                "Malaha 1",
                "Malaha 2",
                "Malaha 3",

                "Buchifi A1",
                "Buchifi A2",
                "Buchifi A3",
                "Buchifi A4",

                "Buchifi B1",
                "Buchifi B2",
                "Buchifi B3",
                "Buchifi B4",
                "Buchifi B5",

                "Shianda 1",
                "Shianda 2",
                "Shianda 3",
                "Shianda 4",

                "Sabatia 1",
                "Sabatia 2",
                "Sabatia 3",
                "Sabatia 4"

            ],


            "Kaimosi": [

                "Kaimosi 1",
                "Kaimosi 2",
                "Kaimosi 3",
                "Kaimosi 4",
                "Kaimosi 5",

                "Kapsasur 1B",
                "Kapsasur 2",
                "Kapsasur 2B",

                "Serem 1",
                "Serem 2",
                "Serem 3",
                "Serem 4",
                "Serem 5",
                "Serem 6"

            ]

        },


        "WKS Naitiri": {

            "Misikhu": [

                "Lukusi 1",
                "Lukusi 2",
                "Lukusi 3",
                "Lukusi 4",
                "Lukusi 5",
                "Lukusi 6",
                "Lukusi 7",
                "Lukusi 8",

                "Misikhu 1",
                "Misikhu 2",
                "Misikhu 3",
                "Misikhu 4",
                "Misikhu 5",
                "Misikhu 6",
                "Misikhu 7",

                "Lugulu 1",
                "Lugulu 2",
                "Lugulu 3",
                "Lugulu 4",
                "Lugulu 5",
                "Lugulu 6",

                "Kimilili 1",
                "Kimilili 2",
                "Kimilili 3",
                "Kimilili 4",

                "Kapsokwony 1",
                "Kapsokwony 2",
                "Kapsokwony 3",
                "Kapsokwony 4",

                "Special 1",
                "Special 2",
                "Special 3",

                "Orie Rogo",

                "Bokoli 1",
                "Bokoli 2",
                "Bokoli 3",
                "Bokoli 4",
                "Bokoli 5",
                "Bokoli 6",
                "Bokoli 7",
                "Bokoli 8",

                "Matisi 1",
                "Matisi 2",
                "Matisi 3",

                "Sirisia 1",
                "Sirisia 2",
                "Sirisia 3",
                "Sirisia 4"

            ],


            "Kitale": [

                "Kitale 1",
                "Kitale 2",
                "Kitale 3",
                "Kitale 4",

                "Mois Bridge 1",
                "Mois Bridge 2",
                "Mois Bridge 3",
                "Mois Bridge 4",

                "Endebes 1",
                "Endebes 2",
                "Endebes 3",

                "Kwanza 3",
                "Kapomboi 4",

                "Amuka 1",
                "Amuka 2",
                "Amuka 3",

                "Cherangany 1",
                "Cherangany 2",
                "Cherangany 3"

            ],


            "Naitiri": [

                "Kiminini 1",
                "Kiminini 2",
                "Kiminini 3",
                "Kiminini 4",

                "Kibisi 1",
                "Kibisi 2",
                "Kibisi 3",
                "Kibisi 4",
                "Kibisi 5",
                "Kibisi 6",

                "Mukuyuni 1",
                "Mukuyuni 2",
                "Mukuyuni 3",
                "Mukuyuni 4",

                "Naitiri 1",
                "Naitiri 2",
                "Naitiri 3",
                "Naitiri 4",
                "Naitiri 5",

                "Ndalu 1",
                "Ndalu 2",
                "Ndalu 3",
                "Ndalu 4",
                "Ndalu 5",

                "Tongarane 1",
                "Tongarane 2",
                "Tongarane 3",
                "Tongarane 4",
                "Tongarane 5",
                "Tongarane 6",

                "Maliki 1",
                "Maliki 2",
                "Maliki 3",
                "Maliki 4",

                "Brigadier 1",
                "Brigadier 2",
                "Brigadier 3",

                "Saboti 1",
                "Saboti 2",
                "Saboti 3"

            ]

        },


        "WKS Olepito": {

            "Busia": [

                "Butula 1",
                "Butula 2",
                "Butula 3",

                "Amukura A1",
                "Amukura 2",
                "Amukura B1",
                "Amukura 1B",
                "Amukura 1C",
                "Amukura 2B",
                "Amukura A6",
                "Amukura 3B",
                "Amukura B3",
                "Amukura B4",
                "Amukura A4",
                "Amukura A2",
                "Amukura A5",
                "Amukura B2",
                "Amukura 4B",
                "Amukura 5B",
                "Amukura A3",

                "Matayos 1",
                "Matayos 2",
                "Matayos 3",

                "Nambale A1",
                "Nambale A2",
                "Nambale A3",
                "Nambale A4",

                "Nambale B1",
                "Nambale B2",
                "Nambale B3",
                "Nambale B4",

                "Chakol 1",
                "Chakol 2",
                "Chakol 3",
                "Chakol 4"

            ]

        }

    };



    /* ===============================
       PLANTS
    =============================== */

    const plants =
        Object.keys(locationData);



    /* ===============================
       REGIONS FOR SELECTED PLANT
    =============================== */

    const availableRegions =
        plant
            ? Object.keys(locationData[plant])
            : [];



    /* ===============================
       SECTIONS FOR SELECTED REGION
    =============================== */

    const availableSections =
        plant && region
            ? locationData[plant][region] || []
            : [];



    /* ===============================
       GENERATE REPORT
    =============================== */

    function generateReport() {

        if (!fromDate || !toDate || !plant || !region || !section) {

            alert(
                "Please select the date range, plant, region and section before generating the report."
            );

            return;

        }


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

                                const selectedPlant =
                                    e.target.value;

                                setPlant(selectedPlant);

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

                                const selectedRegion =
                                    e.target.value;

                                setRegion(selectedRegion);

                                setSection("");

                            }}

                        >

                            <option value="">
                                Select Region
                            </option>


                            {availableRegions.map(
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


                            {availableSections.map(
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