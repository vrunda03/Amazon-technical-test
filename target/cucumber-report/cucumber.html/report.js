$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookincart.feature");
formatter.feature({
  "line": 1,
  "name": "Test the functionality of basket for given website",
  "description": "",
  "id": "test-the-functionality-of-basket-for-given-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8243351400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I Click on \u0027There is one item in the basket\u0027",
  "description": "",
  "id": "test-the-functionality-of-basket-for-given-website;i-click-on-\u0027there-is-one-item-in-the-basket\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Accept cookies button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search on search bar \"Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.\" in book section.",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Harry Potter and the Philosopher’s Stone book",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click On Add to Basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the notification is shown Added to Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify that the one item in the basket",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click On Go to Basket button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iOpenHomepage()"
});
formatter.result({
  "duration": 137212800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookiesButton()"
});
formatter.result({
  "duration": 261470800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.",
      "offset": 24
    }
  ],
  "location": "BookSteps.iSearchOnSearchBarInBookSection(String)"
});
formatter.result({
  "duration": 741570600,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 2625244300,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnHarryPotterAndThePhilosopherSStoneBook()"
});
formatter.result({
  "duration": 104231000,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.clickOnAddToBasket()"
});
formatter.result({
  "duration": 11674160400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.id: add-to-cart-button\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.localhost.utility.Utility.clickOnElement(Utility.java:49)\r\n\tat com.localhost.pages.BookDetailPage.clickOnaddToBasket(BookDetailPage.java:38)\r\n\tat com.localhost.steps.BookSteps.clickOnAddToBasket(BookSteps.java:58)\r\n\tat ✽.And Click On Add to Basket(bookincart.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BookSteps.verifyThatTheNotificationIsShownAddedToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookSteps.verifyThatTheOneItemInTheBasketInputValueProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookSteps.iClickOnGoToBasketButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 64721200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d102.0.5005.115)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [41679b2c2b208e8de452e1a963638265, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60186/devtoo..., se:cdpVersion: 102.0.5005.115, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 41679b2c2b208e8de452e1a963638265\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.localhost.utility.Utility.getScreenshot(Utility.java:150)\r\n\tat com.localhost.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});