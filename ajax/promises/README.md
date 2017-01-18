#prominsingAjax

This is a tool to make **ajax calls** with **Promise**.

An example of using this tool would be like this:

``` javascript
ajax({
	type: 'GET',
	url: 'http://localhost:3000/'
}))
.then((res) => {})
.catch((error) => {});
```

**Parameters:**

- `url` -> The URL string.
- `type` -> The method HTTP.
- `[parse]` -> Boolean. Default to false. If you set this to true, the JSON obtained will be parsed.
- `[async]` -> Boolean. Default to true (false makes a synchronous call).
- `[data]` -> Object with the data to send.

Another example using more parameters would be like this:

``` javascript
ajax({
	type: 'POST',
    data: {key: value},
    parse: true,
	url: 'http://localhost/test'
}))
.then((res) => {
// This response is already parsed.
})
.catch((error) => {
// If anything goes wrong, this code will be executed.
});
```