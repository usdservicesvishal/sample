import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-reciption',
  templateUrl: './update-reciption.component.html',
  styleUrls: ['./update-reciption.component.scss']
})
export class UpdateReciptionComponent implements OnInit {
//   id: number;
// header:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   this.id=+this.route.snapshot.paramMap,get('id');
  //   this.header=this.id===0?
  // }

  }
}
