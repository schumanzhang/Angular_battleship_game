export class ship {

    points: String[];
    _damaged: String[];
    _sunk: boolean;
    _health: number;

    constructor(points: String[]) {
        this.damaged = [];
        this.sunk = false;
        this.points = points;
    }

    //getters and setters
    get damaged():String[] {
        return this._damaged;
    }

    set damaged(damaged:String[]) {
        this._damaged = damaged;
    }

    get sunk():boolean {
        return this._sunk;
    }

    set sunk(sunk:boolean) {
        this._sunk = sunk;
    }

    get health():number {
        return this._health;
    }

    set health(health:number) {
        this._health = health;
    }

}