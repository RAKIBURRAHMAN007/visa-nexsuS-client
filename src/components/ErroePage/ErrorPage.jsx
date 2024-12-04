import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                    <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
                    <Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Go to Homepage
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;