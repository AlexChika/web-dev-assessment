type IconType = {
  color?: string;
  class?: string;
};

type ThemeType = {
  primaryDark: string;
  secondaryDark: string;
  tertiaryDark: string;
  gray: string;
  primaryGray: string;
  secondaryGray: string;
  tertiaryGray: string;
  mediumDark: string;
  primaryGreen: string;
  primaryRed: string;
  secondaryRed: string;
  tertiaryRed: string;
};

type CompanyType = {
  ceo: string;
  cto: string;
  name: string;
};

type LoginInfoType = {
  email: string;
  password: string;
  validatedAt: string;
};

type StateType = {
  user: LoginInfoType | null;
  isLoginValid: boolean;
};

type ContextType = {
  user: LoginInfoType | null;
  isLoginValid: boolean;
  setUser: SetUser;
};
type SetUser = (user: LoginInfoType) => void;
