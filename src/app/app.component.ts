import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: string = '';
  numFibonacci: any;
  data: any;

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    
    this.myForm = fb.group({
      'number': ['']
    });

  }

  ngOnInit(): void {
    this.data = this.myForm.controls['number'];
    this.data.valueChanges.subscribe(
      (value: string) => {
        console.log('value ', value); 
        this.numFibonacci = "";
      }
    )
  }

  onTerminal() {
    if(this.number != null){
      this.numFibonacci = this.fibonacci(this.convertStringToNumber(this.number));
    }
  }

  convertStringToNumber(text: string) : number {
    return +text;
  }

  fibonacci(number: number): number {
    let num: number  = +number;
    if(num == 0)
      return 0;
    else if(num == 1)
      return 1;
    else
      return this.fibonacci(num - 1) + this.fibonacci(num -2);

  }

}
