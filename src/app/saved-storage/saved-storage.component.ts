import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saved-storage',
  templateUrl: './saved-storage.component.html',
  styleUrls: ['./saved-storage.component.css']
})
export class SavedStorageComponent implements OnInit {

  formToken: FormGroup;
  regex = '^[a-zA-Z]*';

  constructor() {
    this.formToken = this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    return this.formToken = new FormGroup({
      token: new FormControl('', [Validators.required, Validators.maxLength(50) , Validators.pattern(this.regex)])
    })
  }

  onSubmit() {
    if(this.formToken.valid){
      sessionStorage.setItem('TokenGuard', this.formToken.value.token)
    }
    console.log('Formulario invalido');
  }

}
