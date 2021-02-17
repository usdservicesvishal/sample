import { ReciptionModule } from './../reciption.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reciption } from 'src/app/model/reciption.model';
import { ReciptionService } from '../reciption.service';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-reciption',
  templateUrl: './view-all-reciption.component.html',
  styleUrls: ['./view-all-reciption.component.scss']
})
export class ViewAllReciptionComponent implements OnInit {

  reciptions:any;



  constructor(private service:ReciptionService) { }

public DeleteUser(userId:number){
 let resp= this.service.DeleteUser(userId);
 resp.subscribe((data)=>this.reciptions=data);

}

  ngOnInit() {

 let resp= this.service.getUsers(this.reciptions);
 resp.subscribe((data)=>this.reciptions=data);


  }

// this.reloadData();
// }

// reloadData(){
//   this.reciptions=this.reciptionService.getallreciptionlist();
// }

// deleteReciption(id: number) {
//   this.reciptionService.deleteEmployee(id)
//     .subscribe(
//       data => {
//         console.log(data);
//         this.reloadData();
//       },
//       error => console.log(error));
// }

// employeeDetails(id: number){
//   this.router.navigate(['details', id]);
// }
}
