import { Component } from '@angular/core';

export interface Name {
    value: string;
    viewValue: string;
  }
@Component({
    selector: 'form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
  export class FormComponent {

    names: Name[] = [
    {value: 'm-0', viewValue: 'Miss'},
    {value: 'm-1', viewValue: 'Mrs'},
    {value: 'm-2', viewValue: 'Mr'},
  ];
  }
