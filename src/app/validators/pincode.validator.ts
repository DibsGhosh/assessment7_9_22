import { AbstractControl } from "@angular/forms";


export class PincodeValidator{
    static checkPincode(control:AbstractControl){
        
        const pin:number = Number(control.value);
        if(isNaN(pin)){            
            return {'invalidPincode' : true}
        }
        else
            return null;
    }
}