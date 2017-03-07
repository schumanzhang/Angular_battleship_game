import { Ship } from './ship';
import { Coordinate } from './coordinate';

export class Battleship extends Ship {

    private _maxSizeOfShip: number;

    constructor(points: Coordinate[]) {
        super(points);
        this._health = 4;
        this._maxSizeOfShip = 4;
    }
}