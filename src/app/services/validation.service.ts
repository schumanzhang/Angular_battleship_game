import { Injectable } from '@angular/core';
import { Coordinate } from '../datamodel/coordinate';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Board } from '../datamodel/board';

@Injectable()
export class ValidationService {

    constructor() {
    }

    convertStringToCoordinates(text: string): Coordinate {
        let splitArray = text.split('');
        let coordinate: Coordinate = {
            xPosition: splitArray[0],
            yPosition: parseInt(splitArray[1])
        }
        return coordinate;
    }

    checkValidCoordinate(fieldControl: FormControl): any {
        let board = new Board([], []);
        let point: Coordinate = board.convertStringToCoordinates(fieldControl.value);
        let validLetters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j'];
        if (validLetters.indexOf(point.xPosition) !== -1 && point.yPosition > 0 && point.yPosition < 11) {
            return null;
        }
        return { checkValidCoordinate: { valid: false} };
    }

    checkValidSequences(fieldControl: FormControl): boolean {
        /*
        let board = new Board([], []);
        let pointArray: Coordinate[] = [];
        let validLetters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j'];

        let point: Coordinate = board.convertStringToCoordinates(fieldControl.value);
        this._pointArray.push(point);
        console.log('pointArray:', pointArray);
        //order not important, so validate once full
        if (pointArray.length < 5) {
            return null;
        } else {
            for (let i = 0; i < pointArray.length; i++) {
            }
        }
        */
        return null;
    }

    checkClashingPoints(formData: Object): boolean {

        return null;
    }



}