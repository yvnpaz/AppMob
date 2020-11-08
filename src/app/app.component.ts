import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: string = '';
  numFibonacci: any;
  data: any;
  flag: boolean;

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    
    this.myForm = fb.group({
      number: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.data = this.myForm.controls['number'];
    this.data.valueChanges.subscribe(
      (value: string) => {
        console.log('value ', value); 
        this.number = value;
        this.numFibonacci = "";
      }
    )
  }

  onTerminal() {
    if(this.number != null){
      let num = this.convertStringToNumber(this.number)
      if(num <= 33){
        this.numFibonacci = this.fibonacci(num);
        this.flag = false;
      }else{
        this.numFibonacci = "Not possible";
        this.flag = true;
      }
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
