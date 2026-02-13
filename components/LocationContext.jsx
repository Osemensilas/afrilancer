import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [locationDetail, setLocationDetail] = useState("NG");

    useEffect(() => {
        const fetchUserCountry = async () => {
            try {
                const response = await fetch("https://ipapi.co/json");
                const data = await response.json();
                setLocationDetail(data.country || "NG");
            } catch (error) {
                console.log("Error fetching country:", error);
                setLocationDetail("NG");
            }
        };

        fetchUserCountry();
    }, []);

    return (
        <LocationContext.Provider value={{ locationDetail }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);
