import React, { useRef, useState } from 'react';
import Reservationbox from './Reservationbox';
import Form from '../Bodycomponents/Form';

export default function MainReservationComponent() {
    const reservationFormRef = useRef(null);

    const [carType, setCarType] = useState("VW Golf 6");
    const [pickPlace, setPickPlace] = useState("");
    const [dropPlace, setDropPlace] = useState("");
    const [pickDate, setPickDate] = useState("");
    const [dropDate, setDropDate] = useState("");

    const toggleDiv = () => {
        if (reservationFormRef.current) {
            reservationFormRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Form
                reservationFormRef={reservationFormRef}
                toggleDiv={toggleDiv}
                carType={carType}
                setCarType={setCarType}
                pickPlace={pickPlace}
                setPickPlace={setPickPlace}
                dropPlace={dropPlace}
                setDropPlace={setDropPlace}
                pickDate={pickDate}
                setPickDate={setPickDate}
                dropDate={dropDate}
                setDropDate={setDropDate}
            />
            <Reservationbox
                selectedCar={carType}
                setSelectedCar={setCarType}
            />
        </>
    );
}
