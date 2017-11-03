import { MaterializeAppPage } from './app.po';

describe('materialize-app App', () => {
  let page: MaterializeAppPage;

  beforeEach(() => {
    page = new MaterializeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
