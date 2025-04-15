import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/Clientcontext';  // Assuming you have user context

import Hero from '../Components/Bodycomponents/Hero';
import Form from '../Components/Bodycomponents/Form';
import Cards from '../Components/Bodycomponents/cards';
import Reservationbox from '../Components/Bodycomponents/reservation';
import Banner from '../Components/Bodycomponents/Banner';
import Services from '../Components/Bodycomponents/services';
import Downloads from '../Components/Bodycomponents/Downloads';
import Footer from '../Components/Bodycomponents/Footer';
import Reviews from '../Components/Bodycomponents/Reviews';
import BookingHistory from '../Components/Bodycomponents/homebook';
import Navbar from '../Components/Navbarcomponents/Navbar';
import Bookcar from '../Components/Bodycomponents/Bookcar';
import LinearColor from '../Components/Bodycomponents/linearprogress';

export default function Home() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const reservationFormRef = useRef(null);

    const [isDivVisible, setDivVisible] = useState(false);
    const [carType, setCarType] = useState('');
    const [pickPlace, setPickPlace] = useState('');
    const [dropPlace, setDropPlace] = useState('');
    const [pickDate, setPickDate] = useState('');
    const [dropDate, setDropDate] = useState('');
    const [checkUser, setCheckUser] = useState(false);

    // Check user authentication when the page loads
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Call your backend to validate the token
                const response = await axios.get('/api/user'); // Assuming this is your route
                setUser(response.data);  // Assuming your context has setUser to store user data
            } catch (error) {
                console.log("User not authenticated, redirecting to login...");
                setUser(null);  // If not authenticated, clear user context
                navigate('/login');  // Redirect to login page
            }
        };

        // Check the authentication status on initial load
        checkAuth();
    }, [navigate, setUser]);

    const addClass = () => (isDivVisible ? 'saturate-50' : '');

    const handleBookRideClick = () => {
        reservationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDiv = () => {
        setDivVisible(true);
    };

    return (
        <>
            {!checkUser ? (
                <LinearColor />
            ) : (
                <div className="relative">
                    <div className={addClass()}>
                        <Navbar />
                        <Hero handleBookRideClick={handleBookRideClick} />
                        <Reservationbox handleBookRideClick={handleBookRideClick} />
                        <Form
                            reservationFormRef={reservationFormRef}
                            toggleDiv={toggleDiv}
                            carType={carType}
                            setCarType={setCarType}
                            pickPlace={pickPlace}
                            dropPlace={dropPlace}
                            setPickPlace={setPickPlace}
                            setDropPlace={setDropPlace}
                            pickDate={pickDate}
                            dropDate={dropDate}
                            setPickDate={setPickDate}
                            setDropDate={setDropDate}
                        />
                        <Cards />
                        <Banner />
                        <Services />
                        <Reviews />
                        <Downloads />
                        <BookingHistory />
                        <Footer />
                    </div>

                    <Bookcar
                        isDivVisible={isDivVisible}
                        setDivVisible={setDivVisible}
                        carType={carType}
                        pickPlace={pickPlace}
                        dropPlace={dropPlace}
                        pickDate={pickDate}
                        dropDate={dropDate}
                    />
                </div>
            )}
        </>
    );
}
