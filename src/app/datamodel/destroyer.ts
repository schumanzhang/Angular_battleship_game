import { ship } from './ship';

export class destroyer extends ship {

    _maxSizeOfShip: number;

    constructor(points: String[]) {
        super(points);
        this._health = 2;
        this._maxSizeOfShip = 2;
    }
}