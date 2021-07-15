import UserLoginVM from "../models/login/viewmodels/UserLoginVM";

export default interface ILoginRequester{
    login(token: string): Promise<UserLoginVM>;
}