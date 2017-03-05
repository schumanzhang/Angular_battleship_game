import { ship } from './ship';

export class carrier extends ship {

    _maxSizeOfShip: number;

    constructor(points: String[]) {
        super(points);
        this._health = 5;
        this._maxSizeOfShip = 5;
    }
}