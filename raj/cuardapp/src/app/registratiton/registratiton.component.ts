import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserRegistratitonService } from '../user-registratiton.service';

@Component({
  selector: 'app-registratiton',
  templateUrl: './registratiton.component.html',
  styleUrls: ['./registratiton.component.css']
})
export class RegistratitonComponent implements OnInit {


  user=new User("","","",0,0,"","","","","","",0,0,"","");
  message:any;
  constructor(private service:UserRegistratitonService) { }

  ngOnInit(): void {
  }
public registerNow(addNewForm:NgForm){
  console.log("added ...",addNewForm)
  console.log("modelclass...",this.user)
 let resp=this.service.doRegistration(this.user);
 resp.subscribe((data)=>this.message=data);



}
}
