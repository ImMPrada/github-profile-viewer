
  export const createCookie = (cookieName, cookieValue, expirationDays) => {
    const today = new Date()
    const expirationDate = new Date(today.getTime() + (expirationDays*24*60*60*1000))
    const expires = "expires="+ expirationDate.toUTCString()

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  export const getCookie = (cookieName) => {
    const value = `; ${document.cookie}`;
    const theme = value.split(`; ${cookieName}=`);
 
    if (theme.length === 2) return theme.pop()
    return null
  }
