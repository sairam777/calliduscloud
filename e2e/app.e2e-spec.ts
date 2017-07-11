import { CalliduscloudPage } from './app.po';

describe('calliduscloud App', () => {
  let page: CalliduscloudPage;

  beforeEach(() => {
    page = new CalliduscloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
