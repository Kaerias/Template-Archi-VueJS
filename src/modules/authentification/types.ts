export interface User extends RegisterRequest {
    id: number;
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    username: string;
    password: string;
}

export interface AuthResponse {
    user: any;
    token: string;
}
