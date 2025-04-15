export default function Reservationbox({ selectedCar, setSelectedCar }) {
    // your CarNames array remains the same
    const [selectedImage, setSelectedimage] = useState(CarNames[1].image);
    const [selectedCardata, setSelectedcardata] = useState(CarNames[1].data);

    useEffect(() => {
        const car = CarNames.find(c => c.name === selectedCar);
        if (car) {
            setSelectedimage(car.image);
            setSelectedcardata(car.data);
        }
    }, [selectedCar]);

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
        // unchanged JSX
        // just replace `setSelectedcar(carname.name)` with `setSelectedCar(carname.name)`
    );
}
