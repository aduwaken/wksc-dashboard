export const reportMenuData = [
    {
        name: "Agriculture",
        icon: "leaf",
        side: "right",

        subReports: [
            {
                name: "Leads to Service",

                miniReports: [
                    {
                        name: "Leads",
                        path: "/reports/leads"
                    },

                    {
                        name: "Business Partner Conversion",
                        path: "/reports/business-partner-conversion"
                    },

                    {
                        name: "Field Scouting",
                        path: "/reports/field-scouting"
                    },

                    {
                        name: "E-Contracting",
                        path: "/reports/e-contracting"
                    },

                    {
                        name: "Service Request",
                        path: "/reports/service-request"
                    }
                ]
            },

            {
                name: "Activity Completion",

                miniReports: [
                    {
                        name: "Allocated vs Actual",
                        path: "/reports/allocated-vs-actual"
                    },

                    {
                        name: "Completion Rate",
                        path: "/reports/completion-rate"
                    },

                    {
                        name: "Activity Wise Allocation",
                        path: "/reports/activity-wise-allocation"
                    }
                ]
            }
        ]
    },


    {
        name: "Transport",
        icon: "truck",
        side: "right",

        subReports: [
            {
                name: "Logistics and Dispatch",

                miniReports: [
                    {
                        name: "Logistics Report",
                        path: "/reports/logistics"
                    },

                    {
                        name: "Dispatch Report",
                        path: "/reports/dispatch"
                    }
                ]
            }
        ]
    },


    {
        name: "Finance",
        icon: "money",
        side: "right",

        subReports: [
            {
                name: "Commercial Control",

                miniReports: [
                    {
                        name: "Commercial Control Report",
                        path: "/reports/commercial-control"
                    }
                ]
            },

            {
                name: "Procurement",

                miniReports: [
                    {
                        name: "Procurement Report",
                        path: "/reports/procurement"
                    }
                ]
            }
        ]
    },


    {
        name: "Human Resource",
        icon: "users",
        side: "left",

        subReports: [
            {
                name: "Employee Management",

                miniReports: [
                    {
                        name: "Employee Report",
                        path: "/reports/employees"
                    },

                    {
                        name: "Attendance Report",
                        path: "/reports/attendance"
                    }
                ]
            },

            {
                name: "Performance",

                miniReports: [
                    {
                        name: "Performance Report",
                        path: "/reports/performance"
                    }
                ]
            }
        ]
    },


    {
        name: "Factory",
        icon: "industry",
        side: "left",

        subReports: [
            {
                name: "Production Operations",

                miniReports: [
                    {
                        name: "Production Report",
                        path: "/reports/production"
                    },

                    {
                        name: "Factory Efficiency",
                        path: "/reports/factory-efficiency"
                    }
                ]
            }
        ]
    }
];