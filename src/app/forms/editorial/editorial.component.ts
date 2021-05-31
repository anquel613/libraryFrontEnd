import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/library/editorial';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  editorial:Editorial = new Editorial();
  title:string = "Create Editorial";
  constructor(private appService:AppService,
  private router:Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.appService.createEditorial(this.editorial).subscribe(
      response => this.router.navigate(['/library'])
    )
  }

}
