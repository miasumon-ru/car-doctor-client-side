import { useEffect, useState } from "react";
import CustomAuth from "../../custom/CustomAuth";

import axios  from "axios";



const Bookings = () => {
    const { user } = CustomAuth()

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {


        axios.get(url, {withCredentials : true})
        .then(res => {
            console.log(res.data)
            setBookings(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setBookings(data)
        //     })


    }, [url])


    const handleDelete = (id) => {

        console.log(id)

        const proceed = confirm("Are you sure to delete the item ?")
        
         if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
             
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.deletedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
            
         }

    }


    const handleBookingConfirm = (id) => {

        fetch(`http://localhost:5000/bookings/${id}` , {
            method : "PATCH",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({status : "confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.modifiedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)

                updated.status = 'confirm'

                const newBookings = [updated, ...remaining]

                setBookings(newBookings)


            }


        })



    }





    return (
        <div>



            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>

                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings.map(booking => <tr key={booking._id}>

                                <th>
                                    <button onClick={()=> handleDelete(booking._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className=" w-24 h-24 rounded-xl">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.service}

                                </td>
                                <td> {booking.date} </td>
                                <td> {booking.price} </td>
                                <th>

                                    {
                                        booking.status === 'confirm' ? <span className="font-bold text-primary"> Confirmed </span> :
                                        <button onClick={()=> handleBookingConfirm(booking._id)} className="btn btn-ghost btn-xs" > Confirm </button>
                                    }
                                    
                                </th>

                            </tr>)
                        }

                        {/* row 2 */}
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;