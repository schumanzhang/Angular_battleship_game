import { Ship } from './ship';
import { Coordinate } from './coordinate';

export class Destroyer extends Ship {

    private _maxSizeOfShip: number;

    constructor(points: Coordinate[]) {
        super(points);
        this._health = 2;
        this._maxSizeOfShip = 2;
    }
}