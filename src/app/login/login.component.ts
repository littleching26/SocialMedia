import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl('');
  form:any;

  constructor(private fb: FormBuilder,
    formControl: FormControl) { 
    // this.form = this.fb.group({
    //   account: '',
    //   password: ''
    // });
  }

  ngOnInit(): void {
  }

}
