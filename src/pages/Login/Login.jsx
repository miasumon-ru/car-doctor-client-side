
import loginImg from '../../assets/images/login/login.svg'
import CustomAuth from '../../custom/CustomAuth';

const Login = () => {

    const {login} = CustomAuth()


    const handleLogin = (e) => {

        e.preventDefault()

        const form = e.target

        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        login(email, password)
        .then(result => 
            console.log(result.user)
        )
        .catch(error => {
            console.log(error.message)
        })
    }



    
    return (

        <div className="hero min-h-screen bg-base-200 my-20 w-full">
            <div className="hero-content flex-col lg:flex-row w-full">

                <div className="text-center lg:text-left w-1/2">

                    <img src={loginImg} alt="" />

                </div>

                <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">

                    <h1 className="text-5xl font-bold text-center mt-5">Login</h1>

                    <form onSubmit={handleLogin} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div>
                            <p className='font-medium my-4 text-center'>Or Login with</p>
                            <button className='btn w-full font-bold'> Google </button>
                        </div>
                    </form>

                    
                </div>

            </div>
        </div>
    );
};

export default Login;