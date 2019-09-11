import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }


  getSelectOption(selectedoption) {
    let selector = 'select option:nth-child(' + selectedoption + ')';

    return element(by.css(selector)).getText() as Promise<string>;

  }

}
