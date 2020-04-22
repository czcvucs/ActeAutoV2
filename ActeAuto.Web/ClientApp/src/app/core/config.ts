export const authConfig = {
    tenant: '95898435-bd2b-4173-991f-2f694f01ffa1',
    clientId: '02dbf031-951d-4b6a-9f69-641204b6e31a',
    redirectUri: window.location.origin + '/login-callback',
    endpoints: {
        'api application url': 'api application client id', // this is for feteching the access token  
    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage',
    postLogoutRedirectUri: window.location.origin,
};
