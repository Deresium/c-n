export default interface ILoginRequester{
    login(token: string): Promise<boolean>;
}