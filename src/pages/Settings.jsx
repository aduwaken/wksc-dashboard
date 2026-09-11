function Settings() {

    return (
        <div className="page">

            <div className="page-header">

                <h1>Settings</h1>

                <p>
                    Manage your dashboard preferences and account
                </p>

            </div>


            <section className="settings-card">

                <h2>Profile</h2>

                <div className="settings-grid">

                    <div>
                        <label>Name</label>
                        <p>Kennedy Aduwa</p>
                    </div>

                    <div>
                        <label>Role</label>
                        <p>ICT Clerk</p>
                    </div>

                    <div>
                        <label>Department</label>
                        <p>Information Technology</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <p>kennedy@wksc.co.ke</p>
                    </div>

                    <div>
                        <label>Employee ID</label>
                        <p>WKSC-2024-0847</p>
                    </div>

                </div>

                <button className="secondary-button">
                    Edit Profile
                </button>

            </section>


            <section className="settings-card">

                <h2>System Preferences</h2>

                <div className="settings-grid">

                    <div>
                        <label>Dashboard Language</label>
                        <p>English</p>
                    </div>

                    <div>
                        <label>Timezone</label>
                        <p>East Africa Time (EAT)</p>
                    </div>

                    <div>
                        <label>Date Format</label>
                        <p>DD/MM/YYYY</p>
                    </div>

                    <div>
                        <label>Currency</label>
                        <p>Kenyan Shilling (KES)</p>
                    </div>

                </div>

            </section>


            <section className="settings-card">

                <h2>Security</h2>

                <div className="settings-grid">

                    <div>
                        <label>Last Login</label>
                        <p>
                            September 10, 2026 — 09:58 AM
                        </p>
                    </div>

                    <div>
                        <label>Session Timeout</label>
                        <p>30 minutes</p>
                    </div>

                    <div>
                        <label>Two-Factor Authentication</label>
                        <p className="security-disabled">
                            Disabled
                        </p>
                    </div>

                </div>

                <button className="secondary-button">
                    Change Password
                </button>

            </section>

        </div>
    );
}

export default Settings;