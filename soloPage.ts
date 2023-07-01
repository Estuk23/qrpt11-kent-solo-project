import {By, Builder, Capabilities, until, WebDriver} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class Starbucks extends BasePage {
    driver: WebDriver;
 
    url: string ="https://app.starbucks.com/account/signin?returnUrl=https%3A%2F%2Fapp.starbucks.com%2Fmenu%2Fproduct%2F873068625%2Fhot"


    // login
    agreebtn: By = By.xpath('//button[@id="truste-consent-button"]')
    userNamefloat: By = By.xpath('(//label[@class="floatLabel"])[1]');
    userName: By = By.xpath('(//input[@class="fieldInput text-sm"])[1]');
    passWord: By = By.xpath('(//input[@class="fieldInput text-sm"])[2]');
    passWordfloat: By = By.xpath('(//label[@class="floatLabel"])[2]');
    signIn: By = By.xpath('//button[@class="sb-frap sb-frap--centerSVG"]');
    gotIt: By = By.xpath('//button[@class="sb-button sb-button--text"]');
    home: By = By.xpath('//a[@aria-label="Home, Starbucks"]');
    refresh: By = By.xpath('//button[@class="sb-button sb-button--default mt2"]');
//order
    orderLink: By = By.xpath('(//a[@class="sb-globalNav__desktopLink inline-block text-noUnderline text-xxs text-upper text-bold"])[1]');
    hotCoffee: By = By.xpath('(//a[@class="block linkOverlay__primary tile___1wb3i"])[2]');
    greenApron: By = By.xpath('(//a[@class="block linkOverlay__primary prodTile"])[2]');


    doneCust: By = By.xpath('//button[@class="sb-frap sb-frap--centerSVG sb-frap--houseGreen"]');
    addOrder: By = By.xpath('//button[@class="sb-frap sb-frap--centerSVG"]');
    selectStore: By = By.xpath('//button[@class="sb-button sb-button--positive m1"]');
    orderHere: By = By.xpath('(//div[@class="my2"])[1]');

    
    menu: By = By.xpath('//a[@class="sb-globalNav__desktopLink inline-block text-noUnderline text-xxs text-upper text-bold undefined"]')
    frapp: By = By.xpath("//a[contains(text(),'Frappuccino® Blended Beverages')]");
    javachip: By = By.xpath('(//a[@class="block linkOverlay__primary prodTile"])[8]');
    oleato: By = By.xpath("//div[@data-e2e='Oleato™']//a[@class='block linkOverlay__primary tile___1wb3i']");
    oleatose: By = By.xpath("//div[@class='grid grid--compactGutter']//div[1]//div[1]//a[1]");
   
    gCards: By = By.xpath('(//a[@class="sb-globalNav__desktopLink inline-block text-noUnderline text-xxs text-upper text-bold"])[2]');
    rArrow: By = By.xpath('(//button[@class="block color-black60 carouselPager__button carouselPager__button--alwaysVisible sb-frap sb-frap--mini sb-frap--circular sb-frap--centerSVG sb-animator-fadeGrow-enter-done"])[1]');
    sBucks: By = By.xpath("//div[17]//a[1]");




    recipientName: By = By.xpath("//body[1]/div[2]/div[1]/div[3]/main[1]/div[2]/div[1]/div[1]/form[1]/div[4]/div[1]/div[1]")
    recipientText: By = By.xpath("//input[@id='recipientName']")
    recipientEmail: By = By.xpath("//body[1]/div[2]/div[1]/div[3]/main[1]/div[2]/div[1]/div[1]/form[1]/div[4]/div[2]/div[1]")
    recipientEtext: By = By.xpath("//input[@id='recipientEmail']")
    senderName: By = By.xpath("//body[1]/div[2]/div[1]/div[3]/main[1]/div[2]/div[1]/div[1]/form[1]/div[6]/div[1]/div[1]")
    senderNtext: By = By.xpath("//input[@id='senderName']")
    senderEmail: By = By.xpath("//body[1]/div[2]/div[1]/div[3]/main[1]/div[2]/div[1]/div[1]/form[1]/div[6]/div[2]/div[1]")
    senderEtext: By = By.xpath("//input[@id='senderEmail']")
    message: By = By.xpath('(//div[@class="sb-fieldBase__childWrapper flex items-center"])[7]');
    text: By = By.xpath("//input[@id='message']")
    

    cart: By = By.xpath('//button[@class="relative flex justify-center cursor-pointer"]');

    confirm: By = By.xpath('//button[@class="sb-button sb-button--positive m1"]');



    constructor()  {
        super({url:"https://app.starbucks.com/account/signin?returnUrl=https%3A%2F%2Fapp.starbucks.com%2Fmenu%2Fproduct%2F873068625%2Fhot"})
    };

async repeatClick(num, elementBy) {
    for (let i = 0; i < num; i++){
        await this.click(elementBy)
    };
};

async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).click();
};
async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy))
    await this.driver.findElement(elementBy).clear()
    return this.driver.findElement(elementBy).sendKeys(keys)
};

};