export interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    accepted: boolean;
}

export interface SignupErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    accepted?: string;
    submit?: string;
}
