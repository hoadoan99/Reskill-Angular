import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  avatarUrl: string = "assets/images/avatar1.png";
   profileForm = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(4)]],
    dob: ['',Validators.required],
    phone: ['',Validators.required],
    bio: ['',[Validators.required, Validators.min(10)]],
    addresses: this.fb.array([
    this.fb.control('')
  ])
  });

  constructor(private fb: FormBuilder) { }
  get addresses() {
    return this.profileForm.get('addresses') as FormArray;
  }
  addAddresses() {
  this.addresses.push(this.fb.control(''));
}
  ngOnInit(): void {
  }
  onFileChange(event:any):void{
    const files = event.target.files;
    // console.log(files);
    let reader = new FileReader();
    if (files && files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () =>{
        this.avatarUrl = reader.result!.toString();
      }
    }

  }
  onUpdateProfile(){
    console.log(this.profileForm.value);

  }
}
