import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CanDeactivate } from "@angular/router";

import { PersonComponent } from "../person/person.component";


@Injectable()

export class PersonCanDeactivateGuard implements CanDeactivate<PersonComponent>{
    constructor(public dialog:MatDialog){}

    canDeactivate(component: PersonComponent):boolean {
        if(component.personForm.dirty){

            return confirm("Are you sure you want to discard all changes?");
        }
        else
            return true;
    }

}