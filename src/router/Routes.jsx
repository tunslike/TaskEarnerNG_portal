import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, 
         Profile, 
         Advertise, 
         Leaderboard, 
         Referrals, 
         SellOut, 
         Support, 
         CreateAdvert,
         CreateEngagement,
         CompleteTask,
         Login, Register
        } from "../pages";
import { Account, ManageProfile, Orders } from "../pages/Account";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/create-engagement" element={<CreateEngagement />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/sellout" element={<SellOut />} />
                <Route path="/support" element={<Support />} />
                <Route path="/create-advert" element={<CreateAdvert />} />  
                <Route path="/complete-task" element={<CompleteTask />} />
                <Route path="/account" element={<Account />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/manageProfile" element={<ManageProfile />} />
            </Route> 
            <Route path="*" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;