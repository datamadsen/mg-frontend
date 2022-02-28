export const SecurityTokenService = {
    key: 'mg-sec-token',

    setSecurityToken(token) {
    },

    getSecurityToken() {
        return window.localStorage.getItem(SecurityTokenService.key);
    },

    clearSecurityToken() {
        return window.localStorage.removeItem(SecurityTokenService.key);
    },

    isLoggedIn() {
        return SecurityTokenService.getSecurityToken(); // should check if token is valid still.
    }
}