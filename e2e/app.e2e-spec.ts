import { ThManager2Page } from './app.po';

describe('th-manager2 App', function() {
  let page: ThManager2Page;

  beforeEach(() => {
    page = new ThManager2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
