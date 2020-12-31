<!--lint disable no-literal-urls-->
<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://res.cloudinary.com/dqqrgidob/image/upload/v1609428423/1_EaB5rd8ml5HL1KXFWkNeiA_1_l1ogh8.png"
      width="400"
    />
  </a>
</p>

Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using Node.js, see the [Node.js Website][].

TypeScript is a typed (optional) super-set of JavaScript that can help with building and managing large-scale JavaScript projects. It can be thought of as JavaScript with additional features like strong static typing, compilation, object-oriented programming and ability to use interfaces.

This is a Node.js, Express and Mongo DB with TypeScript boilerplate which is a template and very easy to use.

## Getting Started


#### 1. Install dependencies

This workflow requires the following dependencies -

- Node.js with npm ([Install](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))

#### 2. Clone this repository

```
git clone https://github.com/weezykon/Nodejs-Express-Typescript-Mongodb.git
cd Nodejs-Express-Mongodb-template
```

Or [download as a ZIP](https://github.com/weezykon/Nodejs-Express-Typescript-Mongodb/archive/main.zip).

#### 3. Install packages

```
npm install
```

#### Dependencies used
- [@hapi/joi](https://www.npmjs.com/package/@hapi/joi)
Joi is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).

- [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
This is a dedicated service for interaction with the mail endpoint of the [SendGrid v3 API](https://sendgrid.com/docs/API_Reference/api_v3.html)

- [@types/bcrypt-nodejs](https://www.npmjs.com/package/@types/bcrypt-nodejs)
Native JS implementation of BCrypt for Node. Has the same functionality as node.bcrypt.js expect for a few tiny differences. Mainly, it doesn't let you set the seed length for creating the random byte array.

- [@types/bord-parser](https://www.npmjs.com/package/@types/body-parser)
Parse incoming request bodies in a middleware before your handlers, available under the req.body property

- [@types/cors](https://www.npmjs.com/package/@types/cors)
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.

- [@types/express](https://www.npmjs.com/package/@types/express)
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- [@types/hapi__joi](https://www.npmjs.com/package/@types/hapi__joi)
Joi is part of the hapi ecosystem and was designed to work seamlessly with the hapi web framework and its other components (but works great on its own or with other frameworks).

- [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

- [@types/mongodb](https://www.npmjs.com/package/@types/mongodb)
The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks. Create Deployments in Minutes w/ MongoDB Atlas

- [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

- [@types/node](https://www.npmjs.com/package/@types/node)
This package contains type definitions for Node.js

- [@types/randomstring](https://www.npmjs.com/package/@types/randomstring)
This package contains type definitions for randomstring

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
An ESLint plugin which provides lint rules for TypeScript codebases.

- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

- [Bcrypt Nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
Native JS implementation of BCrypt for Node. Has the same functionality as node.bcrypt.js expect for a few tiny differences. Mainly, it doesn't let you set the seed length for creating the random byte array.

- [Cors](https://www.npmjs.com/package/cors)
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.

- [Dotenv](https://www.npmjs.com/package/dotenv)
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- [ESlint](https://www.npmjs.com/package/eslint)
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

- [Express](https://www.npmjs.com/package/express)
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

- [Jstz](https://www.npmjs.com/package/jstz)
This library allows you to detect a user's timezone from within their browser. It is often useful to use JSTZ in combination with a timezone parsing library such as Moment Timezone.

- [Mongoose](https://www.npmjs.com/package/mongoose)
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

- [Nodemon](https://www.npmjs.com/package/nodemon)
Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- [Random String](https://www.npmjs.com/package/randomstring)
Library to help you create random strings.

- [TS Node](https://www.npmjs.com/package/ts-node)
TS Node will always resolve the compiler from cwd before checking relative to its own installation.

- [TypeScript](https://www.npmjs.com/package/typescript)
TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.

## Footnotes

- Created by [Weezykon](https://twitter.com/weezykon)
- Licensed under [MIT](https://github.com/nodejs/node-addon-api/blob/master/LICENSE.md)
