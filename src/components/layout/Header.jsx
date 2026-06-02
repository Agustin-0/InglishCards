import Navbar from "./NavBar";

export default function Header(){
    return(
        <>
            <header className="bg-primary-200 flex justify-end pt-2 pr-2">
                <Navbar />
            </header>
        </>
    )
}