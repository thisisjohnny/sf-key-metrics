# Key Metrics Lightning Web Component

![Screenshot of component included on a Lightning Record Page. Image shows custom LWC on the Details tab of an account record page with component settings open on the right-hand side of the screen.](/images/key-metrics.png)

This Key Metrics component allows you to display certain key fields more visually appealing than through using Compact Layouts and the standard Highlights Pannel. The advantage here as well is that multiple components with multiple configurations can be added to the same record page. The component takes advantage of custom metadata types for the configuration of the component, allowing you to package the settings for distribution. Only colors have remained options directly from the Lightning App Builder to allow admins the ability to view changes in color on the fly. If no colors are modified, the component will default to using a preset palette based off of the Salesforce "Lightning Ridge" Themes and Branding option.

## What To Do

### Deploy this package
1. Deploy this package to your Salesforce environment, use the [Salesforce DX Public Deployer](https://hosted-scratch.herokuapp.com/byoo?template=https://github.com/thisisjohnny/sf-key-metrics) and choose the option best for you 
2. Go to Settings > Custom Metadata Types and click the _Manage Records_ action link
3. Click New to create your new configuration. (Reference the Example Settings included as a starting point if needed.)
4. Add the component to any Lightning Record Page
5. Drag the Key Metrics custom component to your Lightning App Builder canvas and set the Custom Metadata Label information. (Note: This is not case sensitive)
6. Save and Activate your page

## Caveats
*This package is provided without warranty or gaurantee.*

This package is provided without warranty. This package may not work in your environment and requires other dependendies. This software has not been fully tested nor developed with strict security and access controls in mind. By installing this package in your org, you assume all risk of consequences and agree not to hold myself or my employer liable.

----
_Made with_ 🎅 _in Reston_