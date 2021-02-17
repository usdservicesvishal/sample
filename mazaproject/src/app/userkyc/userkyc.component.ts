import { UserkycService } from './../userkyc.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Userkyc } from '../userkyc';
@Component({
  selector: 'app-userkyc',
  templateUrl: './userkyc.component.html',
  styleUrls: ['./userkyc.component.scss']
})
export class UserkycComponent implements OnInit {
  // userk: Userkyc=new Userkyc("","",0,0,0,"","");
  message:any;


  userkycForm:FormGroup;


  constructor(private FormBuilder:FormBuilder,private service:UserkycService) {
    this.userkycForm=FormBuilder.group(
      {
        username:['',Validators.required],
        user_address:['',Validators.required],
        mob_no:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        pancard_no:['',Validators.required],
        aadhar_no:['',[Validators.required,Validators.pattern("^[0-9]{12}$")]],

        user_emailid:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
      }
    );
   }
// public registerNow(){
//   let resp=this.service.doRegistration(this.userk);
//   resp.subscribe((data)=>this.message=data);
// }


  ngOnInit(): void {
  }
  postData(){
    console.log(this.userkycForm);
    console.log('enter the name:' + this.userkycForm.value.username);
    console.log('enter the Adress:'+this.userkycForm.value.user_address);
    console.log('enter the Mobile No:'+this.userkycForm.value.mob_no);
    console.log('enter the Pan Card No:'+this.userkycForm.value.pancard_no);
    console.log('enter the Aadhar Card No:'+this.userkycForm.value.aadhar_no);
    console.log('enter the User Email Id:'+this.userkycForm.value.user_emailid);
    console.log('enter the Password:'+this.userkycForm.value.password);
  }
}
