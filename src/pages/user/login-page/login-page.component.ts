import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent implements OnInit {

  @Input() imTitle:string;
  
  user:any={
    username:"angular",
    password:""
  };

  login(){
    this.user.username = "Ryane";
    this.user.password = "666";
    this.user.state = true;
  };

  constructor(meta: Meta, title: Title) {
    title.setTitle('Login Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
