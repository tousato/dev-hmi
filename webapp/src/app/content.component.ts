import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from './coop/book';

@Component({
  template: `
  <div>
    <h1>記事情報 No.{{ id }}</h1>
    ［<a routerLink="./pages/1" routerLinkActive="current">1</a>］
    ［<a routerLink="./pages/2" routerLinkActive="current">2</a>］
  </div>
  <router-outlet></router-outlet>
  <hr />
    <div>
      <span *ngFor="let b of books">
        ［<a href="#" (click)="onclick(b)">{{b.title}}</a>］
      </span>
    </div>
    <hr />
    <detail-book [item]="selected"></detail-book>
    <!--<edit-book [item]="selected" (edited)="onedited($event)"></edit-book>-->
  <hr />
  <a routerLink="/" routerLinkActive="current"
    [routerLinkActiveOptions]=" {exact: true }">トップページへ</a>
  `,
  styles:['.current { background-color:#ff0; }']
})
export class ContentComponent {
  id = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  books :Book[] = [
    {
      isbn: '978-4-7741-8411-1',
      title: '改訂新版JavaScript本格入門',
      price: 2980,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7980-4853-6',
      title: 'はじめてのAndroidアプリ開発 第2版',
      price: 3200,
      publisher: '秀和システム',
    },
    {
      isbn: '978-4-7741-8030-4',
      title: '［改訂新版］Javaポケットリファレンス',
      price: 2680,
      publisher: '技術評論社',
    },
    {
      isbn: '978-4-7981-3547-2',
      title: '独習PHP 第3版',
      price: 3200,
      publisher: '翔泳社',
    },
    {
      isbn: '978-4-8222-9893-7',
      title: '基礎からしっかり学ぶC++の教科書',
      price: 2800,
      publisher: '日経BP社',
    }
  ];

  selected :Book;

  onclick(book :Book) {
    this.selected = book;
  }
}
