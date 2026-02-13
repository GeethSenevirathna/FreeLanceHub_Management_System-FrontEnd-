import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import type { JSX } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";


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
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;
};



function App() {
    const { token } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                {/* Login Route */}
                <Route
                    path="/login"
                    element={
                        token ? <Navigate to="/dashboard" /> : <Login />
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
