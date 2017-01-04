import { browser, element, by } from 'protractor';

export class QuotesyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quot-root h1')).getText();
  }
}
