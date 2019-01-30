# Tests

To ensure the quality of the project, Leon has automatic tests. As the code base regularly changes, tests should ensure there is no regression due to these new changes.

In Leon, there are several kinds of tests, let's discover them in the next sections. Please kindly note that all of the tests are written in JavaScript.

## Unit

Softwares are made of chunks and the purpose of unit tests is to test these chunks of the project.

Leon uses unit testing to test the chunks of his core.

Unit tests can be:
- Found under the `test/unit` folder.
- Executed via: `npm run test:unit`.

## End-to-End

End-to-end testing or functional testing test the whole behavior of a dedicated feature. It tests several chunks at a time and expect for a specific result.

Leon uses end-to-end testing to test his modules and his NLP.

End-to-end tests can be:
- Found under the `test/e2e` folder and `packages/{PACKAGE NAME}/test/{MODULE NAME}.spec.js` files.
- Executed via: `npm run test:e2e`.

## JSON

"JSON" tests are simply related to Leon and not in general softwares.

Leon uses them to ensure every JSON file is valid and respect specific rules such as punctuations or not.

"JSON" tests can be:
- Found under the `test/json` folder.
- Executed via: `npm run test:json`.
