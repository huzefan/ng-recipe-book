import { CompleteAppPage } from './app.po';

describe('complete-app App', () => {
  let page: CompleteAppPage;

  beforeEach(() => {
    page = new CompleteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
