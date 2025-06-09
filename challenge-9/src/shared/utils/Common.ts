export const getGoogleCallbackUrl = () => {
  let url = import.meta.env.VITE_GOOGLE_REDIRECT;
  if (!url) {
    const { hostname, protocol } = window.location;
    url = `${protocol}//${hostname}`;
  }
  return `${url}/auth/login/`;
};

export const getGoogleLoginUrl = () => {
  return `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${getGoogleCallbackUrl()}&prompt=consent&response_type=code&client_id=522014721311-p737d5d9i9m3t9tc9huvt9o0pamh4fje.apps.googleusercontent.com&scope=openid email profile`;
};
