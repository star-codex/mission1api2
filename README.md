# Mission 1 / API 2

Second API for Mission 1.

## Description

This API takes 1 parameters as input in JSON format that has a text field describing the claim history in the last 3 years of a driver requesting for a quote.  The output is a JSON format with the suggested rating of the driver from 1 to 5, 5 being a high risk driver and 1 being a low risk driver.

Risk rating is calculated by counting the number of occurrences of a list of keywords.  Each occurrence (regardless of whether they are repeats) will add 1 to the risk rating.  The keyword list is "collide", "crash", "scratch", "bump", "", and "smash".  For example, "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." returns a rating of 3 (counting the underlined letters).  If input value is not valid, return an error.

## Getting Started

### Dependencies

* @jest/globals
* @types/jest
* express
* jest
* node

### Installing

* NPM install

### Executing program

* How to run the program
* Step-by-step bullets

## Authors

Benson & Erin

Group 1, Dev Team, Mission Ready (October 2023 intake)
