export const appUrl = 'https://acteauto.azurewebsites.net';
//export const appUrl ='http://localhost:4200';

export const authConfig = {
    tenant: '95898435-bd2b-4173-991f-2f694f01ffa1',
    clientId: '02dbf031-951d-4b6a-9f69-641204b6e31a',
    redirectUri: appUrl + '/login-callback',
    navigateToLoginRequestUrl: false,
    cacheLocation: 'localStorage',
    postLogoutRedirectUri: appUrl,
};
