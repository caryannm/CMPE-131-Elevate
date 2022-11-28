const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function testFunction(){
    //launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("file:///Users/adenmengistie/CMPE-131-Elevate/grade%20calculator%20website/ver6/index6.html")
   
    //add rows  
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/input")).click();

    //add values to rows course 1
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/table/tbody/tr[2]/td[2]/input")).sendKeys("90");
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/table/tbody/tr[2]/td[3]/input")).sendKeys("50");
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/table/tbody/tr[3]/td[2]/input")).sendKeys("80");
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/table/tbody/tr[3]/td[3]/input")).sendKeys("50");
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/div/input[1]")).click();
    
     //assertion
    let finalGrade =    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/div/span[1]")).getText().then(function(fgrd){
            return fgrd;
        });
    let grade =    await driver.findElement(By.xpath("/html/body/div[1]/div[1]/fieldset/form/div/span[2]")).getText().then(function(grd){
            return grd;
        });

    assert.strictEqual(finalGrade, "85.00%");
    assert.strictEqual(grade, "B");

    finalGrade.should.equal("85.00%");
    grade.should.equal("B");

    //add course
    await driver.findElement(By.xpath("/html/body/div[2]/input")).click();
    await driver.findElement(By.xpath("/html/body/div[2]/input")).click();
    await driver.findElement(By.xpath("/html/body/div[2]/input")).click();

    //add values to rows course 2
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/table/tbody/tr[2]/td[2]/input")).sendKeys("80");
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/table/tbody/tr[2]/td[3]/input")).sendKeys("80");
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/table/tbody/tr[3]/td[2]/input")).sendKeys("100");
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/table/tbody/tr[3]/td[3]/input")).sendKeys("20");
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/div/input[1]")).click();

    //delete row
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/form/table/tbody/tr[3]/td[4]/input")).click();
    
    //delete course
    await driver.findElement(By.xpath("/html/body/div[1]/div[2]/fieldset/div/input")).click();

    //Reset
    await driver.findElement(By.xpath("/html/body/div[1]/div/fieldset/form/div/input[2]")).click();

    //close browser
    await driver.quit();

}

testFunction()