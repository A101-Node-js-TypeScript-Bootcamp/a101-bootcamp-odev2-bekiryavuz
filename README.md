## Getting started

* This application pulls brand and category information from trendyol.


## How to install

# Using Git (recommended)

* Clone the project from github. 

```
$ git clone https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev2-bekiryavuz.git
```

* Install npm
```
$ npm install
```


## Project structure

```
.
├── index.js
├── package.json
├── controllers
│   ├── brand.js
│   └── userAuth.js
├── routes
│   ├── api.js
│   ├── brand
│   │   └── brand.js
│   └── user   
│        └── user.js        
├── helpers
│   ├── errorHandler.js
│   └── jwt.js
└── services
    └── brand.js

```


## Usage

* Running API server locally
```
npx nodemon index.js
```


* GET getBrands
```
localhost:3000/api/brand/brands
```
* GET getBrandsName
```
localhost:3000/api/brand/brands/:name
```
* GET getCategoryTree
```
localhost:3000/api/brand/categories
```
* GET getCategoryAttributes
```
localhost:3000/api/brand/category/:id
```
