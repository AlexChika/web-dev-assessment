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

type UserType = {
  email: string;
  password: string;
  validateAt: string;
};

type ContextType = {
  user: UserType | null;
  setUser: Dispatch<React.SetStateAction<null | UserType>>;
};
