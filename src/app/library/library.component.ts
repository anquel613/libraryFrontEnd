import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Author } from './author';
import { Book } from './book';
import { Editorial } from './editorial';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  authors: Author[];
  books: Book[];
  editorials: Editorial[];


  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.getAuthors().subscribe(
      authors => this.authors = authors
    );

    this.appService.getBooks().subscribe(
      books => this.books = books
    );

    this.appService.getEditorials().subscribe(
      editorials => this.editorials = editorials
    );
  }

}
