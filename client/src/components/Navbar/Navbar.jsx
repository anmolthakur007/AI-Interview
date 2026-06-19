import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-5 shadow-md bg-white">
            <h1 className="text-2xl font-bold text-blue-600">
                HireGPT
            </h1>

            <div className="flex gap-8">
                <Link className="hover:text-blue-600" to="/">
                    Home
                </Link>

                <Link className="hover:text-blue-600" to="/login">
                    Login
                </Link>

                <Link className="hover:text-blue-600" to="/signup">
                    Signup
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;