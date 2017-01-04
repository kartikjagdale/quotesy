import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'quot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseurl:string = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=JSONP_CALLBACK'
  quote: any = "Random string";
  constructor(private jsonp: Jsonp){ }

  getRandomQuote(){
    this.jsonp.get(this.baseurl).subscribe(
      response => {
        console.log(response['_body'][0]);
        this.quote = response['_body'][0]
      }
    )
  }
}
