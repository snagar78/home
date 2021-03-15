import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  LINK_PREVIEW_KEY = 'd4f708d8a851da0ce92c63d6c5a8be33';

  links: any[] = [
    {
      url: 'https://medium.com/@naagarsuresh78/multiple-undo-using-ngrx-e71cb44be3b5',
      loading: false,
      title: 'Multiple Undo using NgRx',
      previewObj: {
        image: 'https://miro.medium.com/max/1400/1*TuxGvHQmigjE8kmwcodFFg.jpeg',
        description: 'An article about implementing multiple undo functionality in UI.  Using metaReducers maintain stack of previous ngrx states to enable multiple state undos'
      }

    },
    {
      url: 'https://medium.com/@naagarsuresh78/rxify-webworker-communication-in-angular8-b0cddbdcf2e',
      loading: false,
      title: 'WebWorker Communication using RxJS',
      previewObj: {
        image: 'https://miro.medium.com/max/1400/0*q6CXm6s0CM1bAoEQ',
        description: 'An article about communication with web worker using RxJs.  A conventional way of communicating with web worker is using postMessage which is difficult to manage.  This articles explains on how to expose a worker as RxJs Subject.'
      }

    },
    {
      url: 'https://medium.com/@naagarsuresh78/handling-keyboard-shortcuts-in-angular-bd4587787375',
      loading: false,
      title: 'Handling keyboard shortcuts in Angular',
      previewObj: {
        image: 'https://miro.medium.com/max/1400/1*GJdxPHqphXkuLCZEB47q1g.jpeg',
        description: 'How to handle and implement keyboard shortcuts and hotkeys in Angular.  This Article explains how to angularize the popular library "mousetrap" and hide the complexity of event binding under Angular Directives'
      }

    }
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
