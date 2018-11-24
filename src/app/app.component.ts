import { Component, AfterViewInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  Currentpath: string;
  title = 'app';
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((segments) => {
      if (segments.length > 0) {
        console.log('Gotcha', segments[0].path);
        this.Currentpath = segments[0].path
      }

    })

    setTheme('bs4'); // or 'bs4'

  }
  ngAfterViewInit() {


  }
}
