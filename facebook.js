              console.log("This is automated Facebook page : ");
			  
			  const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

              (async function example() {
                   let driver = await new Builder().forBrowser(Browser.CHROME).build();
                   try {
                   await driver.get('https://www.facebook.com/');
				   
				   let enterMobileNumber = await driver.findElement(By.className('inputtext _55r1 _6luy'));
				   console.log("Enter mobile number : ",await enterMobileNumber.sendKeys('7972560094'));
				   
				   await driver.manage().setTimeouts({implicit: 5000});
				   
				   let enterPassword = await driver.findElement(By.className('inputtext _55r1 _6luy _9npi'));
				   console.log("Enter password : ",await enterPassword.sendKeys('Mh27-bc@3431'));
				   
				   await driver.manage().setTimeouts({implicit: 5000});
				   
				   let hitLogInButton = await driver.findElement(By.className('_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy'));
				   await driver.manage().setTimeouts({implicit: 5000});
				   console.log("Hit login button : ",await hitLogInButton.click());
				   let alert = await driver.switchTo().alert();
				   let alertText = await alert.getText();
				   await alert.dismiss();
				   
				   
				   
				   
				   
				   //await driver.manage().setTimeouts({implicit: 5000});
			       //let hitsearchButton = await driver.findElement(By.className('x1a2a7pz x1qjc9v5 xnwf7zb x40j3uw x1s7lred x15gyhx8 x9f619 x78zum5 x1fns5xo x1n2onr6 xh8yej3 x1ba4aug xmjcpbm'));
				   
				   
				   
				   
				   
				   
				   
				   
				   //let hitFriendButton = await driver.findElement(By.className('x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq'));
				   //sconsole.log("Hit login button : ",await hitFriendButton.click());
				   
				   
				   
				   
				   
				   

              } catch (e){
				  console.log('e');
			  } finally
			  {
                 //await driver.quit();
              }
              })(); 