// keyMetrics.test.js

import { createElement } from "lwc";
import KeyMetrics from "c/keyMetrics";
import getMetadataValues from "@salesforce/apex/KeyMetricsController.getMetadataValues";

const mockGetMetadataValues = require("./data/getMetadataValues.json");

jest.mock(
  "@salesforce/apex/KeyMetricsController.getMetadataValues",
  () => {
    return {
      default: jest.fn()
    };
  },
  { virtual: true }
);

describe("c/keyMetrics", () => {
  afterEach(() => {
    // reset the DOM instance
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test("gets the configuration data", () => {
    // create element and add to the dom
    const element = createElement("c-key-metrics", {
      is: KeyMetrics
    });
    document.body.appendChild(element);

    // mock the data return value
    getMetadataValues.mockResolvedValue(mockGetMetadataValues);

    // verify configuration data is present
    return Promise.resolve().then(() => {
      const metric1Label = mockGetMetadataValues.Metric_1_Label__c;
      expect(metric1Label).toBe("Annual Revenue");
    });
  });
});
