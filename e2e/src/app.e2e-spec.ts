import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('CopcoTable app is running!');
  });


  it('should display page size selection', () => {
    page.navigateTo();
    expect(page.getSelectOption(1)).toEqual(' 10 ');
    expect(page.getSelectOption(2)).toEqual(' 25 ');
  });
});
