import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/library/book';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Book = new Book();
  title:string = "create Book";
  constructor(private appService:AppService,
  private router:Router) { }

  ngOnInit(): void {
  }
  public create(): void {
    this.appService.createBook(this.book).subscribe(
      response => this.router.navigate(['/library']),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
    )
  }
}
