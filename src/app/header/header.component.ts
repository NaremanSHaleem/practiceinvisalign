import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // console.log('hii');
    if (window.pageYOffset > 50) {
      document.getElementsByClassName('header')[0].classList.add('fixed-header');
      document.getElementsByClassName('top-address')[0].classList.add('hide');
      document.getElementsByClassName('top-address')[1].classList.add('hide');
      document.getElementsByClassName('fl-node-59f05afba9006')[0].classList.add('smaller');
      document.getElementsByClassName('headerContainer')[0].classList.add('no-padding');
      // console.log('>100 ==== ');   
    } 
      else {
      document.getElementsByClassName('header')[0].classList.remove('fixed-header');
      document.getElementsByClassName('top-address')[0].classList.remove('hide');
      document.getElementsByClassName('top-address')[1].classList.remove('hide');
      document.getElementsByClassName('fl-node-59f05afba9006')[0].classList.remove('smaller');
        // console.log('else');   
      }
  } 

}
