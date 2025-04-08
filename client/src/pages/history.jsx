// // // import { useContext, useEffect, useState } from 'react';
// // // import Accountbar from '../Components/Navbarcomponents/Accountbar';
// // // import axios from 'axios';
// // // import audi from "../Components/images/audi.jpg";
// // // import toyota from "../Components/images/toyota.jpg";
// // // import bmw from "../Components/images/bmw.jpg";
// // // import passat from "../Components/images/passat.jpg";
// // // import benz from "../Components/images/benz.jpg";
// // // import golf from "../Components/images/golf.jpg";
// // // import Footer from "../Components/Bodycomponents/Footer";
// // // import LinearColor from '../Components/Bodycomponents/linearprogress';
// // // import { UserContext } from '../Context/Clientcontext';
// // // import { useNavigate } from 'react-router-dom';
// // // import Privateroute from '../middleware/privateroute';

// // // export default function History() {
// // //     const [bookings, setBookings] = useState([]);
// // //     const [isLoading, setIsLoading] = useState(true);

// // //     const fetchBookings = async () => {
// // //         try {
// // //             const response = await axios.get('/history'); // Make sure the URL is correct
// // //             setBookings(response.data); // Store fetched bookings
// // //         } catch (error) {
// // //             console.error("Error fetching bookings:", error);
// // //         } finally {
// // //             setIsLoading(false); // Stop the loading once data is fetched
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchBookings(); // Fetch bookings when component mounts
// // //     }, []);

// // //     if (isLoading) return <LinearColor />; // Show loading while fetching

// // //     return (
// // //         <div>
// // //             <Accountbar />
// // //             <div className="container mx-auto py-4">
// // //                 <h2 className="text-xl font-semibold italic">Booking History</h2>
// // //             </div>
// // //             <div className="container mx-auto py-4">
// // //                 {bookings.length === 0 ? (
// // //                     <p className="text-center text-gray-500">No bookings found.</p>
// // //                 ) : (
// // //                     <div className="grid lg:grid-cols-3 gap-4">
// // //                         {bookings.map((booking, index) => (
// // //                             <div key={index} className="text-center shadow-xl py-4 px-2 rounded-lg bg-white">
// // //                                 <p className="font-semibold text-base">{booking.firstname} {booking.lastname}</p>
// // //                                 <p className="text-sm">{booking.email}</p>
// // //                                 <p className="text-sm">{booking.phone}</p>
// // //                                 <div className="py-2">
// // //                                     <p className="italic">{booking.pickDate} - {booking.dropDate}</p>
// // //                                     <p className="italic">{booking.pickPlace} - {booking.dropPlace}</p>
// // //                                     <p className="italic">{booking.pickTime} - {booking.dropTime}</p>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </div>
// // //             <Footer />
// // //         </div>
// // //     );
// // // }
// // import { useContext, useEffect, useState } from 'react';
// // import Accountbar from '../Components/Navbarcomponents/Accountbar';
// // import axios from 'axios';
// // import audi from "../Components/images/audi.jpg";
// // import toyota from "../Components/images/toyota.jpg";
// // import bmw from "../Components/images/bmw.jpg";
// // import passat from "../Components/images/passat.jpg";
// // import benz from "../Components/images/benz.jpg";
// // import golf from "../Components/images/golf.jpg";
// // import Footer from "../Components/Bodycomponents/Footer";
// // import LinearColor from '../Components/Bodycomponents/linearprogress';
// // import { UserContext } from '../Context/Clientcontext';
// // import { useNavigate } from 'react-router-dom';
// // import Privateroute from '../middleware/privateroute';

// // export default function History() {
// //     const [bookings, setBookings] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);

// //     const fetchBookings = async () => {
// //         try {
// //             const response = await axios.get('/history'); // Ensure this is the correct URL or use full URL if necessary
// //             setBookings(response.data);
// //         } catch (error) {
// //             console.error("Error fetching bookings:", error.message);
// //             setBookings([]); // Optionally set an empty array if data fetching fails
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchBookings(); // Fetch bookings when component mounts
// //     }, []);

// //     if (isLoading) return <LinearColor />; // Show loading while fetching

