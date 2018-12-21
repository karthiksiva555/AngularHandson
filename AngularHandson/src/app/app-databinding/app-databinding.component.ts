import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  templateUrl: './app-databinding.component.html',
  styleUrls: ['./app-databinding.component.css']
})
export class AppDatabindingComponent implements OnInit {

  userName:string ='';
  ngOnInit() {
  }

  resetUserName(){
    this.userName = '';
  }

}
