import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators, Form} from '@angular/forms'
import { Kyc } from "./Kyc";
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }



signupForm : FormGroup;
constructor(private formBuilder:FormBuilder,private formservice:FormService){
  this.signupForm=formBuilder.group(
    {
      ufname:new FormControl(),
      ulname:new FormControl(),
      uemail: new FormControl(),
      upwd: new FormControl(),
      uconfirmpwd:new FormControl(),
    }
  );
}
form: Kyc=new Kyc("","","","","");
message:any;

public registerNow(){
  let resp=this.formservice.doRegistration(this.form);
  resp.subscribe((data)=>this.message=data);
}



ngOnInit():void{}
  postData(){
console.log(this.signupForm);
console.log(this.signupForm.value.ufname);


  }
}
