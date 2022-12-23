
# Flyer App - Backend

Project API flyer-app that is used to order airplane tickets.



## Run Locally

Clone the project

```bash
  git clone https://github.com/helmipradita/flyer-be
```

Go to the project directory

```bash
  cd flyer-be
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  HOST=
  PORT=

  JWT_KEY=

  PG_CONNECT=
  PG_USER=
  PG_HOST=
  PG_DB=
  PG_PASS=
  PG_PORT=

  MAIL_USERNAME=
  MAIL_PASSWORD=
  OAUTH_CLIENTID=
  OAUTH_CLIENT_SECRET=
  OAUTH_REFRESH_TOKEN=

  PHOTO_CLOUD_NAME=
  PHOTO_KEY=
  PHOTO_SECRET=
```

Start the server

```bash
  npm run dev
```


## Demo

API deploy https://flyer-be-production.up.railway.app


## API Reference - User

API user sendiri dibagi menjadi 2 role yaitu customer dan admin, sehingga pendaftaran akun terdapat 2 endpoint.

#### Register customer

```
  POST /user/register/customer
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fullname` | `string` | **Required**. fullname |
| `email` | `string` | **Required**. with format email|
| `password` | `string` | **Required**. password |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
      "email": "helmipradit.aa@gmail.com"
    },
    "message": "register success please check your email"
  }
```

#### Register admin

```
  POST /user/register/admin
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fullname` | `string` | **Required**. fullname |
| `email` | `string` | **Required**. with format email|
| `password` | `string` | **Required**. password |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
      "email": "helmipradit.aa@gmail.com"
    },
    "message": "register success please check your email"
  }
```

#### Verification

```
  POST /user/verification
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. with format email|
| `otp` | `string` | **Required**. otp get from inbox email |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": "helmipradit.aa@gmail.com",
    "message": " verification email success"
  }
```

#### Forgot password

```
  POST /user/forgot-password
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. with format email|

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": null,
    "message": "send email success"
  }
```

#### Reset password

```
  POST /user/reset-password/:token
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. token get from inbox email|

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": null,
    "message": "change password success"
  }
```

#### Login

```
  POST /user/login
```

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. with format email|
| `password` | `string` | **Required**. password |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
      "id": "a4410b5a-548a-4166-8529-f174b52b5c10",
      "fullname": "Helmi Pradita",
      "email": "helmipradit.aa@gmail.com",
      "phone": null,
      "city": null,
      "address": null,
      "poscode": null,
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1671602986/flyer/default_profile.png",
      "role": "customer",
      "otp_expired": null,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NDEwYjVhLTU0OGEtNDE2Ni04NTI5LWYxNzRiNTJiNWMxMCIsImZ1bGxuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXQuYWFAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcxNzcwMjgyLCJleHAiOjE2NzE3NzM4ODJ9.riNMHgqZEepvodUdyAdUHTU6yJZVdyCZ5wfES8DouPo",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NDEwYjVhLTU0OGEtNDE2Ni04NTI5LWYxNzRiNTJiNWMxMCIsImZ1bGxuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXQuYWFAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjcxNzcwMjgyLCJleHAiOjE2NzE4NTY2ODJ9.JYirZIOVxl3P2zs_-mhILzWY7k83H-NWnqWTAAHz97A"
    },
    "message": "login success"
  }
```

#### Get profile user

```
  GET /user/profile
```

Field auth

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer` | `string` | **Required**. token from response login|

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
      "id": "a4410b5a-548a-4166-8529-f174b52b5c10",
      "fullname": "Helmi Pradita",
      "email": "helmipradit.aa@gmail.com",
      "phone": null,
      "city": null,
      "address": null,
      "poscode": null,
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1671602986/flyer/default_profile.png",
      "role": "customer"
    },
    "message": "get data success"
  }
```

#### Edit profile user

```
  PUT /user/profile
```

Field auth

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer` | `string` | **Required**. token from response login|

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fullname` | `string` | **Required**. fullname|
| `phone` | `number` | **Required**. phone|
| `city` | `string` | **Required**. city|
| `address` | `string` | **Required**. address|
| `poscode` | `number` | **Required**. poscode|
| `photo` | `file` | **Required**. photo|

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
      "id": "a4410b5a-548a-4166-8529-f174b52b5c10",
      "fullname": "Helmi Pradita Customer",
      "phone": "085708572498",
      "city": "Mojokerto",
      "address": "JL Anggrek No 2",
      "poscode": "61634",
      "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671770615/toko/r0swumqhzuhczhv6iguu.png"
    },
    "message": "update data success"
  }
```
## API Reference - Ticket

API ticket digunakan untuk menambahkan, melihat, mengedit dan menghapus ticket pesawat.

#### Insert ticket

```
  POST /ticket/add
```

Field auth

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert|

Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `airlines_id` | `string` | **Required**. get from airlines |
| `departure_city` | `string` | **Required**. departure_city|
| `arrival_city` | `string` | **Required**. arrival_city |
| `departure` | `timestap` | **Required**. departure with format date and time |
| `arrive` | `timestap` | **Required**. arrive with format date and time|
| `price` | `number` | **Required**. price |
| `stock` | `number` | **Required**. stock |
| `gate` | `number` | **Required**. gate |
| `terminal` | `string` | **Required**. terminal |
| `type` | `string` | **Required**. type airlines |
| `code` | `string` | **Required**. code from combine gate and terminal |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "4a728874-263d-4da5-a0ba-bf157ef728ec",
        "airlines_id": "392241f5-3bcb-4986-901e-bc44f1d705e6",
        "departure_city": "Jakarta",
        "arrival_city": "Medan",
        "departure": "2022-12-21 12:44:46.273231",
        "arrive": "2022-12-21 16:44:46.273231",
        "price": "320",
        "stock": "100",
        "gate": "1",
        "terminal": "1A",
        "type": "Bisnis",
        "code": "1A-001"
    },
    "message": "insert ticket success"
  }
