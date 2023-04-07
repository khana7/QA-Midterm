const Page = require('./page');

class Platforma extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentPlatformaFilter() { return $('app-client-total-platforma-got-filter'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-platforma-got-filter/div/div[2]/div[6]'); }

  

  async performPlatformaFilter() {
    await this.searchForm.click();
    await this.spentPlatformaFilter.waitForDisplayed({ timeout: 5000 });
    await this.spentPlatformaFilter.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new Platforma();