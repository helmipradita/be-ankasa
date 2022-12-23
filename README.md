# Flyer App - Backend

Project API flyer-app that is used to order airplane tickets.

## Sections

### List

- [Screenshoots flow](https://github.com/helmipradita/flyer-be/edit/main/README.md#screenshots-flow)
  - [Role customer](https://github.com/helmipradita/flyer-be/edit/main/README.md#role-customer)
  - [Role admin](https://github.com/helmipradita/flyer-be/edit/main/README.md#role-admin)
- [Run Locally](https://github.com/helmipradita/flyer-be/edit/main/README.md#run-locally)
- [Demo](https://github.com/helmipradita/flyer-be/edit/main/README.md#demo)
- [API Reference - User](#api-reference---user)
- [API Reference - Ticket](#api-reference---ticket)
- [API Reference - Booking](#api-reference---booking)
- [API Reference - Airlines](#api-reference---airlines)

## Screenshots flow

### Role customer
![Role customer](https://res.cloudinary.com/dnu5su7ft/image/upload/v1671814860/Role_Customer_rulh7c.png)

### Role admin
![Role admin](https://res.cloudinary.com/dnu5su7ft/image/upload/v1671814860/Role_Admin_uldtqc.png)


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

API deploy 

```bash
https://flyer-be-production.up.railway.app
```

## API Reference - User

<details>
<summary>Show</summary>
<br>

#### Register customer

```
  POST /user/register/customer
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `fullname` | `string` | **Required**. fullname          |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

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

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `fullname` | `string` | **Required**. fullname          |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

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

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `email` | `string` | **Required**. with format email        |
| `otp`   | `string` | **Required**. otp get from inbox email |

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

| Field   | Type     | Description                     |
| :------ | :------- | :------------------------------ |
| `email` | `string` | **Required**. with format email |

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

| Field   | Type     | Description                              |
| :------ | :------- | :--------------------------------------- |
| `token` | `string` | **Required**. token get from inbox email |

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

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

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

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

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

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `fullname` | `string` | **Required**. fullname |
| `phone`    | `number` | **Required**. phone    |
| `city`     | `string` | **Required**. city     |
| `address`  | `string` | **Required**. address  |
| `poscode`  | `number` | **Required**. poscode  |
| `photo`    | `file`   | **Required**. photo    |

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

</details>


## API Reference - User

<details>
<summary>Show</summary>
<br>

#### Insert ticket

```
  POST /ticket/add
```

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert |

Field body form

| Field            | Type       | Description                                       |
| :--------------- | :--------- | :------------------------------------------------ |
| `airlines_id`    | `string`   | **Required**. get from airlines                   |
| `departure_city` | `string`   | **Required**. departure_city                      |
| `arrival_city`   | `string`   | **Required**. arrival_city                        |
| `departure`      | `timestap` | **Required**. departure with format date and time |
| `arrive`         | `timestap` | **Required**. arrive with format date and time    |
| `price`          | `number`   | **Required**. price                               |
| `stock`          | `number`   | **Required**. stock                               |
| `gate`           | `number`   | **Required**. gate                                |
| `terminal`       | `string`   | **Required**. terminal                            |
| `type`           | `string`   | **Required**. type airlines                       |
| `code`           | `string`   | **Required**. code from combine gate and terminal |

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

| Field       | Type       | Description                                 |
| :---------- | :--------- | :------------------------------------------ |
| `search`    | `string`   | **Default** empty or input name of airlines |
| `sortBy`    | `string`   | **Default** price or input any field        |
| `sortOrder` | `string`   | **Default** DESC or input ASC for sorting   |
| `page`      | `timestap` | **Default** 1 or input any number page      |
| `limit`     | `timestap` | **Default** 5 or input any number limit     |

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

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id ticket |

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

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id ticket |

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert |

Field body form

| Field            | Type       | Description                                       |
| :--------------- | :--------- | :------------------------------------------------ |
| `departure_city` | `string`   | **Required**. departure_city                      |
| `arrival_city`   | `string`   | **Required**. arrival_city                        |
| `departure`      | `timestap` | **Required**. departure with format date and time |
| `arrive`         | `timestap` | **Required**. arrive with format date and time    |
| `price`          | `number`   | **Required**. price                               |
| `stock`          | `number`   | **Required**. stock                               |

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

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id ticket |

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can insert |

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

## API Reference - Booking

API Booking digunakan untuk menambahkan, melihat, mengedit dan menghapus booking users.

#### Insert Booking

```
  POST /order/
```

Field auth

| Field    | Type     | Description                                                              |
| :------- | :------- | :----------------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin and users can insert |

Field body form

| Field        | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `id_users`   | `string` | **Required**. get from Header payload token |
| `id_tickets` | `string` | **Required**. get from tickets              |
| `tittle`     | `string` | **Required**. Passenger Tittle              |
| `name`       | `string` | **Required**. passenger fullname            |
| `country`    | `string` | **Required**. passenger country             |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "BOOKING SUCCESS"
}
```

#### Get All Booking data For Users

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only users can see it |

```
  GET /order/users
```

Field query parameter

| Field       | Type     | Description                                     |
| :---------- | :------- | :---------------------------------------------- |
| `search`    | `string` | **Default** empty or input name of arrival city |
| `sortBy`    | `string` | **Default** id or input any field               |
| `sortOrder` | `string` | **Default** DESC or input ASC for sorting       |
| `page`      | `string` | **Default** 1 or input any number page          |
| `limit`     | `string` | **Default** 5 or input any number limit         |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "de1ba678-5740-4aa0-a3a2-c6d795da06df",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "payment": 0,
      "airlines_names": "Air Asia",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z",
      "code": "1B-003"
    },
    {
      "id": "4b4c9c0b-4e9e-403c-842b-7dc3f28ab7fe",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "payment": 0,
      "airlines_names": "Air Asia",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z",
      "code": "1B-003"
    },
    {
      "id": "2",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "payment": 0,
      "airlines_names": "Air Asia",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z",
      "code": "1B-003"
    },
    {
      "id": "1",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "payment": 0,
      "airlines_names": "Air Asia",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z",
      "code": "1B-003"
    }
  ],
  "message": "GET DATA SUCCESS",
  "pagination": {
    "currentPage": 1,
    "limit": 5,
    "totalData": 6,
    "totalPage": 2
  }
}
```

#### Get All Data Booking For Admin

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can see it |

```
  GET /order/admin
```

Field query parameter

| Field       | Type     | Description                               |
| :---------- | :------- | :---------------------------------------- |
| `searchid`  | `string` | **Default** empty or input id of id users |
| `fullname`  | `string` | **Default** empty or input name of users  |
| `tickets`   | `string` | **Default** empty or input id of tickets  |
| `sortBy`    | `string` | **Default** id or input any field         |
| `sortOrder` | `string` | **Default** DESC or input ASC for sorting |
| `page`      | `string` | **Default** 1 or input any number page    |
| `limit`     | `string` | **Default** 5 or input any number limit   |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "de1ba678-5740-4aa0-a3a2-c6d795da06df",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "id_tickets": "d9047ca3-f16f-4df8-9a25-b07871e4f4c3",
      "payment": 0,
      "airlines_names": "Air Asia",
      "fullname": "Helmi Pradita",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z"
    },
    {
      "id": "4b4c9c0b-4e9e-403c-842b-7dc3f28ab7fe",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "id_tickets": "d9047ca3-f16f-4df8-9a25-b07871e4f4c3",
      "payment": 0,
      "airlines_names": "Air Asia",
      "fullname": "Helmi Pradita",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z"
    },
    {
      "id": "2",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "id_tickets": "d9047ca3-f16f-4df8-9a25-b07871e4f4c3",
      "payment": 0,
      "airlines_names": "Air Asia",
      "fullname": "Helmi Pradita",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z"
    },
    {
      "id": "1",
      "id_users": "1a9e15f4-1935-4878-9cca-0c8ab06c8127",
      "id_tickets": "d9047ca3-f16f-4df8-9a25-b07871e4f4c3",
      "payment": 0,
      "airlines_names": "Air Asia",
      "fullname": "Helmi Pradita",
      "arrival_city": "Surabaya",
      "departure_city": "Bali",
      "departure": "2022-12-21T05:44:46.273Z"
    }
  ],
  "message": "GET DATA SUCCESS",
  "pagination": {
    "currentPage": 1,
    "limit": 5,
    "totalData": 6,
    "totalPage": 2
  }
}
```

#### Update Booking

```
  PUT order/:id
```

Field params

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id orders |

Field auth

| Field    | Type     | Description                                                                 |
| :------- | :------- | :-------------------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin and customer can update |

Field body form

| Field     | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `tittle`  | `string` | **Required**. Passenger Tittle   |
| `name`    | `string` | **Required**. passenger fullname |
| `country` | `string` | **Required**. passenger country  |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "1",
    "tittle": "MR",
    "name": "Johny Handshome",
    "country": "Purbalingga"
  },
  "message": "UPDATE BOOKING SUCCESS"
}
```

#### Delete Booking

```
  DELETE /order/:id
```

Field params

| Field | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `id`  | `string` | **Required**. get from id booking |

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can delete |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "delete data success"
}
```

#### Update Booking Status Payment

```
  PUT order/payment/:id
```

Field params

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id orders |

Field auth

| Field    | Type     | Description                                                                 |
| :------- | :------- | :-------------------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin and customer can update |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "UPDATE STATUS PAYMENT SUCCESS"
}
```

#### Get Detail Booking

Field auth

| Field    | Type     | Description                                                           |
| :------- | :------- | :-------------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin and users can see |

```
  GET /order/detail/:id
```

Field params

| Field | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `id`  | `string` | **Required**. get from id booking |

Response 200

```json
    {
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id": "4b4c9c0b-4e9e-403c-842b-7dc3f28ab7fe",
            "code": "1B-003",
            "type": "Economy",
            "terminal": "1B",
            "gate": "3",
            "departure": "2022-12-21T05:44:46.273Z",
            "departure_city": "Bali",
            "arrival_city": "Surabaya"
        }
  }
```

## API Reference - Airlines

Digunakan untuk Insert,Edit,Delete,Update,Detail dan Get All Data Airlines

#### Insert Airlines

Field auth

| Field    | Type     | Description                                                |
| :------- | :------- | :--------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin insert |

```
  POST /airlines
```

Field body form

| Field         | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `ai_name`     | `string` | **Required**. Airlines Name            |
| `logo`        | `file`   | **Required**. file with Image Format   |
| `pic`         | `string` | **Required**. name of person in charge |
| `phonenumber` | `string` | **Required**. phonenumber              |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "69166b54-33b3-4611-9b3c-041b8093f2df",
    "ai_name": "Japan Airlines",
    "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671788344/toko/cvqfp8v4zrh2rvtktl46.png",
    "pic": "Takuya Hiroshima",
    "phonenumber": "021876525"
  },
  "message": "ADD AIRLINES DATA SUCCESS"
}
```

#### Update Airlanes

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can update |

```
  PUT /airlines
```

Field body form

| Field         | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `ai_name`     | `string` | **Required**. Airlines Name            |
| `logo`        | `file`   | **Required**. file with Image Format   |
| `pic`         | `string` | **Required**. name of person in charge |
| `phonenumber` | `string` | **Required**. phonenumber              |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "UPDATE AIRLINES DATA SUCCESS"
}
```

#### Update Airlanes

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can delete |

```
  DELETE /airlines/:id
```

Field params

| Field | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `id`  | `string` | **Required**. get from id airlines |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": null,
  "message": "DELETE AIRLINES DATA SUCCESS"
}
```

#### Get Detail Airlines

```
  GET /airlines/detail/:id
```

Field params

| Field | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `id`  | `string` | **Required**. get from id airlines |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "f248e9f9-6069-47a3-946b-376acdfbba39",
      "airlines_names": "Super Air Jet",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
      "pic": "Rusdi Kirana",
      "phonenumber": "32145678",
      "created_at": "2022-12-22T12:26:41.355Z",
      "update_at": null
    }
  ],
  "message": "GET AIRLINES DATA SUCCESS"
}
```

#### Get all Airlines data

```
  GET /airlines
