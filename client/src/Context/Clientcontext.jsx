import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Create a context with default value as an empty object
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);   // Stores the user data
    const [ready, setReady] = useState(false); // Used to indicate that the user verification process is complete

    // Fetch user data from the API or localStorage
    useEffect(() => {
        // Check if user data exists in localStorage
        const savedUser = JSON.parse(localStorage.getItem("user"));
        
        if (savedUser) {
            setUser(savedUser);  // Set user data from localStorage if available
            setReady(true);  // Indicate that the app is ready
        } else {
            // Optionally: Fetch user data from backend if localStorage does not have user data
            axios.get("/api/user", { withCredentials: true })  // Make sure this route is accessible for user data
                .then(({ data }) => {
                    setUser(data);   // Set user data from backend
                    localStorage.setItem("user", JSON.stringify(data));  // Save user data in localStorage
                })
                .catch(() => {
                    console.log("No user session found");
                    setUser(null);  // Ensure user is null if session verification fails
                })
                .finally(() => {
                    setReady(true);  // Mark as ready after the data is fetched or failed
                });
        }
    }, []);  // This will run only once, on the first render

    UserContextProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}
