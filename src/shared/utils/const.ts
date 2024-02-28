import Logo from "/images/logo.svg";

export const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const ACCESS_TOKEN_KEY = "access-token";

export const APP = {
    title: import.meta.env.VITE_APP_TITLE,
    logo: Logo,
    footer: import.meta.env.VITE_APP_FOOTER,
};
