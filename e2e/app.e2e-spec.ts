import { WotrHelperPage } from './app.po';

describe('wotr-helper App', () => {
  let page: WotrHelperPage;

  beforeEach(() => {
    page = new WotrHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
