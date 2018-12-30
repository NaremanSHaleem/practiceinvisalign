import { Component, OnInit } from '@angular/core';
import { SendEmailService } from '../../assets/services/send-email.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private sendemailservice: SendEmailService) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public submit(e, name, mail, phone) {
    // console.log(mail);  
    if (mail == "") {
      console.log('wrong email');
      document.getElementsByClassName('warning')[0].classList.add('show');
    }
    else {
      this.sendemailservice.send(name, mail, phone);
      // console.log(document.getElementsByName('openpopup')[0].classList);
      // document.getElementsByName('openpopup')[0].click();
      document.getElementsByClassName('warning')[0].classList.remove('show');
      document.getElementsByClassName('overlay')[0].classList.remove('hide');
      document.getElementsByClassName('overlay')[0].classList.add('show');
      return false;
    }
    e.preventDefault();
  }
  public close(popupDiv) {
    document.getElementsByClassName('overlay')[0].classList.add('hide');
  }

  ngOnInit() {
  }

}
