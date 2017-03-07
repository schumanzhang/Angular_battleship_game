import { Ship } from './ship';
import { Coordinate } from './coordinate';

export class Carrier extends Ship {

    private _maxSizeOfShip: number;

    constructor(points: Coordinate[]) {
        super(points);
        this._health = 5;
        this._maxSizeOfShip = 5;
    }
}