import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-unauthorized-layout',
  templateUrl: './unauthorized-layout.component.html',
  styleUrls: ['./unauthorized-layout.component.scss']
})
export class UnauthorizedLayoutComponent implements OnInit {

  @ViewChild('video', { static: true }) videoTagRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.videoTagRef.nativeElement.muted = true;
    this.videoTagRef.nativeElement.play();
    console.log(window.location.origin);
  }

}
