import { Coordinate } from './coordinate';
import { Ship } from './ship';

export class Board {

    _totalPoints: Number;
    _takenPoints: Coordinate[];
    _pointsRemaining: Number;
    _player1PointsRemaining: Number;
    _player2PointsRemaining: Number;

    _player1SelectedPoints: Coordinate[];
    _player2SelectedPoints: Coordinate[];
    _player1ShipPoints: Coordinate[];
    _player2ShipPoints: Coordinate[];
    
    constructor(player1ShipPoints: Coordinate[], player2ShipPoints: Coordinate[]) {
        this._totalPoints = 100;
        this._pointsRemaining = 100;
        this._player1ShipPoints = player1ShipPoints;
        this._player2ShipPoints = player2ShipPoints;
    }
    
    //getters and setters


    isPointWithinBounds() {

    }

    calculateRemainingPoints() {

    }

}