fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios certificates
```
fastlane ios certificates
```
Fetch certificates and provisioning profiles
### ios codepush_beta
```
fastlane ios codepush_beta
```
Codepush to iOS beta
### ios beta
```
fastlane ios beta
```
Build and push a new beta build to Testflight
### ios screenshots
```
fastlane ios screenshots
```
Take screenshots for iOS app
### ios codepush_release
```
fastlane ios codepush_release
```
Codepush to release app
### ios release
```
fastlane ios release
```
Build and push a new release build to the App Store

----

## Android
### android test
```
fastlane android test
```

### android beta
```
fastlane android beta
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
