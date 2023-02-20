function getCookie(): null | LoginInfoType {
  const cookies = document.cookie.split(";");
  let user: LoginInfoType;
  let cookie: string;

  cookies.forEach((cookiestr: string) => {
    if (cookiestr.startsWith("logininfo")) {
      cookie = cookiestr.replace(`logininfo=`, "");
    }
  });

  if (cookie!) {
    user = JSON.parse(cookie);
    return user;
  } else {
    return null;
  }
}

function setCookie(cookie: LoginInfoType) {
  let _cookie = JSON.stringify(cookie);
  let name = "logininfo";
  document.cookie = `${name}=${_cookie}`;
}

function isUserValid(user: LoginInfoType | null) {
  if (!user) return { isLoginValid: false, timeRemaining: 0 };
  const dateString = user.validatedAt;
  const currenTime = new Date().getTime();
  const loggedInTime = new Date(dateString).getTime();
  const timePast = currenTime - loggedInTime;
  const isLoginValid = timePast < 60 * 2 * 1000;

  //   if user is still valid.... function now return time remaining before invalidation

  // else function returns 0
  let timeRemaining = 0;
  if (isLoginValid) {
    timeRemaining = 60 * 2 * 1000 - timePast;
  }

  return { isLoginValid, timeRemaining };
}

export { getCookie, setCookie, isUserValid };
