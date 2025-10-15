"use client";
import Sidebar from "@/components/Layouts/Sidebar";
import React, {Suspense, useState} from "react";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import TopGo from "../CommonElements/TopGo";
import Loading from "@/app/loading";
import Customizer from "@/components/Layouts/Customizer";

export default function DefaultLayout({children}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="app-wrapper default">
            <Suspense fallback={<Loading />}>
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="app-content">
                    <div>
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <main>
                            {children}
                        </main>
                        <TopGo />
                        <Footer />
                        <Customizer/>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}