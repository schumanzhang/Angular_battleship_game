import { Ship } from './ship';
import { Coordinate } from './coordinate';

export class Cruiser extends Ship {

    private _maxSizeOfShip: number;

    constructor(points: Coordinate[]) {
        super(points);
        this._health = 3;
        this._maxSizeOfShip = 3;
    }
}