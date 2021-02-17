import { Component } from '@angular/core';
import{FormGroup,FormControl,Validator} from '@angular/forms';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mazaproject';
  showmsg= true;
  colorName='red';
  readMe(){
    console.log('you have a click');
  }
}
