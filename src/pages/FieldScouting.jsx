import { useState } from "react";

import Navbar from "../components/Navbar";


function FieldScouting() {


    const [plant, setPlant] =
        useState("");


    const [region, setRegion] =
        useState("");


    const [section, setSection] =
        useState("");


    const [fromDate, setFromDate] =
        useState("");


    const [toDate, setToDate] =
        useState("");


    const [exportType, setExportType] =
        useState("");


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


    function handlePlantChange(event) {

        const selectedPlant =
            event.target.value;


        setPlant(selectedPlant);

        setRegion("");

        setSection("");

    }


    function handleRegionChange(event) {

        const selectedRegion =
            event.target.value;


        setRegion(selectedRegion);

        setSection("");

    }


    function handleGenerateReport() {

        console.log("Generate Field Scouting report");

        console.log(
            "From:",
            fromDate
        );

        console.log(
            "To:",
            toDate
        );

        console.log(
            "Plant:",
            plant
        );

        console.log(
            "Region:",
            region
        );

        console.log(
            "Section:",
            section
        );

        console.log(
            "Export:",
            exportType
        );

    }


    return (

        <div className="field-scouting-page">


            <Navbar />


            <main className="field-scouting-content">


                <div className="field-scouting-header">

                    <h1>
                        Field Scouting Report
                    </h1>


                    <p>
                        Select the required filters to generate
                        the Field Scouting report.
                    </p>

                </div>


                {/* FILTER PANEL */}

                <div className="filter-panel">


                    <div className="filter-field">

                        <label>
                            Date From
                        </label>


                        <input
                            type="date"

                            value={fromDate}

                            onChange={function(event) {

                                setFromDate(
                                    event.target.value
                                );

                            }}
                        />

                    </div>


                    <div className="filter-field">

                        <label>
                            Date To
                        </label>


                        <input
                            type="date"

                            value={toDate}

                            onChange={function(event) {

                                setToDate(
                                    event.target.value
                                );

                            }}
                        />

                    </div>


                    {/* PLANT */}

                    <div className="filter-field">

                        <label>
                            Plant
                        </label>


                        <select
                            value={plant}

                            onChange={
                                handlePlantChange
                            }
                        >


                            <option value="">
                                Select Plant
                            </option>


                            {plants.map(
                                function(item) {

                                    return (

                                        <option
                                            key={item}
                                            value={item}
                                        >

                                            {item}

                                        </option>

                                    );

                                }
                            )}


                        </select>

                    </div>


                    {/* REGION */}

                    <div className="filter-field">

                        <label>
                            Region
                        </label>


                        <select
                            value={region}

                            onChange={
                                handleRegionChange
                            }

                            disabled={!plant}
                        >


                            <option value="">
                                Select Region
                            </option>


                            {plant &&
                                regions[plant].map(
                                    function(item) {

                                        return (

                                            <option
                                                key={item}
                                                value={item}
                                            >

                                                {item}

                                            </option>

                                        );

                                    }
                                )
                            }


                        </select>

                    </div>


                    {/* SECTION */}

                    <div className="filter-field">

                        <label>
                            Section
                        </label>


                        <select
                            value={section}

                            onChange={function(event) {

                                setSection(
                                    event.target.value
                                );

                            }}

                            disabled={!region}
                        >


                            <option value="">
                                Select Section
                            </option>


                            {region &&
                                sections[region].map(
                                    function(item) {

                                        return (

                                            <option
                                                key={item}
                                                value={item}
                                            >

                                                {item}

                                            </option>

                                        );

                                    }
                                )
                            }


                        </select>

                    </div>


                    {/* EXPORT */}

                    <div className="filter-field">

                        <label>
                            Export
                        </label>


                        <select
                            value={exportType}

                            onChange={function(event) {

                                setExportType(
                                    event.target.value
                                );

                            }}
                        >


                            <option value="">
                                Export As
                            </option>


                            <option value="PDF">
                                PDF
                            </option>


                            <option value="Excel">
                                Excel
                            </option>


                        </select>

                    </div>


                    <button
                        className="generate-report-button"

                        onClick={
                            handleGenerateReport
                        }
                    >

                        Generate Report

                    </button>


                </div>


                {/* RESULTS */}

                <div className="field-scouting-results">


                    <div className="results-header">

                        <span>
                            Report Results
                        </span>


                        <h2>
                            Field Scouting
                        </h2>

                    </div>

                </div>


            </main>


        </div>

    );

}


export default FieldScouting;