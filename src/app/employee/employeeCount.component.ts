import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
        selector: 'employee-count',
        templateUrl:`../employee/employeeCount.component.html` ,


})
export class EmployeCountComponent {
        
        selectedRadioButtonValue: string = 'All';

        @Output()
        countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


        @Input()
        All: number ;

        @Input()
        Male: number ;

        @Input()
        Female: number ;

        onRadioButtonSeletionChange(){
                this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
                console.log(this.selectedRadioButtonValue);
        }


}