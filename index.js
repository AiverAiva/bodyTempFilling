const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const [page] = await browser.pages();
  await page.goto("https://webap1.kshs.kh.edu.tw/kshsSSO/publicWebAP/bodyTemp/index.aspx");
  await page.type('input[name="ctl00$ContentPlaceHolder1$txtId"]', "wqeqwassaf")
  // await page.click();
  
  // await browser.close();

})();

