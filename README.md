# Key Metrics Lightning Web Component

![Screenshot of component included on a Lightning Record Page. Image shows custom LWC on the Details tab of an account record page with component settings open on the right-hand side of the screen.](/images/key-metrics.png)

![Screenshot of the page layout for editing a custom metadata type record for Opportunity metrics in the Setup menu of Salesforce. Options are visible to explain how to enter field information.](/images/custom-metadata.png)

This Key Metrics component allows you to display certain key fields more visually appealing than through using Compact Layouts and the standard Highlights Pannel. The advantage here as well is that multiple components with multiple configurations can be added to the same record page. The component takes advantage of custom metadata types for the configuration of the component, allowing you to package the settings for distribution. Only colors have remained options directly from the Lightning App Builder to allow admins the ability to view changes in color on the fly. If no colors are modified, the component will default to using a preset palette based off of the Salesforce "Lightning Ridge" Themes and Branding option.

## What To Do

### Deploy this package
1. Deploy this package to your Salesforce environment, use the [Salesforce DX Public Deployer](https://hosted-scratch.herokuapp.com/byoo?template=https://github.com/thisisjohnny/sf-key-metrics) and choose the option best for you 
2. Go to Settings > Custom Metadata Types and click the _Manage Records_ action link next to the Key Metrics Setting label
3. Click New to create your new configuration. (Reference the Example Settings included as a starting point if needed.)
4. Add the component to any Lightning Record Page
5. Drag the Key Metrics custom component to your Lightning App Builder canvas and set the Custom Metadata Label information. (Note: This is not case sensitive)
6. Save and Activate your page

### Custom Metadata Types explained
Rather than using property fields on the component settings of a Lightning App Builder page, this component uses Custom Metadata Types to hold most of the configurations for the component. There are a few benefits to this method, but primarily it allows you to easily package the configuration for distribution. Configuring the Metadata record is much like creating any other record in Salesforce. See the screen shot above for a visual, or reference the existing Example Settings record included in this package.

The Card Format allows for three options: 2, 3, and 4-up configurations—meaning the component will render at minimum 2 and at most 4 metrics at a time. This is to help ensure the metrics have enough space to 'breathe' in the interface. If you would like to include more than four metrics on a single record page, create multiple custom metadata type records and include the Key Metrics component on the page as many times as needed.

For each metric, you need to provide the following information:
1. **Metric Label**: This component allows for flexibility in naming the label for your metric rather than pulling from the metadata of the org schema itself. E.g. If the field label in your org is “Approved Quote Lines with Discount”, the metric label in the component configuration can simply be “Approved Discounts”.
2. **Metric API Name**: This is the API name of the field you would like to render in the component. As with the Object API Name, you will need to include the `__c` suffix for any custom fields.
3. **Metric Format**: This is needed to determine how to render the field in the component. Similiarly, this is left open to change for flexibility reasons should the field be stored in a different format than how you'd like it rendered on the screen. This is a picklist field with limited options.

## Caveats
*This package is provided without warranty or gaurantee.*

This package is provided without warranty. This package may not work in your environment and requires other dependendies. This software has not been fully tested nor developed with strict security and access controls in mind. By installing this package in your org, you assume all risk of consequences and agree not to hold myself or my employer liable.

----
_Made with_ 🎅 _in Reston_