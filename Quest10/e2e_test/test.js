const timeout = 15000; 
beforeAll(async () => {await page.goto(URL, {waitUntil: 'domcontentloaded'});
  
}); 
describe('Test page title and ponse', () => { 
test('page title', async () => { 

  const title = await page.title();

  await page.click("input[name='ec2-api']");

  await page.waitFor(2000);

  const response = await page.$("div[id='frame']");

  const evalData = await page.evaluate(element => {
      return element.textContent;
    }, response);

  expect(title).toBe('Document');

  expect(evalData).toEqual('Hello, World!');
}, timeout);

});
