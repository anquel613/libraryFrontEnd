import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { AppService } from './service/app.service';
import { AuthorComponent } from './forms/author/author.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { BookComponent } from './forms/book/book.component';
import { EditorialComponent } from './forms/editorial/editorial.component';

const routes: Routes = [
  {path: '', redirectTo: '/library', pathMatch: 'full'},
  {path: 'library', component: LibraryComponent},
  {path: 'authors/form', component: AuthorComponent},
  {path: 'books/form', component: BookComponent},
  {path: 'editorials/form', component: EditorialComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    AuthorComponent,
    BookComponent,
    EditorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
