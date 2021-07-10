import jwtDecode from 'jwt-decode';

export const checkCookieForActiveUser = () => {
    if(localStorage.getItem('userToken')){
        const decodedToken = jwtDecode(localStorage.getItem('userToken'));
    
        if(decodedToken.exp * 1000 < Date.now()){
            localStorage.removeItem('userToken');
        } else {
            return decodedToken;
        }
    }
    return false;
}