import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { IoIosEyeOff } from "react-icons/io";

export default function LoginRegisterPage(){
    return(
        <>
         <section className="bg-primary-200 min-h-screen px-6 flex flex-col md:flex-row md:justify-center items-center gap-8 pt-4">
                        <div className="flex flex-col justify-start">
                            <h3 className="text-lg font-semibold md:text-4xl pb-8">Logo</h3>
                            <h1 className="text-2xl font-semibold md:text-5xl">Sign up to Inglish Cards</h1>
                            <h3 className="text-xl  font-medium md:text-2xl pb-6">From developers for developers</h3>
                            <p className="text-sm md:text-2xl">if you don't hace an account register</p>
                            <p className="text-sm md:text-2xl">You can <span className=" text-sm md:text-2xl text-secondary-400 font-semibold">Register here !</span></p>
                        </div>
        
                        <form action="">
                            <div className="flex flex-col gap-8">
                                <div className="">
                                    <label htmlFor="">
                                    <input className="bg-primary-100 placeholder:text-secondary-300  focus:border-sky-500
                                    py-5 px-6 w-full rounded-xl" htmlFor="" placeholder="Enter email"/>
                                    </label>
                                </div>
                                 <div className="">
                                    <label htmlFor="">
                                    <input className="bg-primary-100 py-5 px-6 w-full rounded-xl placeholder:text-secondary-300 " htmlFor="" placeholder="Create User name"/>
                                    </label>
                                </div>
                                 <div className="relative">
                                    <label htmlFor="">
                                    <input className="bg-primary-100 py-5 pl-6 pr-20 w-full rounded-xl placeholder:text-secondary-300 " htmlFor="" placeholder="Password"/>
                                    </label>
                                    <IoIosEyeOff className="absolute right-5 top-4 size-10 text-secondary-300" />
                                </div>
                                 <div className="relative">
                                    <label htmlFor="">
                                    <input className="bg-primary-100 py-5 pl-6 pr-20 w-full rounded-xl placeholder:text-secondary-300 " htmlFor="" placeholder="Confirm Password"/>
                                    </label>
                                    <IoIosEyeOff className="absolute right-5 top-4 size-10 text-secondary-300" />
                                </div>
                                <div>
                                    <button className="bg-secondary-400 text-neutral-50 py-5 px-6 w-full rounded-xl
                                                        shadow-lg">Register</button>
                                </div>
                            </div>
                            
                            <p className="text-sm text-center text-secondary-300">or continue with</p>
            
                            <div className="flex justify-center gap-4">
                                <FcGoogle className="size-10 text-neutral-900" />
                                <RxGithubLogo className="size-10" />
                            </div>
                        </form>
                    </section>
        </>
    )
}