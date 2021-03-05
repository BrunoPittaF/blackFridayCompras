import { launch } from "puppeteer";

const url =
  "https://www.kabum.com.br/produto/128561/console-microsoft-xbox-series-s-512gb-branco-r-";

async function botCompras() {
  console.log("#teste");

  const browser = await launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector("div.botao-comprar");
  await page.click("sc-AxjAm ZPLXp");
}
botCompras();
