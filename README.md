
# HTTP STATUS TOAST

Introducing a straightforward and practical library designed to assist developers in effectively notifying users about the status of their requests. 😁

## Description

This library offers a simple, concise, and versatile solution, making it easier than ever for developers to communicate essential information to users. With its user-friendly approach, it simplifies the process of conveying the current state of requests, ensuring a seamless user experience. Whether you need to provide updates, alerts, or general notifications, this library has got you covered, enabling you to streamline your development process while delivering clear and informative messages to your users.


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Suggestions and Issues

Suggestions are always welcome!

Please, if you have a suggestion or issue to do, create an issue at this repo.
Follow this example:

`[ToastHeader] Alignments with alignment error`

And inside of it, your description of the suggestion/issue.

Thank you 🚀✨
## Installation

Install `http-status-toast` using npm

```bash
  npm install http-status-toast
```
    
## Demonstration

For use in the simplest way:

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast(response.status, 'en'))
```

Above we have a simple call of the lib function, that will call a notification with a simple message and a simple toast with its theme according to the status passed by params.

### **Default examples by status**

Here we will have some examples of the simplest use of this function, passing just the status and the english lang to the function.

- When the status passed it fits successfull request:

<img src="src/assets/success_status.png" width="500px" />

- When the status passed it fits client error request:

<img src="src/assets/client_error_status.png" width="500px" />

- When the status passed it fits server error request:

<img src="src/assets/server_error_status.png" width="500px" />

- When the status passed it fits unknown type of request:

<img src="src/assets/unknown_status.png" width="500px" />

But if you want to customize more and more, we have some optionals uses for this function.

You can costume:
- Style by `customStyle` params, JSON format
- Horizontal position by `position` params, passing "right" or "left" values
- Language by `lang` params, for now we have just for portuguese ("pt"), spanish ("es") and english ("en")
- Toast duration by `duration` params, passing milisseconds value
- Custom message by `message` params, passing a string

## Storybook controls visualization

<img src="src/assets/storybook_controls_params.png" />

Examples of uses:

- Style

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast({
        status: response.status,
        lang: 'en',
        style: { "font-family": "Times new Roman", "color": "red" }
    }))
```

- Position

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast({
        status: response.status,
        lang: 'en',
        position: "left"
    }))
```

- Language

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast({
        status: response.status,
        lang: 'pt'
    }))
```

- Duration

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast({
        status: response.status,
        lang: 'pt',
        duration: 6000, // 6 seconds
    }))
```

- Message

```bash
fetch(URL)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error))
    .finally((response) => httpStatusToast({
        status: response.status,
        lang: 'en',
        message: response.data.message || "Try again in 10 minutes",
    }))
```
And that's it! ❤️
<hr/>

### Thank you for using my first lib, and thank you for reading till here!

## Created by me [@ninamarq](https://www.github.com/ninamarq) 🚀✨
