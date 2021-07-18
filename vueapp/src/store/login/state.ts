import Role from "@/business/enums/role";

export default class State{
	private loggedIn: boolean;
	private role: Role | null;
	
	constructor() {
		this.loggedIn = false;
		this.role = null;
	}
	
	public getUserRole(): Role|null{
		return this.role;
	}

    public getOnlyAdmin(): boolean{
		return this.role === Role.ADMIN;
	}

    public getOnlyAuthenticated(): boolean{
		return this.role !== null;
	}

    public getIsLoggedIn(): boolean{
		return this.loggedIn;
	}

    public loginUser(role: Role): void{
		this.role = role;
		this.loggedIn = true;
	}

    public logoutUser(): void{
		this.role = null;
		this.loggedIn = false;
	}
}