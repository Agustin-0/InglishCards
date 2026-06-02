import { RxGithubLogo } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage(){
    return(
        <>
            <section className="bg-primary-200 h-screen px-6 flex flex-col justify-between pt-4">
                <div>
                    <h3 className="text-lg font-semibold pb-8">Logo</h3>
                    <h1 className="text-2xl font-semibold">Sign in to Inglish Cards</h1>
                    <h3 className="text-xl  font-medium pb-6">From developers for developers</h3>
                    <p className="text-sm">if you don't hace an account register</p>
                    <p className="text-sm">You can <span className=" text-sm text-secondary-300 font-semibold">Register here !</span></p>
                </div>

                <form action="">
                    <div className="flex flex-col gap-8">
                        <div className="">
                            <label htmlFor="">
                            <input className="bg-primary-100 py-5 px-6 w-full rounded-xl placeholder:text-secondary-300 " htmlFor="" placeholder="Enter email or user name"/>
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="">
                                <input className="bg-primary-100 py-5 px-6 w-full rounded-xl placeholder:text-secondary-300 " htmlFor="" placeholder="Password"/>
                            </label>
                            <p className="text-sm pt-4 text-right text-secondary-300">forgor password?</p>
                        </div>
                        <div>
                            <button className="bg-secondary-400 text-neutral-50 py-5 px-6 w-full rounded-xl
                                                shadow-lg shadow-secondary-500">Login</button>
                        </div>
                    </div>
                    
                </form>
                <p className="text-sm text-center text-secondary-300">or continue with</p>

                <div className="flex justify-center gap-4">
                    <FcGoogle className="size-10 text-neutral-900" />
                    <RxGithubLogo className="size-10" />
                </div>
            </section>            
        </>
    )
}