import { QuotesyPage } from './app.po';

describe('quotesy App', function() {
  let page: QuotesyPage;

  beforeEach(() => {
    page = new QuotesyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('quot works!');
  });
});
