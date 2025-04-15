import { useEffect, useState } from 'react';
import axios from 'axios';
import LinearColor from './linearprogress';

export default function BookingHistory() {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/booking');
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (isLoading) return <LinearColor />;

    return (
        <div className="container mx-auto py-6 px-4">
            <h2 className="text-2xl font-bold italic mb-4 text-center">All Booking Histories</h2>

            {bookings.length === 0 ? (
                <p className="text-center text-gray-500">No bookings found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map((booking, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-2">
                                <p className="text-lg font-semibold text-gray-900">
                                    {booking.firstname} {booking.lastname}
                                </p>
                                <p className="text-sm text-gray-600">{booking.email}</p>
                                <p className="text-sm text-gray-600">{booking.phone}</p>
                            </div>

                            <div className="mt-3 text-sm text-gray-800 space-y-1">
                                <p><span className="font-medium">Dates:</span> {booking.pickDate} ➜ {booking.dropDate}</p>
                                <p><span className="font-medium">Places:</span> {booking.pickPlace} ➜ {booking.dropPlace}</p>
                                <p><span className="font-medium">Times:</span> {booking.pickTime} ➜ {booking.dropTime}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
