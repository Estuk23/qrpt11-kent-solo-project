import { Starbucks } from "./soloPage";

const fs = require("fs");

const star = new Starbucks();

test('The Breakfast of Champions', async () => {
    await star.navigate();
    await star.driver.manage().window().maximize()
    
    await star.click(star.agreebtn);
    await star.driver.sleep (1500);
    
    await star.click(star.userNamefloat);
    await star.sendKeys(star.userName, "max.powerful007@gmail.com\n");
    await star.click(star.passWord);
    await star.sendKeys(star.passWord, "Asdf_1234\n");
    await star.click(star.signIn);
    await star.driver.sleep (1500);
    await star.click(star.gotIt);
    await star.click(star.home);
    await star.driver.sleep (1500);
    await star.click(star.refresh);
    await star.driver.sleep (1500);
    await star.click(star.orderLink);
    
    
    await star.click(star.hotCoffee);
    await star.driver.sleep (1500);
    await star.click(star.greenApron);
    await star.driver.sleep (1500);
    await star.click(star.addOrder);
    await star.driver.sleep (2000);

    await star.click(star.menu);
    await star.driver.sleep (5000);
   
   
    await star.click(star.frapp);
    await star.click(star.javachip);
    await star.click(star.addOrder);
    await star.driver.sleep (5000);
   
    
    await star.click(star.menu);
    await star.driver.sleep (1500);
    await star.click(star.oleato);
    await star.driver.sleep (1500);
    await star.click(star.oleatose);
    await star.driver.sleep (1500);
    await star.click(star.addOrder);
    await star.driver.sleep (2000);
     

    await star.click(star.cart);
    await star.driver.sleep (5000);
    await star.click(star.selectStore);
    await star.click(star.orderHere);
    await star.click(star.selectStore);

    await star.click(star.menu);
    await star.driver.sleep (1500);
    await star.click(star.gCards);
    await star.driver.sleep (1500);
    await star.click(star.rArrow);
    await star.click(star.rArrow);
    await star.click(star.rArrow);
    await star.click(star.rArrow);
    await star.driver.sleep (1500);
    await star.click(star.sBucks);
    await star.driver.sleep (1000);
    await star.click(star.recipientName);
    await star.driver.sleep (1000);
    await star.sendKeys(star.recipientText, "Mars Howard\n");
    await star.click(star.recipientEmail);
    await star.driver.sleep (1000);
    await star.sendKeys(star.recipientEtext, "mars.howard@devmounta.in\n");
    await star.click(star.senderName);
    await star.driver.sleep (1000);
    await star.sendKeys(star.senderNtext, "Kent Estupinan\n");
    await star.click(star.senderEmail);
    await star.driver.sleep (1000);

    await star.sendKeys(star.text, "ENJOY THE COFFEE...!\n");





});