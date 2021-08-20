# QCObjects Handler for Mockup Backend Services

QCObjects Handler for Mockup requests. This handler will allow to handle Mockup urls
like https://example.com/rest/mockup
and get a fake or dummy response in JSON format

## Instructions

1. Install this dependency in your project using npm

```shell
npm i --save qcobjects-handler-mockup
```

2. In your config.json file, create the following paths

```shell
{
  "backend": {
    "routes": [
      {
        "name": "Mockup Url",
        "description": "Get a fake JSON response from a mockup url",
        "path": "^/rest/mockup$",
        "microservice": "com.qcobjects.backend.microservice.mockup",
        "supported_methods": ["POST"],
        "responseHeaders": {
          "Content-Type": "application/json"
        },
        "response": {
          "access_token": "a1b2c3d4e5",
          "expires_in": 3600,
          "token_type": "Bearer"
        }
      }
    ]
  }
}
```

The contents of *response* is a dynamic object, you can specify any property here
or even use a meta processor.

3. Start the QCObjects HTTP2 Server

```shell
qcobjects-server
```

4. Visit https://example.com/openapi.json to view the result
