export type AuthType = {
  user?: null | User;
  token: string | null;
  isAuthenticated: boolean;
};
