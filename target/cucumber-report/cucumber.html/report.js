$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Functionality Test of given website",
  "description": "",
  "id": "functionality-test-of-given-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7377358500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search forHarry Potter and the Philosopher’s Stone – 25th Anniversary Edition in section books",
  "description": "",
  "id": "functionality-test-of-given-website;search-forharry-potter-and-the-philosopher’s-stone-–-25th-anniversary-edition-in-section-books",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I open homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Accept cookies button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I search on search bar \"Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.\" in book section.",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Verify that first item title is \"Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.-\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#    And     I Verify that book has \"Best Seller\" badge"
    }
  ],
  "line": 16,
  "name": "I Verify that Selected type is \"Paperback\" paperback",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify that the price is £\"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I navigate to the book details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify that first item title of detail page is \"Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.- \"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify that first badge \"#1 Best Seller\"of detail page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify that price is £\"£8.00\"in detail page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Verify that type is paperback \"Paperback\"of detail page",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iOpenHomepage()"
});
formatter.result({
  "duration": 215001500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookiesButton()"
});
formatter.result({
  "duration": 240346300,
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
  "duration": 745451900,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 1714434700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.-",
      "offset": 35
    }
  ],
  "location": "BookSteps.iVerifyThatFirstItemTitleIs(String)"
});
formatter.result({
  "duration": 4086910301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 32
    }
  ],
  "location": "BookSteps.iVerifyThatSelectedTypeIsPaperback(String)"
});
formatter.result({
  "duration": 2045160200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 29
    }
  ],
  "location": "BookDetailSteps.iVerifyThatThePriceIs(String)"
});
formatter.result({
  "duration": 41403000,
  "status": "passed"
});
formatter.match({
  "location": "BookDetailSteps.iNavigateToTheBookDetails()"
});
formatter.result({
  "duration": 50800299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.- ",
      "offset": 50
    }
  ],
  "location": "BookDetailSteps.iVerifyThatFirstItemTitleOfDetailPageIs(String)"
});
formatter.result({
  "duration": 50051474799,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@id\u003d\u0027productTitle\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027KEYOU\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e7a37ec28fd1f0969e8e7710b3788551, findElement {using\u003dxpath, value\u003d//span[@id\u003d\u0027productTitle\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\mihir\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65427/devtoo..., se:cdpVersion: 102.0.5005.115, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7a37ec28fd1f0969e8e7710b3788551\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.localhost.utility.Utility.getTextFromElement(Utility.java:55)\r\n\tat com.localhost.pages.BookDetailPage.verifyTitle(BookDetailPage.java:45)\r\n\tat com.localhost.steps.BookDetailSteps.iVerifyThatFirstItemTitleOfDetailPageIs(BookDetailSteps.java:19)\r\n\tat ✽.And I Verify that first item title of detail page is \"Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.- \"(homepage.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "#1 Best Seller",
      "offset": 27
    }
  ],
  "location": "BookDetailSteps.iVerifyThatFirstBadgeOfDetailPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£8.00",
      "offset": 25
    }
  ],
  "location": "BookDetailSteps.iVerifyThatPriceIs£InDetailPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 33
    }
  ],
  "location": "BookDetailSteps.iVerifyThatTypeIsPaperbackOfDetailPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 994124500,
  "status": "passed"
});
});