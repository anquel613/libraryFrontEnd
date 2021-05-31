import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/library/author';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author:Author = new Author();
  title:string = "Create Author";
  constructor(private appService: AppService,
  private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.appService.create(this.author).subscribe(
      response => this.router.navigate(['/library'])
    )
  }

}
