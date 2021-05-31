import { Injectable } from '@angular/core';
import { Author } from '../library/author';
import {Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../library/book';
import { Editorial } from '../library/editorial';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private urlEndPoint:string = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient,
  private router: Router) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.urlEndPoint + "/authors");
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.urlEndPoint + "/books");
  }

  getEditorials(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.urlEndPoint + "/editorials");
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>(this.urlEndPoint + "/authors", author,{headers: this.httpHeaders})
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.urlEndPoint + "/books", book,{headers: this.httpHeaders}).pipe(
      catchError(e => {
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
        console.error(e.error.mensaje);
      })
    )
  }
  createEditorial(editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(this.urlEndPoint + "/editorials", editorial,{headers: this.httpHeaders})
  }
}