// //     return (
// //         <div>
// //             <Accountbar />
// //             <div className="container mx-auto py-4">
// //                 <h2 className="text-xl font-semibold italic">Booking History</h2>
// //             </div>
// //             <div className="container mx-auto py-4">
// //                 {bookings.length === 0 ? (
// //                     <p className="text-center text-gray-500">No bookings found.</p>
// //                 ) : (
// //                     <div className="grid lg:grid-cols-3 gap-4">
// //                         {bookings.map((booking, index) => (
// //                             <div key={index} className="text-center shadow-xl py-4 px-2 rounded-lg bg-white">
// //                                 <p className="font-semibold text-base">{booking.firstname} {booking.lastname}</p>
// //                                 <p className="text-sm">{booking.email}</p>
// //                                 <p className="text-sm">{booking.phone}</p>
// //                                 <div className="py-2">
// //                                     <p className="italic">{booking.pickDate} - {booking.dropDate}</p>
// //                                     <p className="italic">{booking.pickPlace} - {booking.dropPlace}</p>
// //                                     <p className="italic">{booking.pickTime} - {booking.dropTime}</p>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //             <Footer />
// //         </div>
// //     );
// // }
// import { useContext, useEffect, useState } from 'react';
// import Accountbar from '../Components/Navbarcomponents/Accountbar';
// import axios from 'axios';
// import Footer from "../Components/Bodycomponents/Footer";
// import LinearColor from '../Components/Bodycomponents/linearprogress';
// import { UserContext } from '../Context/Clientcontext';

// export default function History() {
//     const [bookings, setBookings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const fetchBookings = async () => {
//         try {
//             // If using proxy in package.json, this will work: "/history"
//             // If not using proxy, use full backend URL like "http://localhost:5000/history"
//             const response = await axios.get('http://localhost:5000/history'); // Change this to your actual backend URL
//             setBookings(response.data); // Store fetched bookings
//         } catch (error) {
//             console.error("Error fetching bookings:", error.message);
//         } finally {
//             setIsLoading(false); // Stop the loading once data is fetched
//         }
//     };

//     useEffect(() => {
//         fetchBookings(); // Fetch bookings when component mounts
//     }, []);

//     if (isLoading) return <LinearColor />; // Show loading while fetching

//     return (
//         <div>
//             <Accountbar />
//             <div className="container mx-auto py-4">
//                 <h2 className="text-xl font-semibold italic">Booking History</h2>
//             </div>
//             <div className="container mx-auto py-4">
//                 {bookings.length === 0 ? (
//                     <p className="text-center text-gray-500">No bookings found.</p>
//                 ) : (
//                     <div className="grid lg:grid-cols-3 gap-4">
//                         {bookings.map((booking, index) => (
//                             <div key={index} className="text-center shadow-xl py-4 px-2 rounded-lg bg-white">
//                                 <p className="font-semibold text-base">{booking.firstname} {booking.lastname}</p>
//                                 <p className="text-sm">{booking.email}</p>
//                                 <p className="text-sm">{booking.phone}</p>
//                                 <div className="py-2">
//                                     <p className="italic">{booking.pickDate} - {booking.dropDate}</p>
//                                     <p className="italic">{booking.pickPlace} - {booking.dropPlace}</p>
//                                     <p className="italic">{booking.pickTime} - {booking.dropTime}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//             <Footer />
//         </div>
//     );
// }

import { useContext, useEffect, useState } from 'react';
import Accountbar from '../Components/Navbarcomponents/Accountbar';
import axios from 'axios';
import Footer from "../Components/Bodycomponents/Footer";
import LinearColor from '../Components/Bodycomponents/linearprogress';
import { UserContext } from '../Context/Clientcontext';

export default function History() {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings'); // Corrected URL
            setBookings(response.data); // Store fetched bookings
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setIsLoading(false); // Stop the loading once data is fetched
        }
    };

    useEffect(() => {
        fetchBookings(); // Fetch bookings when component mounts
    }, []);

    if (isLoading) return <LinearColor />; // Show loading while fetching

    return (
        <div>
            <Accountbar />
            <div className="container mx-auto py-4">
                <h2 className="text-xl font-semibold italic">Booking History</h2>
            </div>
            <div className="container mx-auto py-4">
                {bookings.length === 0 ? (
                    <p className="text-center text-gray-500">No bookings found.</p>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-4">
                        {bookings.map((booking, index) => (
                            <div key={index} className="text-center shadow-xl py-4 px-2 rounded-lg bg-white">
                                <p className="font-semibold text-base">{booking.firstname} {booking.lastname}</p>
                                <p className="text-sm">{booking.email}</p>
                                <p className="text-sm">{booking.phone}</p>
                                <div className="py-2">
                                    <p className="italic">{booking.pickDate} - {booking.dropDate}</p>
                                    <p className="italic">{booking.pickPlace} - {booking.dropPlace}</p>
                                    <p className="italic">{booking.pickTime} - {booking.dropTime}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
