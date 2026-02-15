import {GoogleLoginResponse} from "../types/GoogleAuthResponse";

export const loginWithGoogle = async (
    idToken: string
): Promise<GoogleLoginResponse> => {
    const response = await fetch("http://localhost:9090/api/auth/google", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: idToken }),
    });

    if (!response.ok) {
        throw new Error("Google login failed");
    }

    return response.json();
};
