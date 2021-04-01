const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
      await driver.get('https://webap1.kshs.kh.edu.tw/kshsSSO/publicWebAP/bodyTemp/index.aspx');
      var randomNumber = await (await driver.findElement(By.id('ContentPlaceHolder1_lbN'))).getText()
      var list = await (await driver.findElement(By.id("ContentPlaceHolder1_RadioButtonList1"))).getText()
      var listPosition = list.search(randomNumber)
      var Contentplace = `ContentPlaceHolder1_RadioButtonList1_${listPosition}`
      await driver.findElement(By.id(Contentplace)).click()
    } finally {
    }
  })