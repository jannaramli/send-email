import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  displayDetail: any [];
  kadpengenalan ="";
  getEmail:any;
  //tarikhLahir: any;

  ngOnInit(): void {
    //store json in variable an array
     this.displayDetail=JSON.parse(localStorage.getItem('Users') || '{}');
     console.log(this.displayDetail); 

    //variable from router that passed the value
    this.route.params.subscribe(params => {this.kadpengenalan=params['kadpengenalan']});
    console.log(this.kadpengenalan);
    
    //filter by IC from json and param
    this.displayDetail = this.displayDetail.filter((userIc) =>{
         return userIc.kad === this.kadpengenalan})
         console.log(this.displayDetail);

    //getEmail value from html and pass to nodemailer
    // this.getEmail = this.displayDetail[0].email;
    // console.log(this.getEmail);

    this.getEmail=this.displayDetail.map(user => user.email);
    console.log(this.getEmail);

  }//end ngOninit   
  
  //submit email to receiver
  hantarEmail(){
 
  }
}
