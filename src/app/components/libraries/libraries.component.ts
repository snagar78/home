import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  LINK_PREVIEW_KEY = 'd4f708d8a851da0ce92c63d6c5a8be33';

  links: any[] = [
    {
      url: 'https://www.npmjs.com/package/ngx-mousetrap',
      loading: false,
      title: 'An Angular library built on top of "mousetrap".',
      previewObj: {
        image: './assets/icons/npm-logo.png',
        description: 'A convenient Angular wrapper over mousetrap library to hide complexity and expose Angular Directive and Services'
      }
    },
    {
      url: 'https://www.npmjs.com/package/rxify-webworker',
      title: 'Using RxJS to communicate with webworker.',
      loading: false,
      previewObj: {
        image: './assets/icons/npm-logo.png',
        description: 'An RxJS library to communicate with WebWorkers using Observables and hide all the complexities of dealing with worker postMessaging.'
      }

    },
  ];

  constructor(private http: HttpClient) {
    // this.links.forEach((link, index) => this.getPreview(link.url, index));
  }

  ngOnInit(): void {
  }

  // private getPreview(url: string, index: number): void {
  //   this.http.get(`http://api.linkpreview.net/?key=${this.LINK_PREVIEW_KEY}&q=${url}`).
  //     subscribe((response) => {
  //       this.links[index].previewObj = response;
  //     }, (error) => {

  //     });
  // }

}
