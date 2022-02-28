import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import {SecurityTokenService} from "./SecurityTokenService";

export const MgUserApi = {
    async create(email, password) {
		const createUserRequest = {
			email: email,
			password: sha256(password).toString()
		};
        var createUserResponse = await axios.post("https://localhost:5001/users", createUserRequest);

        return createUserResponse.data;
    },

    async login (email, password) {
        const loginRequest = {
			email: email,
			password: sha256(password).toString()
        };

        var loginResponse = await axios.post("https://localhost:5001/logins", loginRequest);

        if (loginResponse.status === 200) {
            SecurityTokenService.setSecurityToken(loginResponse.data);
            return true;
        }
        else {
            return false;
        }

    },

    async myProfile() {
        try {
            return (await axios.get("https://localhost:5001/users/me", {
                headers: {
                    'Authorization': `Bearer ${SecurityTokenService.getSecurityToken()}`
                }
            })).data;
        }
        catch (error) {
            if (error.response.status === 401) {
                SecurityTokenService.clearSecurityToken();
                window.location.href = "/";
            }
            debugger;
            console.log(error);
        }
    }
}