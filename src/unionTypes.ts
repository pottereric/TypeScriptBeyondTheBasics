export class Programmer{
    constructor(public name: string, public favoriteLanguage: string) { }
    public GetName() : String {
        return this.name;
    }
    public GetFavoriteLanguage() : String {
        return this.favoriteLanguage;
    }
}

export class Tester{
    constructor(public name : string, public numberReportedIssues : number) { }
    public GetName() : String {
        return this.name;
    }
}

export class ProductOwner{
    constructor(public name : string, public jobTitle : string) { }
}

export class SprintTask{
    private assingedTo : String = "";

    public Assign(person: Programmer | Tester) : void {
        this.assingedTo = person.GetName();
        //let language = person.GetFavoriateLanguage(); // won't compile
    } 
    
    public GetAssigned() : String {
        return this.assingedTo;
    }
}