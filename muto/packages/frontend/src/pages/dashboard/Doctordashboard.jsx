import React from "react";
import { BursarCards } from "../../components/BursarsDashboardCard/BursarDashboard";
import { FeesStats } from "../../components/BursarsDashboardCard/FeesStats";
import { FeesCollection } from "../../components/BursarsDashboardCard/FeesCollection";
import { Events } from "../../components/BursarsDashboardCard/Events&Budgets";
import { Schedule } from "../../components/BursarsDashboardCard/Schedule";
import { TransactionHistory } from "../../components/BursarsDashboardCard/TransactionHistory";

export function Bursardashboard(){
    return(
        <>
        <BursarCards />
        
       <div className="row"> 
            <FeesStats/>

            
            <FeesCollection/>

        
            <Events/>
            </div>
            <div className="row">
            <Schedule/>
            <TransactionHistory/>
            </div>
           


    
        
        </>
    );
};