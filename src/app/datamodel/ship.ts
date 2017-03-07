import { Coordinate } from './coordinate';

export class Ship {

    _points: Coordinate[];
    _damaged: String[];
    _sunk: boolean;
    _health: number;

    constructor(points: Coordinate[]) {
        this._damaged = [];
        this._sunk = false;
        this._points = points;
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
