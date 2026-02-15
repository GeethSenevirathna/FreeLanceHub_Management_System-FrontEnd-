export interface GoogleLoginResponse {
    token: string;
    user: {
        email: string;
        name: string;
    };
}