import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Coordinate } from '../../datamodel/coordinate';
import { Carrier } from '../../datamodel/carrier';
import { ValidationService } from '../../services/validation.service';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: './game.component.html',
    providers: [ValidationService]
})
export class GameComponent {

    userForm: FormGroup;

    constructor(private validationService: ValidationService, private formBuilder: FormBuilder) {
        //initial form setup
        this.userForm = this.formBuilder.group({
            'carrierPoint1': ['', [Validators.required, validationService.checkValidCoordinate]],
            'carrierPoint2': ['', [Validators.required, validationService.checkValidCoordinate]],
            'carrierPoint3': ['', [Validators.required, validationService.checkValidCoordinate]],
            'carrierPoint4': ['', [Validators.required, validationService.checkValidCoordinate]],
            'carrierPoint5': ['', [Validators.required, validationService.checkValidCoordinate]],
            'battleshipPoint1': ['', [Validators.required, validationService.checkValidCoordinate]],
            'battleshipPoint2': ['', [Validators.required, validationService.checkValidCoordinate]],
            'battleshipPoint3': ['', [Validators.required, validationService.checkValidCoordinate]],
            'battleshipPoint4': ['', [Validators.required, validationService.checkValidCoordinate]],
            'cruiserPoint1': ['', [Validators.required, validationService.checkValidCoordinate]],
            'cruiserPoint2': ['', [Validators.required, validationService.checkValidCoordinate]],
            'cruiserPoint3': ['', [Validators.required, validationService.checkValidCoordinate]],
            'subPoint1': ['', [Validators.required, validationService.checkValidCoordinate]],
            'subPoint2': ['', [Validators.required, validationService.checkValidCoordinate]],
            'subPoint3': ['', [Validators.required, validationService.checkValidCoordinate]],
            'destroyerPoint1': ['', [Validators.required, validationService.checkValidCoordinate]],
            'destroyerPoint2': ['', [Validators.required, validationService.checkValidCoordinate]]
        });
    }

    startGame() {
        let carrierArray: Coordinate[] = [];
        let battleshipArray: Coordinate[] = [];
        let cruiserArray: Coordinate[] = [];
        let submarineArray: Coordinate[] = [];
        let destroyerArray: Coordinate[] = [];
        let allPointsArray: Coordinate[] = [];

        let formInvalid: boolean = false;

        //console.log('userForm:', Object.keys(this.userForm.value), carrierArray);
        //create the board with user and computer ships in place
        for (let o in this.userForm.value) { 
            let id = o[0] + o[1];
            switch (id) {
                case 'ca':
                    carrierArray.push(this.validationService.convertStringToCoordinates(this.userForm.value[o]));
                    console.log('ca:', carrierArray);
                    break;
                case 'ba':
                    battleshipArray.push(this.validationService.convertStringToCoordinates(this.userForm.value[o]));
                    break;
                case 'cr':
                    cruiserArray.push(this.validationService.convertStringToCoordinates(this.userForm.value[o]));
                    break;
                case 'su':
                    submarineArray.push(this.validationService.convertStringToCoordinates(this.userForm.value[o]));
                    break;
                case 'de':
                    destroyerArray.push(this.validationService.convertStringToCoordinates(this.userForm.value[o]));
                    break;
                default:
            }
        }

        //let carrier: Carrier = new Carrier();

        this.setupPlayerGamePositions();
        this.generateComputerPositions();
    }

    clearForm() {
        console.log('clearForm:', this.userForm.value);
    }

    generateComputerPositions() {

    }

    setupPlayerGamePositions() {

    }

}