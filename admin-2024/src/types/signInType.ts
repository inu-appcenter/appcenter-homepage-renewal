export type SignInEntity = {
  id?: string;
  password?: string;
};

/**
 * POST /sign/sign-in
 */
export type SignInResDto = {
  token: string;
};
