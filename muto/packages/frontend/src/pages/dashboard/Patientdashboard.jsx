import React from "react";
import RecentResults from "../../components/studentsdashboard/Recentresults";
import RecentPayment from "../../components/studentsdashboard/RecentPayment";
import { StudentsInformationCard } from "../../components/studentsdashboard/StudentsInformationCard";
import { DashboardCards } from "../../components/studentsdashboard/DashboardCards";

export function Studentdashboard() {
  return (
    <>
      <DashboardCards />
        <div className="row">
          <StudentsInformationCard />
          <div className="col-md-6 ">
            <div className="row">
              <RecentPayment />
              <RecentResults />
            </div>
          </div>
        </div>
    </>
  );
}
