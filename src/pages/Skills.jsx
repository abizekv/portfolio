import FrontendTools from "./components/FrontendTools";
import BackendTools from "./components/BackendTools";
import OtherTools from "./components/OtherTools";
import { useState } from "react";
import clsx from "clsx";
export default function Skills() {
    const [activeTab, setActiveTab] = useState("frontend")
    function selectTab(tabName) {
        setActiveTab(tabName)
    }
    return (
        <section className="skills-section">
            <nav className="skills-section-navbar">
                <button
                    className={clsx("nav-button", activeTab === "frontend" && "selected")}
                    onClick={() => selectTab("frontend")}
                >Frontend
                </button>
                <button
                    className={clsx("nav-button", activeTab === "backend" && "selected")}
                    onClick={() => selectTab("backend")}
                >Backend
                </button>
                <button
                    className={clsx("nav-button", activeTab === "tools" && "selected")}
                    onClick={() => selectTab("tools")}
                >Tools
                </button>
            </nav>
            {activeTab === "frontend" &&
                <FrontendTools />
            }
            {activeTab === "backend" &&
                <BackendTools />
            }
            {activeTab === "tools" &&
                <OtherTools />
            }

        </section>
    )
}
