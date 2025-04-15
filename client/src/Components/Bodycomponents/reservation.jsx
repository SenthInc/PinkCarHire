import React, { useState } from 'react';
import audi from "../images/audi.jpg";
import toyota from "../images/toyota.jpg";
import bmw from "../images/bmw.jpg";
import passat from "../images/passat.jpg";
import benz from "../images/benz.jpg";
import golf from "../images/golf.jpg";

export default function Reservationbox() {
    const CarNames = [
        { name: "Audi A1 S-Line", image: audi, data: { model: "Audi", mark: "A1", year: "2012", doors: "4/5", ac: "Yes", transmission: "manual", fuel: "Gasoline" } },
        { name: "VW Golf 6", image: golf, data: { model: "Golf 6", mark: "Volkswagen", year: "2008", doors: "4/5", ac: "Yes", transmission: "manual", fuel: "Diesel" } },
        { name: "Toyota Camry", image: toyota, data: { model: "Camry", mark: "Toyota", year: "2006", doors: "4/5", ac: "Yes", transmission: "Automatic", fuel: "Hybrid" } },
        { name: "BMW 320 ModernLine", image: bmw, data: { model: "320", mark: "BMW", year: "2012", doors: "4/5", ac: "Yes", transmission: "manual", fuel: "Diesel" } },
        { name: "Mercedes-Benz GLK", image: benz, data: { model: "Benz GLK", mark: "Mercedes", year: "2006", doors: "4/5", ac: "Yes", transmission: "manual", fuel: "Diesel" } },
        { name: "VW Passat CC", image: passat, data: { model: "Passat CC", mark: "Volkswagen", year: "2008", doors: "4/5", ac: "Yes", transmission: "Automatic", fuel: "Gasoline" } },
    ];

    const [selectedCar, setSelectedcar] = useState(CarNames[1].name);
    const [selectedImage, setSelectedimage] = useState(CarNames[1].image);
    const [selectedCardata, setSelectedcardata] = useState(CarNames[1].data);

    const addClass = (carname) => {
        let classes = "bg-[#e9e9e9] font-[Poppins,sans-serif] ml-16 text-center text-xl font-semibold py-3 px-4 w-3/5 hover:bg-orange hover:text-white";
        if (selectedCar === carname) {
            classes = "bg-orange text-white font-[Poppins,sans-serif] ml-16 text-center text-xl font-semibold py-3 px-4 w-3/5 hover:bg-orange hover:text-white";
        }
        return classes;
    };

    const handleReserveNow = async () => {
        const reservationData = {
            firstname: "Senthalan",
            lastname: "Vyra",
            age: "25",
            phone: "0771234567",
            email: "sentha@example.com",
            address: "Chavakachcheri",
            city: "Jaffna",
            zipcode: "40000",
            carType: selectedCar,
            pickPlace: "Jaffna Airport",
            dropPlace: "Colombo Fort",
            pickDate: "2025-04-08",
            dropDate: "2025-04-10",
            pickTime: "09:00",
            dropTime: "18:00"
        };

        try {
            const res = await fetch('http://localhost:5000/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservationData)
            });

            const result = await res.json();
            if (res.ok) {
                alert('✅ Reservation successful!');
                console.log(result);
            } else {
                alert('❌ Reservation failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error booking ride:', error);
            alert('⚠️ Server error. Try again later.');
        }
    };

    return (
        <>
            <div className="container mx-auto flex justify-center mb-10">
                <div className="text-center w-2/5">
                    <h2 className="font-bold text-2xl mb-5">Vehicle Models</h2>
                    <h1 className="font-bold text-5xl mb-5">Our rental fleet</h1>
                    <p className="text-base text-[#706f7b] mb-5">Choose from a variety of our amazing 
                        vehicles to rent for your next adventure or business trip</p>
                </div>
            </div>

            <div className="container mx-auto flex justify-center mb-48">
                <div className="grid lg:grid-cols-3 items-center">
                    <div className="justify-center">
                        <div className="grid grid-cols-1 gap-4 justify-center items-center">
                            {CarNames.map((carname, index) => (
                                <div onClick={() => {
                                    setSelectedcar(carname.name);
                                    setSelectedimage(carname.image);
                                    setSelectedcardata(carname.data);
                                }} key={index} style={{ cursor: "pointer" }} id="carmodels" className={addClass(carname.name)}>
                                    {carname.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <img src={selectedImage} alt="Selected Car" />
                    </div>

                    <div className="">
                        <div className="grid grid-rows-1 border w-3/5 ml-20 ">
                            <div className="bg-orange py-4 px-2 text-center text-white font-sans font-bold text-2xl">
                                $25 / rent per day
                            </div>
                            <table className="">
                                <thead>
                                    <tr>
                                        <td className="py-2 text-center font-bold">Model</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.model}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 text-center font-bold">Mark</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.mark}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 text-center font-bold">Year</td>
                                        <td className="py-3 text-center font-bold">{selectedCardata.year}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-center font-bold">Doors</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.doors}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-center font-bold">AC</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.ac}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-center font-bold">Transmission</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.transmission}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-center font-bold">Fuel</td>
                                        <td className="py-2 text-center font-bold">{selectedCardata.fuel}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div onClick={handleReserveNow} style={{ cursor: "pointer" }} className="hover:shadow-2xl opacity-95 hover:opacity-100 py-2 px-2 bg-orange text-white font-sans font-bold text-center text-2xl w-3/5 ml-20 mt-4">
                            Reserve Now
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// import React, { useState } from 'react';
// import audi from "../images/audi.jpg";
// import toyota from "../images/toyota.jpg";
// import bmw from "../images/bmw.jpg";
// import passat from "../images/passat.jpg";
// import benz from "../images/benz.jpg";
// import golf from "../images/golf.jpg";

// export default function Reservationbox({ handleBookRideClick }) {
//     const CarNames = [
//         {
//             name: "Audi A1 S-Line",
//             image: audi,
//             data: {
//                 model: "Audi",
//                 mark: "A1",
//                 year: "2012",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "manual",
//                 fuel: "Gasoline"
//             }
//         },
//         {
//             name: "VW Golf 6",
//             image: golf,
//             data: {
//                 model: "Golf 6",
//                 mark: "Volkswagen",
//                 year: "2008",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "manual",
//                 fuel: "Diesel"
//             }
//         },
//         {
//             name: "Toyota Camry",
//             image: toyota,
//             data: {
//                 model: "Camry",
//                 mark: "Toyota",
//                 year: "2006",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "Automatic",
//                 fuel: "Hybrid"
//             }
//         },
//         {
//             name: "BMW 320 ModernLine",
//             image: bmw,
//             data: {
//                 model: "320",
//                 mark: "BMW",
//                 year: "2012",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "manual",
//                 fuel: "Diesel"
//             }
//         },
//         {
//             name: "Mercedes-Benz GLK",
//             image: benz,
//             data: {
//                 model: "Benz GLK",
//                 mark: "Mercedes",
//                 year: "2006",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "manual",
//                 fuel: "Diesel"
//             }
//         },
//         {
//             name: "VW Passat CC",
//             image: passat,
//             data: {
//                 model: "Passat CC",
//                 mark: "Volkswagen",
//                 year: "2008",
//                 doors: "4/5",
//                 ac: "Yes",
//                 transmission: "Automatic",
//                 fuel: "Gasoline"
//             }
//         }
//     ];

//     const [selectedCar, setSelectedcar] = useState(CarNames[1].name);
//     const [selectedImage, setSelectedimage] = useState(CarNames[1].image);
//     const [selectedCardata, setSelectedcardata] = useState(CarNames[1].data);

//     const addClass = (carname) => {
//         let classes =
//             "bg-[#e9e9e9] font-[Poppins,sans-serif] ml-16 text-center text-xl font-semibold py-3 px-4 w-3/5 hover:bg-orange hover:text-white";
//         if (selectedCar === carname) {
//             classes =
//                 "bg-orange text-white font-[Poppins,sans-serif] ml-16 text-center text-xl font-semibold py-3 px-4 w-3/5 hover:bg-orange hover:text-white";
//         }
//         return classes;
//     };

//     const handleReserveNow = async () => {
//         if (handleBookRideClick) handleBookRideClick(); // 🔥 Trigger scroll or any shared effect

//         const reservationData = {
//             firstname: "Senthalan",
//             lastname: "Vyra",
//             age: "25",
//             phone: "0771234567",
//             email: "sentha@example.com",
//             address: "Chavakachcheri",
//             city: "Jaffna",
//             zipcode: "40000",
//             carType: selectedCar,
//             pickPlace: "Jaffna Airport",
//             dropPlace: "Colombo Fort",
//             pickDate: "2025-04-08",
//             dropDate: "2025-04-10",
//             pickTime: "09:00",
//             dropTime: "18:00"
//         };

//         try {
//             const res = await fetch('http://localhost:5000/api/reservation', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(reservationData)
//             });

//             const result = await res.json();
//             if (res.ok) {
//                 alert('✅ Reservation successful!');
//                 console.log(result);
//             } else {
//                 alert('❌ Reservation failed: ' + result.message);
//             }
//         } catch (error) {
//             console.error('Error booking ride:', error);
//             alert('⚠️ Server error. Try again later.');
//         }
//     };

//     return (
//         <div className="flex flex-col gap-6 p-6 bg-gray-100 rounded-xl shadow-md w-full max-w-4xl mx-auto">
//             <h2 className="text-2xl font-bold text-center">Select Your Car</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//                 {CarNames.map((car, index) => (
//                     <button
//                         key={index}
//                         className={addClass(car.name)}
//                         onClick={() => {
//                             setSelectedcar(car.name);
//                             setSelectedimage(car.image);
//                             setSelectedcardata(car.data);
//                         }}
//                     >
//                         {car.name}
//                     </button>
//                 ))}
//             </div>

//             <div className="mt-8 flex flex-col md:flex-row gap-6 items-center">
//                 <img
//                     src={selectedImage}
//                     alt={selectedCar}
//                     className="w-80 h-52 object-cover rounded-md shadow"
//                 />
//                 <div className="text-left">
//                     <p><strong>Model:</strong> {selectedCardata.model}</p>
//                     <p><strong>Mark:</strong> {selectedCardata.mark}</p>
//                     <p><strong>Year:</strong> {selectedCardata.year}</p>
//                     <p><strong>Doors:</strong> {selectedCardata.doors}</p>
//                     <p><strong>AC:</strong> {selectedCardata.ac}</p>
//                     <p><strong>Transmission:</strong> {selectedCardata.transmission}</p>
//                     <p><strong>Fuel:</strong> {selectedCardata.fuel}</p>
//                 </div>
//             </div>

//             <div className="mt-6 text-center">
//                 <button
//                     onClick={handleReserveNow}
//                     className="bg-orange text-white font-bold px-10 py-4 rounded-xl hover:bg-[#d57200] transition"
//                 >
//                     Reserve Now
//                 </button>
//             </div>
//         </div>
//     );
// }
