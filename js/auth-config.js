/**
 * Authentication Configuration
 * Password protection DISABLED - no ACCESS_PASSWORD secret configured
 */

const AUTH_CONFIG = {
    passwordHash: 'DISABLED_NO_PASSWORD_SET_IN_SECRETS',
    sessionDuration: 7 * 24 * 60 * 60 * 1000,
    storageKey: 'arxiv_auth_token',
    storageExpireKey: 'arxiv_auth_expire'
};
