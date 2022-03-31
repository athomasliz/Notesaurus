---
sidebar_position: 3
---

# iOS Distribution

### Step 1. Create Identifier 

Location: Apple Developer

### Step 2. Create Certificate

Location: Apple Developer

:::danger Type of certificate
Please be careful to choose the type, development or distribution. Only development certificate can be used for development. Only distribution certificate can be used for production. Download them in keychain access of your development machine.
:::


### Step 3. Create App

Location: Apple Store Connect 

Bundle ID (**Step 1**) is needed for creating the App.

### Step 4. Create Provisioning Profile

Location: Apple Developer

Certificate (**Step 2**) and App ID (**Step 3**) are needed for creating a provisioning profile.

### Step 5. Signing & Capabilities

Location: XCode

For **development**, provisioning profile is Xcode managed. 

For **production**, Signing certificate (**Step 2**) must be a distribution certificate. Provisioning profile is needed (**Step 4**).

### Step 6. Run for development

Location: XCode

    1. Choose the development profile and certificate for Signing
    2. XCode > Product > Run

### Step 7. Build release

Location: XCode

    1. Choose the distribution profile and certificate for Signing
    2. Increment the build number
    3. XCode > Product > Clean Build Folder
    4. XCode > Product > Build
    5. XCode > Product > Archive
    6. Choose the correct profile and export

### Step 8. Deliver to Test Flight

Location: Transporter

    1. Open the app Transporter
    2. Add the archive file xxxApp.ipa (**Step 6**)
    3. Apple will validate the file for a while... If fail (such as duplicate build number), it will prompt error
    4. Press the deliver button
    5. After successful upload, apple will continue to scan the .ipa
    6. For successful scanning, the app will be released to Test Flight
    7. For unsuccessful scanning, a email will be send to you for the reason

