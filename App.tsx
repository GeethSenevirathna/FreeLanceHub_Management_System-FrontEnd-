import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import type { JSX } from "react";
import { AuthContext } from "./context/AuthContext";
import SignIn from "./pages/SignIn";


// Temporary Dashboard Component
const Dashboard = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

// Protected Route Component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { token } = useContext(AuthContext); //checks if the user is logged in

    if (!token) {
        return <Navigate to="/login" />;
    }
    // the protection offered by ProtectRoute is anyone could type localhost:5173/dashboard and log into the dashbard,
    // it is blocked by the ProtectRoute

    return children;
};



function App() {
    const { token } = useContext(AuthContext); // also reads to control the app behaviour

    return (
        <BrowserRouter>
            <Routes>
                {/* SignIn Route */}
                <Route
                    path="/login"
                    element={
                        token ? <Navigate to="/dashboard" /> : <SignIn />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        token ? <Navigate to="/dashboard" /> : <SignUp />
                    }
                />

                {/* Protected Dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* Default Route */}
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
