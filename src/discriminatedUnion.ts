export class Programmer {
    constructor(public name: string, public favoriteLanguage: string) { }
    public GetName() : String {
        return this.name;
    }
    public GetFavoriteLanguage() : String {
        return this.favoriteLanguage;
    }
}

export class LookupFailed {
    readonly kind : string = "lookupFailed";
    constructor(public reason: string) { }
}

export type ProgrammerLookupResult = Programmer | LookupFailed;

export class ProgrammerRepository{
    public GetByName(name : string) : ProgrammerLookupResult {
        return new LookupFailed("Entity not found");
    }
}



