import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
      profileForm:FormGroup
      private firstName:FormControl
      private lastName:FormControl

       constructor(
          private authService:AuthService,
          private router:Router, 
          private formBuilder: FormBuilder) {
       
       }
  
        ngOnInit() {
          this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
          this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
      
          this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
          })
       }

       cancel() {
          this.router.navigate(['events']);
       }

       saveProfile(formValues) {
          this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
       }
 }