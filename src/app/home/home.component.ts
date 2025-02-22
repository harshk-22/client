import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

ngOnInit(): void {
  this.getUsers()
}
registerMode=false;
http=inject(HttpClient)
users: any;
registerToggel()
{
  this.registerMode=!this.registerMode
}
getUsers()
  {
    this.http.get('http://localhost:5000/api/user').subscribe({
      next:response=>this.users=response,
      error:()=>{},
      complete:()=>console.log('Request has completed')
    })
  }

  cancelRegistermode(event: boolean) {
    this.registerMode=event
    }
}
