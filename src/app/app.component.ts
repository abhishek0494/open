import { Component,AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.navbar.nativeElement.className='toolbar-hide'
  }
  title = 'open-financial';
  @ViewChild('navbar', { static: true }) navbar: ElementRef;
  max=300000
  min=100000
  value=0
  expensemax=100000
  expensemin=0
  expensevalue=0
  checked=false
  @HostListener('window:scroll',['$event']) 
    scrollHandler(e:Event) {
      console.log("Scroll Event", window.pageYOffset,this.navbar );
      if(window.pageYOffset>80){
        this.navbar.nativeElement.className='toolbar-sticky'
      }else{
        this.navbar.nativeElement.className='toolbar-hide'
      }
    }
}
