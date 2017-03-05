import { ship } from './ship';

export class battleship extends ship {

    _maxSizeOfShip: number;

    constructor(points: String[]) {
        super(points);
        this._health = 4;
        this._maxSizeOfShip = 4;
    }
}