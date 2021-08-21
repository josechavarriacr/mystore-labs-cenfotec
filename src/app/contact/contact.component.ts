import { Component, OnInit } from '@angular/core';

interface Info {
  name: string;
  lastname: string;
  phone: number,
  email: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  appName = "My first app in Angular 8";
  userName:string = "Rafa";
  dateTime: string | undefined;
  contact: Info = {
    name: 'Jose',
    lastname: 'Chavarria',
    phone: 12345,
    email: 'jade@example.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

  showData($event: any){
    console.log("button is clicked!");
    if($event) {
      this.dateTime = new Date().toString().split(' ')[4]
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
