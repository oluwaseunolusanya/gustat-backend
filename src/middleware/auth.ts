import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
    audience: 'gustat-frontend-api',
    issuerBaseURL: 'https://dev-uk80dmzvmpqhetln.uk.auth0.com/',
    tokenSigningAlg: 'RS256'
});