```

#### Get all ticket

```
  GET /ticket
```

Field query parameter

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Default** empty or input name of airlines |
| `sortBy` | `string` | **Default** price or input any field |
| `sortOrder` | `string` | **Default** DESC or input ASC for sorting |
| `page` | `timestap` | **Default** 1 or input any number page |
| `limit` | `timestap` | **Default** 5 or input any number limit |

Response 200

```json
    {
    "success": true,
    "statusCode": 200,
    "data": [
        {
        "id": "1780f206-3be1-4e99-b696-f2aa7ade6837",
        "airlines_names": "Lion Air",
        "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671637485/toko/i8xpvrukruihmwbtbods.png",
        "departure_city": "Surabaya",
        "arrival_city": "Tokyo",
        "departure": "2022-12-22T08:44:46.273Z",
        "arrive": "2022-12-24T08:44:46.273Z",
        "price": 3000,
        "stock": 10,
        "gate": "1",
        "terminal": "4B",
        "type": "Economy",
        "code": "4B-001"
        },
        {
        "id": "e75147fe-ec70-477d-a97c-9650479b5fa5",
        "airlines_names": "Garuda Indonesia",
        "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671638721/toko/scjbbrcuczrp5qlhrha6.png",
        "departure_city": "Jakarta",
        "arrival_city": "Singapore",
        "departure": "2022-12-21T05:44:46.273Z",
        "arrive": "2022-12-21T09:44:46.273Z",
        "price": 400,
        "stock": 30,
        "gate": "1",
        "terminal": "1B",
        "type": "Economy",
        "code": "1B-001"
        },
        {
        "id": "e6ce7cb3-4d89-46a0-b065-d02c652d7716",
        "airlines_names": "Garuda Indonesia",
        "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671638721/toko/scjbbrcuczrp5qlhrha6.png",
        "departure_city": "China",
        "arrival_city": "Jepang",
        "departure": "2022-12-21T05:44:46.273Z",
        "arrive": "2022-12-21T09:44:46.273Z",
        "price": 320,
        "stock": 10,
        "gate": "4",
        "terminal": "2B",
        "type": "Bisnis",
        "code": "2B-004"
        },
        {
        "id": "5e84d311-252d-4afc-b40a-761d9c059076",
        "airlines_names": "Lion Air",
        "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671637485/toko/i8xpvrukruihmwbtbods.png",
        "departure_city": "Australia",
        "arrival_city": "Singapore",
        "departure": "2022-12-21T05:44:46.273Z",
        "arrive": "2022-12-21T09:44:46.273Z",
        "price": 320,
        "stock": 10,
        "gate": "202",
        "terminal": "1A",
        "type": "Economy",
        "code": "1A-202"
        }
    ],
    "message": "get ticket success",
    "pagination": {
        "currentPage": 1,
        "limit": 4,
        "totalData": 18,
        "totalPage": 5
    }
  }
```

#### Get ticket by id

```
  GET /ticket/:id
```

Field params

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. get from id ticket |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "afced89e-aa62-4021-b963-41cdb717a842",
        "airlines_names": "Garuda Indonesia",
        "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671638721/toko/scjbbrcuczrp5qlhrha6.png",
        "departure_city": "Bali",
        "arrival_city": "Medan",
        "departure": "2022-12-21T05:44:46.273Z",
        "arrive": "2022-12-21T09:44:46.273Z",
        "price": 320,
        "stock": 10,
        "gate": "3",
        "terminal": "1A",
        "type": "Economy",
        "code": "1A-003",
        "created_at": "2022-12-22T21:58:20.119Z",
        "updated_at": "2022-12-23T00:03:03.570Z"
    },
    "message": "get ticket success"
  }
```

#### Update ticket

```
  PUT /ticket/:id
```

Field params

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. get from id ticket |

Field auth

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert|


Field body form

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `departure_city` | `string` | **Required**. departure_city |
| `arrival_city` | `string` | **Required**. arrival_city |
| `departure` | `timestap` | **Required**. departure with format date and time |
| `arrive` | `timestap` | **Required**. arrive with format date and time |
| `price` | `number` | **Required**. price |
| `stock` | `number` | **Required**. stock |

Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "afced89e-aa62-4021-b963-41cdb717a842",
        "airlines_id": "392241f5-3bcb-4986-901e-bc44f1d705e6",
        "departure_city": "Jakarta",
        "arrival_city": "Medan",
        "departure": "2022-12-21 12:44:46.273231",
        "arrive": "2022-12-21 16:44:46.273231",
        "price": "120",
        "stock": "15",
        "gate": "4",
        "terminal": "1A",
        "type": "Ekonomi",
        "code": "1A-004"
    },
    "message": "update ticket success"
  }
```

#### Delete ticket

```
  DELETE /ticket/:id
```

Field params

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. get from id ticket |

Field auth

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert|


Response 200

```json
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "61e033e2-587a-42f6-b74b-fb74497b4e78",
        "airlines_id": "93793e6b-d201-4274-a4cc-7b22ae01646f",
        "departure_city": "Jakarta",
        "arrival_city": "Medan",
        "departure": "2022-12-21T05:44:46.273Z",
        "arrive": "2022-12-21T09:44:46.273Z",
        "price": 320,
        "stock": 10,
        "created_at": "2022-12-21T12:32:39.704Z",
        "updated_at": "2022-12-21T12:32:57.054Z",
        "gate": "1",
        "terminal": "1B",
        "type": "Economy",
        "code": "1B-001"
    },
    "message": "delete ticket success"
  }
```
