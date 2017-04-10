import { PrimusFactusPage } from './app.po';

describe('primus-factus App', () => {
  let page: PrimusFactusPage;

  beforeEach(() => {
    page = new PrimusFactusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
