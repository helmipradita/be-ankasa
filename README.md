<br />
<p align="center">

  <h3 align="center">Flyer App | Ankasa Ticket</h3>
  <p align="center">
    <image align="center" width="200" src='https://res.cloudinary.com/dnu5su7ft/image/upload/v1674602322/illustration_qhdapw.png' />
  </p>

  <p align="center">
    <br />
    <a href="https://github.com/helmipradita/be-ankasa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://api-ticket.helmipradita.dev">View Demo</a>
  </p>
</p>




# Flyer App - Backend

Project API flyer-app that is used to order airplane tickets.

## Sections

### List

* [Screenshoots flow](https://github.com/helmipradita/be-ankasa/edit/main/README.md#screenshots-flow)
  * [Role customer](https://github.com/helmipradita/be-ankasa/edit/main/README.md#role-customer)
  * [Role admin](https://github.com/helmipradita/be-ankasa/edit/main/README.md#role-admin)
* [Run Locally](https://github.com/helmipradita/be-ankasa/edit/main/README.md#run-locally)
* [Demo](https://github.com/helmipradita/be-ankasa/edit/main/README.md#demo)
*  [x] [API Reference - User](#api-reference---user)
*  [x] [API Reference - Ticket](#api-reference---ticket)
*  [x] [API Reference - Booking](#api-reference---booking)
*  [x] [API Reference - Airlines](#api-reference---airlines)
*  [x] [API Reference - Airport](#api-reference---airport)
* [Related Project](#related-project)
* [Contact](#contact)

## Screenshots flow

### Role customer
![Role customer](https://res.cloudinary.com/dnu5su7ft/image/upload/v1671872611/Untitled_Diagram-Role_Customer.drawio_gugkco.png)

### Role admin
![Role admin](https://res.cloudinary.com/dnu5su7ft/image/upload/v1671872590/Untitled_Diagram-Role_Admin.drawio_zhxutn.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/helmipradita/be-ankasa
```

Go to the project directory

```bash
  cd be-ankasa
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
https://api-ticket.helmipradita.dev
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
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. password |

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


## API Reference - Ticket

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
| `departure_id` | `string`   | **Required**. departure_id                      |
| `arrival_id`   | `string`   | **Required**. arrival_id                        |
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
  "airlines_id": "f248e9f9-6069-47a3-946b-376acdfbba39",
  "departure_id": "eb5f8ab4-fa92-40bc-a3d8-251a110737be",
  "arrival_id": "3182a2a8-0a2e-45e1-8679-c7f454da4960",
  "departure": "2022-12-21 12:44:46.273231",
  "arrive": "2022-12-21 16:44:46.273231",
  "price": "2950",
  "stock": "5",
  "gate": "222",
  "terminal": "1A",
  "type": "Economy",
  "code": "1A-222"
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
            "id": "9e3e5b96-6eed-4a04-9c97-d32048ccc846",
            "id_airlines": "f248e9f9-6069-47a3-946b-376acdfbba39",
            "airlines_name": "Super Air Jet",
            "airlines_logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
            "departure_name": "Shizuoka",
            "departure_code": "JPN",
            "arrival_name": "China",
            "arrival_code": "CHN",
            "departure": "2022-12-21T12:44:46.273Z",
            "arrive": "2022-12-23T17:45:44.000Z",
            "departure_time": "12:44",
            "arrival_time": "05:45",
            "departure_full": "Wednesday, 21 December  2022",
            "arrival_full": "Friday   , 23 December  2022",
            "travel_time": {
                "days": 2,
                "hours": 5,
                "seconds": 57,
                "milliseconds": 726.769
            },
            "price": 3250,
            "stock": -1,
            "gate": "222",
            "terminal": "1A",
            "type": "Bisnis",
            "code": "1A-222",
            "created_at": "2022-12-24T08:34:32.690Z",
            "updated_at": "2022-12-26T15:30:38.352Z"
        },
        {
            "id": "65bc7905-2802-474a-be2e-b16f7d5acc51",
            "id_airlines": "f248e9f9-6069-47a3-946b-376acdfbba39",
            "airlines_name": "Super Air Jet",
            "airlines_logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
            "departure_name": "Shizuoka",
            "departure_code": "JPN",
            "arrival_name": "China",
            "arrival_code": "CHN",
            "departure": "2022-12-21T12:44:46.273Z",
            "arrive": "2022-12-21T16:44:46.273Z",
            "departure_time": "12:44",
            "arrival_time": "04:44",
            "departure_full": "Wednesday, 21 December  2022",
            "arrival_full": "Wednesday, 21 December  2022",
            "travel_time": {
                "hours": 4
            },
            "price": 2950,
            "stock": 5,
            "gate": "222",
            "terminal": "1A",
            "type": "Economy",
            "code": "1A-222",
            "created_at": "2022-12-26T16:07:47.224Z",
            "updated_at": null
        },
        {
            "id": "ea226d72-1d77-4910-bd57-111c06de95b5",
            "id_airlines": "f248e9f9-6069-47a3-946b-376acdfbba39",
            "airlines_name": "Super Air Jet",
            "airlines_logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
            "departure_name": "Shizuoka",
            "departure_code": "JPN",
            "arrival_name": "China",
            "arrival_code": "CHN",
            "departure": "2022-12-21T12:44:46.273Z",
            "arrive": "2022-12-21T14:48:49.000Z",
            "departure_time": "12:44",
            "arrival_time": "02:48",
            "departure_full": "Wednesday, 21 December  2022",
            "arrival_full": "Wednesday, 21 December  2022",
            "travel_time": {
                "hours": 2,
                "minutes": 4,
                "seconds": 2,
                "milliseconds": 726.769
            },
            "price": 2950,
            "stock": 5,
            "gate": "222",
            "terminal": "1A",
            "type": "Economy",
            "code": "1A-222",
            "created_at": "2022-12-24T08:34:49.291Z",
            "updated_at": null
        },
        {
            "id": "58f5fd73-e11f-4d98-858a-0dca0d4f8ce3",
            "id_airlines": "93793e6b-d201-4274-a4cc-7b22ae01646f",
            "airlines_name": "Air Asia",
            "airlines_logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671637661/toko/zajtgkjqnpwtog99kn4y.png",
            "departure_name": "Shizuoka",
            "departure_code": "JPN",
            "arrival_name": "Yogyakarta update",
            "arrival_code": "IDN",
            "departure": "2022-12-21T12:44:46.273Z",
            "arrive": "2022-12-26T21:44:59.000Z",
            "departure_time": "12:44",
            "arrival_time": "09:44",
            "departure_full": "Wednesday, 21 December  2022",
            "arrival_full": "Monday   , 26 December  2022",
            "travel_time": {
                "days": 5,
                "hours": 9,
                "seconds": 12,
                "milliseconds": 726.769
            },
            "price": 2720,
            "stock": 9,
            "gate": "111",
            "terminal": "3B",
            "type": "Bisnis",
            "code": "3B-111",
            "created_at": "2022-12-24T08:24:07.312Z",
            "updated_at": null
        }
    ],
    "message": "get ticket success",
    "pagination": {
        "currentPage": 1,
        "limit": 4,
        "totalData": 22,
        "totalPage": 6
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
        "id": "9e3e5b96-6eed-4a04-9c97-d32048ccc846",
        "id_airlines": "f248e9f9-6069-47a3-946b-376acdfbba39",
        "airlines_name": "Super Air Jet",
        "airlines_logo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671737200/toko/t5bidqz8xykfaxjljzoa.jpg",
        "departure_name": "Shizuoka",
        "departure_code": "JPN",
        "arrival_name": "China",
        "arrival_code": "CHN",
        "departure": "2022-12-21T12:44:46.273Z",
        "arrive": "2022-12-23T17:45:44.000Z",
        "departure_time": "12:44",
        "arrival_time": "05:45",
        "departure_full": "Wednesday, 21 December  2022",
        "price": 3250,
        "stock": -1,
        "gate": "222",
        "terminal": "1A",
        "type": "Bisnis",
        "code": "1A-222",
        "created_at": "2022-12-24T08:34:32.690Z",
        "updated_at": "2022-12-26T15:30:38.352Z"
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
| `departure_id` | `string`   | **Required**. departure_id                      |
| `arrival_id`   | `string`   | **Required**. arrival_id                        |
| `departure`      | `timestap` | **Required**. departure with format date and time |
| `arrive`         | `timestap` | **Required**. arrive with format date and time    |
| `price`          | `number`   | **Required**. price                               |
| `stock`          | `number`   | **Required**. stock                               |

Response 200

```json
{
  "airlines_id": "392241f5-3bcb-4986-901e-bc44f1d705e6",
  "departure_id": "3182a2a8-0a2e-45e1-8679-c7f454da4960",
  "arrival_id": "eb5f8ab4-fa92-40bc-a3d8-251a110737be",
  "departure": "2022-12-21 12:44:46.273231",
  "arrive": "2022-12-23 16:14:26.273231",
  "price": "120",
  "stock": "15",
  "gate": "4",
  "terminal": "1A",
  "type": "Ekonomi",
  "code": "1A-004"
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
        "id": "ad6c1fab-0107-43ec-8f3f-8fe4b03ea8fc",
        "airlines_id": "f248e9f9-6069-47a3-946b-376acdfbba39",
        "departure_id": "eb5f8ab4-fa92-40bc-a3d8-251a110737be",
        "arrival_id": "3182a2a8-0a2e-45e1-8679-c7f454da4960",
        "departure": "2022-12-21T12:44:46.273Z",
        "arrive": "2022-12-21T16:44:46.273Z",
        "price": 2950,
        "stock": 5,
        "gate": "222",
        "terminal": "1A",
        "type": "Economy",
        "code": "1A-222",
        "created_at": "2022-12-26T16:12:36.778Z",
        "updated_at": null
    },
    "message": "delete ticket success"
}
```
</details>



## API Reference - Booking

<details>
<summary>Show</summary>
<br>

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
            "id": "b8449683-3731-462c-a66a-f14293114996",
            "id_users": "cc7e4dbd-dc46-4015-9b09-b2a72e0595d9",
            "fullname": "Helmi Pradita Admin",
            "id_tickets": "9e3e5b96-6eed-4a04-9c97-d32048ccc846",
            "airlines_names": "Super Air Jet",
            "departure_name": "China",
            "departure_code": "CHN",
            "arrival_name": "Shizuoka",
            "arrival_code": "JPN",
            "departure": "2022-12-21T12:44:46.273Z",
            "arrive": "2022-12-23T16:14:26.273Z",
            "departure_full": "Wednesday, 21 December  22",
            "departure_time": "12:44",
            "gate": "4",
            "terminal": "1A",
            "type": "Ekonomi",
            "code": "1A-004",
            "passenger_tittle": "Mr",
            "passenger_name": "alvin",
            "passenger_country": "france",
            "payment": 0
        }
    ],
    "message": "GET DATA SUCCESS"
}
```
</details>


## API Reference - Airlines

<details>
<summary>Show</summary>
<br>

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

## API Reference - Airport

<details>
<summary>Show</summary>
<br>

#### Insert Airport

Field auth

| Field    | Type     | Description                                                |
| :------- | :------- | :--------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin insert |

```
  POST /airport
```

Field body form

| Field         | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `name`     | `string` | **Required**. Airport Name            |
| `code`        | `file`   | **Required**. Code of Airport code format IATA   |
| `photo`         | `string` | **Required**. Photo airport |

Response 200

```json
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "5a5dbfce-9aa3-4e95-988c-787d46be0e6d",
        "name": "Hangul",
        "code": "ICN",
        "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1672071951/toko/qey96evhwwiqecpusxr9.jpg"
    },
    "message": "insert airport success"
}
```

#### Update Airlanes

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can update |

Field params

| Field | Type     | Description                      |
| :---- | :------- | :------------------------------- |
| `id`  | `string` | **Required**. get from id airport |


```
  PUT /airport/:id
```

Field body form

| Field         | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `name`     | `string` | **Required**. Airport Name            |
| `code`        | `file`   | **Required**. Code of Airport code format IATA   |
| `photo`         | `string` | **Required**. Photo airport |

Response 200

```json
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "d2191d94-970f-40e1-9563-c0f59e852efb",
        "name": "Yogyakarta update baru",
        "code": "HND",
        "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1672072745/toko/esl8sbmhrfjua3d85ezx.jpg"
    },
    "message": "edit airport success"
}
```

#### Delete Airport

Field auth

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| `bearer` | `string` | **Required**. token from response login, only admin can delete |

```
  DELETE /airport/:id
```

Field params

| Field | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `id`  | `string` | **Required**. get from id airport |

Response 200

```json
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "6f7d5b75-6617-464b-84d8-f0b22fb66f81",
        "name": "Hangul",
        "code": "ICN",
        "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1672072815/toko/aw74nwne8ot6pfgs7u4n.jpg",
        "created_at": "2022-12-26T16:40:15.877Z",
        "updated_at": null
    },
    "message": "delete airport success"
}
```

#### Get Detail Airport

```
  GET /airport/:id
```

Field params

| Field | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `id`  | `string` | **Required**. get from id airport |

Response 200

```json
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id": "0bff71b1-d83c-49ce-a200-59d5d1adb9e2",
        "name": "Tanggerang",
        "code": "IDN",
        "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671854918/toko/y4jbrnnmxzefuzhknmga.jpg",
        "created_at": "2022-12-24T04:08:38.704Z",
        "updated_at": null
    },
    "message": "get airport success"
}
```

#### Get all Airport data

```
  GET /airport
```

Field query parameter

| Field       | Type      | Description                                 |
| :---------- | :-------- | :------------------------------------------ |
| `search`    | `string`  | **Default** empty or input name of airport |
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
            "id": "d2191d94-970f-40e1-9563-c0f59e852efb",
            "name": "Yogyakarta update baru",
            "code": "HND",
            "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1672072745/toko/esl8sbmhrfjua3d85ezx.jpg",
            "created_at": "2022-12-24T04:10:09.741Z",
            "updated_at": "2022-12-26T16:39:05.932Z"
        },
        {
            "id": "0bff71b1-d83c-49ce-a200-59d5d1adb9e2",
            "name": "Tanggerang",
            "code": "IDN",
            "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671854918/toko/y4jbrnnmxzefuzhknmga.jpg",
            "created_at": "2022-12-24T04:08:38.704Z",
            "updated_at": null
        },
        {
            "id": "0d3cc545-6ba4-4956-aa1e-ea3310a85e8c",
            "name": "Sidoarjo",
            "code": "IDN",
            "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671854403/toko/sgxof2qxobxbhedtfbm8.jpg",
            "created_at": "2022-12-24T04:00:05.195Z",
            "updated_at": null
        },
        {
            "id": "eb5f8ab4-fa92-40bc-a3d8-251a110737be",
            "name": "Shizuoka",
            "code": "JPN",
            "photo": "http://res.cloudinary.com/dtow6mgju/image/upload/v1671855415/toko/flhnvrnwjvqwhpjxovfu.jpg",
            "created_at": "2022-12-24T04:16:55.854Z",
            "updated_at": null
        }
    ],
    "message": "get airport success",
    "pagination": {
        "currentPage": 1,
        "limit": 4,
        "totalData": 15,
        "totalPage": 4
    }
}
```
</details>

## Related Project
* [`Flyer Demo`](https://ankasa.rizkyproject.my.id/login)
* [`Flyer REST API`](https://api-ticket.helmipradita.dev/ticket)
* [`Ankasa REST API Repository`](https://github.com/helmipradita/be-ankasa)

## Contact

Contributors names and contact info

* Frontend Developers
  * Easy Destini Manik [@easyManik](https://github.com/easyManik)
  * Alvin Jamal Azkya [@alvinjamal](https://github.com/alvinjamal)
  * Sri Yuniar [@sriyuniar541](https://github.com/sriyuniar541)
* Backend Developers
  * Rizky S [@rizkysyp](https://github.com/rizkysyp)
  * Helmi Pradita [@helmipradita](https://github.com/helmipradita)
