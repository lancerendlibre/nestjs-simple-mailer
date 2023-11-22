## Description

A simple email sending service build with nestjs.

## Installation
Step 1:
```bash
$ pnpm install
```
Step 2:
```bash
$ cp env.example .env
```

And change set all the corresponding values, otherwise the app won't start.


## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Send an email
```shell
/POST /signed-mailer/send 
{
  "to": "your@email.address",
  "subject": "this is a subject",
  "content": "this is the content"
}
```

or a `curl` command against the app running locally:

```shell
$ curl -X POST \
  http://localhost:3000/signed-mailer/send \
  -H 'Content-Type: application/json' \
  -d '{
    "to": "lancerendlibre@gmail.com",
    "subject": "this is a subject",
    "content": "this is the content"
  }'
```