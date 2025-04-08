// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({children}){
//     const [user,setUser] = useState(null);
//     const [ready,setReady] = useState(false);
//     useEffect(() =>{
//     //     if(!user){
//     //         axios.get('/verify').then(({data})=>{
//     //             //console.log(data)
//     //             setUser(data);
//     //             setReady(true);
//     //         })
//     //     }

//     // },[]);
//     return(
//         <UserContext.Provider value={{user,setUser,ready}}>
//             {children}
//         </UserContext.Provider>
//     );
// }
// };

import { createContext, useState, useEffect } from "react";

// Create a context with default value as an empty object
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);   // Stores the user data
    const [ready, setReady] = useState(true);  // Mark as ready since there's no API call

    useEffect(() => {
        // Optional: You can retrieve user info from localStorage or cookies
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);  // Set user data if available in localStorage
        }
    }, []); // Only run on initial render

    return (
        // Provide user, setUser, and ready state to the rest of the app
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}
