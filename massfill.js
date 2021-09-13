const {Builder, By, Key, until} = require('selenium-webdriver');
const id = require("./id.json")
const id_Length = Object.keys(id).length
console.log(id_Length)

function float(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for(const property in id){
  (async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
      await driver.get('https://webap1.kshs.kh.edu.tw/kshsSSO/publicWebAP/bodyTemp/index.aspx');
      await driver.findElement(By.name('ctl00$ContentPlaceHolder1$txtId')).sendKeys(id[property], Key.RETURN);
      await driver.sleep(200)
      await driver.findElement(By.id('ContentPlaceHolder1_rbType_1')).click()
      await driver.findElement(By.name('ctl00$ContentPlaceHolder1$ddl1')).sendKeys("35", Key.RETURN);
      await driver.findElement(By.name('ctl00$ContentPlaceHolder1$ddl2')).sendKeys(float(9), Key.RETURN);
      await driver.findElement(By.name('ctl00$ContentPlaceHolder1$ddl3')).sendKeys("正常", Key.RETURN);
      await driver.findElement(By.name('ctl00$ContentPlaceHolder1$btnId0')).click()
    } finally {
      //await driver.quit();
    }
  })();
}






