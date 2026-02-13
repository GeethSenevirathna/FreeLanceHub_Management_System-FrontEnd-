export const signupUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({ message: "Signup failed" }));
        throw new Error(body.message);
    }

    return res.json();
};

export const signupWithGoogle = async (idToken: string) => {
    const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        credentials: "include",
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({ message: "Google signup failed" }));
        throw new Error(body.message);
    }

    return res.json();
};
