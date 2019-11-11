//
//  SayWhat_UITests.swift
//  SayWhat_UITests
//
//  Created by Chris Finn on 11/11/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import XCTest

class SayWhat_UITests: XCTestCase {

    override func setUp() {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
      
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()
                  
        // Helps us not to continue before react has compiled its stuff and actually loaded the application
        sleep(60)
        snapshot("01Main")
        app.staticTexts["BTN_PLAY"].tap()
        sleep(3)
        snapshot("02Decks")
        app.staticTexts["DECK_Media"].tap()
        sleep(3)
        snapshot("03Round")
        app.staticTexts["BTN_START"].tap()
        sleep(3)
        snapshot("04Game")
    }

    func testLaunchPerformance() {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
                XCUIApplication().launch()
            }
        }
    }
}
