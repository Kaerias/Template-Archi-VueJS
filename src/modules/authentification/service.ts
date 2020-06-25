import fetch from "@/services/FetchV2Service";
import { AuthRequest, AuthResponse, RegisterRequest } from './types';
import router from '@/router';

export const authenticate = (request: AuthRequest) => new Promise<AuthResponse>((resolve, reject) => {
    fetch.authenticate(request).then(data => {
        resolve(({
            user: data.user,
            token: data.token,
        }) as AuthResponse);
    }).catch(e => {
        let message = '';
        if (e.response && e.response.status === 404) {
            if (e.response.data.message === "username and password doesn't match") {
                message = "Username and password doesn't match";
            }
        } else if (e.reponse === undefined) {
            message = "API no connection"
        }
        if (message) {
            reject(message);
        }
    });
});

export const register = (request: RegisterRequest) => new Promise<AuthResponse>((resolve, reject) => {
    fetch.post("register", request).then(() => resolve()).catch(e => {
        let message = '';
        if (e.response && e.response.status === 500) {
            message = 'user already use';
        } else if (e.reponse === undefined) {
            message = "API no connection"
        }
        if (message) {
            reject(message);
        }
    });
});
