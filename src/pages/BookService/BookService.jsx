import { useLoaderData } from "react-router-dom";



const BookService = () => {

    const service = useLoaderData()
    console.log(service)

    const {title, price , service_id, img} = service

    const handleBookService = (e) => {

        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const amount = form.amount.value

        console.log(name, date, email, amount)

        const order = {
            customerName : name,
            date,
            email,
            service_id,
            price,
            service : title,
            img
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })




    }






    return (

        

        <div className="card shrink-0 w-full  bg-base-100 my-10">
            <form onSubmit={handleBookService} className="">

                <h1 className="text-5xl font-bold text-center my-10">Book Service : {title} </h1>



                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={`$ ${price}`} name="amount" placeholder="Due Amount" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">

                    <input type="submit" value="Confirm Order" className="btn btn-primary" />
                   
                </div>
            </form>
        </div>

    );
};

export default BookService;