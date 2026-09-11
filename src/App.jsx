import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Leads from "./pages/Leads";
import FieldScouting from "./pages/FieldScouting";
import ReportPage from "./pages/ReportPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Homepage */}
                <Route path="/" element={<Home />} />

                {/* Existing special report pages */}
                <Route path="/reports/leads" element={<Leads />} />

                <Route
                    path="/reports/field-scouting"
                    element={<FieldScouting />}
                />

                {/* All other mini reports */}
                <Route
                    path="/reports/:reportSlug"
                    element={<ReportPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;