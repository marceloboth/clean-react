import { AccountModel } from "@/domain/models/account-model";

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentications {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
