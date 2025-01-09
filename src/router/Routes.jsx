import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, 
         Profile, 
         Advertise, 
         Leaderboard, 
         Referrals, 
         SellOut, 
         Support, 
         CreateAdvert} from "../pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/sellout" element={<SellOut />} />
            <Route path="/support" element={<Support />} />
            <Route path="/create-advert" element={<CreateAdvert />} />
            <Route path="*" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;