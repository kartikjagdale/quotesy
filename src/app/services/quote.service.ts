import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Quote } from '../models/quote';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuoteService {
  baseurl:string = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=JSONP_CALLBACK'
  
  constructor(private jsonp: Jsonp) { }

  /**
   * Get Random Quote from quote api
   * 
   * @method: getRandomQuote
   * 
   * @return Observable<any>
   */
  getRandomQuote(): Observable<any> {
    return this.jsonp.get(this.baseurl);
  }



  /**
   * Parse the response recived from Quotes api
   * and add random image url from unsplsah.it random image site
   * 
   * @param response
   * 
   * @method parseResponse
   * 
   * @return Quote
   */
  parseResponse(response): Quote {
    const quoteBody = response['_body'][0]
    const index = Math.floor(Math.random() * 1060);
    const imageUrl = 'https://unsplash.it/575x515?image=' + index + '&blur'
    
    var attr = {
      id:     quoteBody.ID,
      author: quoteBody.title,
      content: quoteBody.content,
      imageUrl: imageUrl
    }
    var quote = new Quote(attr)
    return quote;
  }
}