```

Field query parameter

| Field       | Type      | Description                                 |
| :---------- | :-------- | :------------------------------------------ |
| `search`    | `string`  | **Default** empty or input name of airlines |
| `sortBy`    | `string`  | **Default** price or input any field        |
| `sortOrder` | `string`  | **Default** DESC or input ASC for sorting   |
| `page`      | `integer` | **Default** 1 or input any number page      |
| `limit`     | `integer` | **Default** 5 or input any number limit     |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "f248e9f9-6069-47a3-946b-376acdfbba39",
      "airlines_names": "Super Air Jet",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
      "pic": "Rusdi Kirana",
      "phonenumber": "32145678",
      "created_at": "2022-12-22T12:26:41.355Z",
      "update_at": null
    },
    {
      "id": "bfafa1b8-979b-4a59-99a7-48080645b8ca",
      "airlines_names": "Super Air Jet ",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737214/toko/ywo8gdr9vk6zenrlxmug.jpg",
      "pic": "Rusdi Kirana",
      "phonenumber": "32145678",
      "created_at": "2022-12-22T12:26:55.486Z",
      "update_at": null
    },
    {
      "id": "93793e6b-d201-4274-a4cc-7b22ae01646f",
      "airlines_names": "Air Asia",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671637661/toko/zajtgkjqnpwtog99kn4y.png",
      "pic": "Sumanto Putra Kusuma",
      "phonenumber": "218786232",
      "created_at": "2022-12-21T08:47:42.638Z",
      "update_at": null
    },
    {
      "id": "3abae5b7-f5bd-4e9e-bc7b-3ce1bc0bf1f0",
      "airlines_names": "Lion Air",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671637485/toko/i8xpvrukruihmwbtbods.png",
      "pic": "Mercusuar Malarange",
      "phonenumber": "218786",
      "created_at": "2022-12-21T08:44:46.273Z",
      "update_at": null
    },
    {
      "id": "392241f5-3bcb-4986-901e-bc44f1d705e6",
      "airlines_names": "Garuda Indonesia",
      "logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671638721/toko/scjbbrcuczrp5qlhrha6.png",
      "pic": "Mercusuar Malarange",
      "phonenumber": "218786",
      "created_at": "2022-12-21T08:46:30.676Z",
      "update_at": "2022-12-21T09:04:27.978Z"
    }
  ],
  "message": "get airlines data success",
  "pagination": {
    "currentPage": 1,
    "limit": 5,
    "totalData": 6,
    "totalPage": 2
  }
}
```
</details>
