import { ship } from './ship';

export class cruiser extends ship {

    _maxSizeOfShip: number;

    constructor(points: String[]) {
        super(points);
        this._health = 3;
        this._maxSizeOfShip = 3;
    }
}