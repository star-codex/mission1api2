# Mission 1 / API 2

## Description

This API takes 1 parameter as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote.  The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver.

Risk rating is calculated by counting the number of occurrences of a list of keywords.  Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating.  The keyword list is "collide", "crash", "scratch", "bump", "", and "smash".  For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters).  If input value is not valid, return an error.

## Getting Started

### Dependencies

* ``` @jest/globals ```
* ``` @types/jest ```
* express
* jest
* node

### Installing

* ```npm install```

### Executing program

* Open terminal and enter ```npm start``` to start server on port 3000.
* Open Postman.
* Create POST Request via dropdown.
* Enter API endpoint <http://localhost:3000/calculateRating>.
* In BODY of request, choose raw format followed by JSON in the dropdown.
* Enter the following JSON as an example:
```{"text": "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes."}```
* Suggested rating 3 will be returned from this example.

### Testing

* ```npm test``` runs the suite for 5 different unit tests for input formatting.

## Features planned

* Create testing for API itself

## Author

Erin Kennedy

Group 1, Dev Team, Mission Ready (October 2023 intake)
