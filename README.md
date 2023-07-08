# nodejs-web-reactjs-express-api-basic-auth-ssl-axios-postgres

## Description
A reactjs that uses expressjs api that uses basic authentication
and self signed ssl. The api then connects to a postgres database.

| username | password |
| -------- | -------- |
| *maria* | *pass* |

Features: 
- component with parameters
- css grid
- axios
- promise
- cors
- basic authentication
- self signed ssl

## Tech stack
- reactjs
- axios
- expressjs
- postgres

## Docker stack
- alpine:edge
- postgres:alpine
- node:latest
- bayesimpact/react-base:latest

## To run
`sudo ./install.sh -u`
- [Availble here](http://localhost/)

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
[Express ssl code](https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87)