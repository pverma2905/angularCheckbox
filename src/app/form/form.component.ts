import { Component } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  reviewForm: any;
  reviews: any = [];
  languages: any = [
    { id: 1, label: 'angular', selected: false }, ///"angular", "react", "c#", "other"
    { id: 2, label: 'react', selected: false }, ///"angular", "react", "c#", "other"
    { id: 3, label: 'c#', selected: false }, ///"angular", "react", "c#", "other"
    { id: 4, label: 'other', selected: false }, ///"angular", "react", "c#", "other"
  ];
  constructor(private fb: FormBuilder, private router: Router) {
    this.reviewForm = this.fb.group({
      comments: ['', [Validators.required]],
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  get comments(): any {
    return this.reviewForm.get('comments');
  }
  get checkArray(): any {
    return this.reviewForm.get('checkArray') as FormArray;
  }

  onSubmit() {
    this.reviews.push(this.reviewForm.value);
    this.reviewForm.reset();
    this.checkArray.clear();
    console.log(this.reviews);
  }


  // Check or uncheck all checkboxes
  selectUnselectAll() {
    for (let i = 0; i < this.languages.length; i++) {
      this.languages[i]['selected'] = false;
    }

   }
  // Fires on single checkbox state change
  singleChange(event: any, id: any) {
 
    let idx = this.languages.findIndex((item) => item.id == id);
    this.languages[idx]['selected'] = event.target.checked;

    
    for (let i = 0; i < this.languages.length; i++) {
      const check = this.languages[i];
      if (
        check.selected &&
        !this.reviewForm.controls['checkArray'].value.includes(check.label)
      ) {
        this.reviewForm.get('checkArray').push(new FormControl(check.label));
      }
    }
  }
  

  navigateQuestion(value, i) {
    this.router.navigateByUrl('/answers/' + i, { state: value });
  }
}
