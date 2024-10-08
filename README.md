# Hazel

### Yet another jQuery notification plugin. Made for personal use. Works fine.

#### Install:

Add `hazel.js` to your project or load from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="path/to/hazel.js"></script>
```

OR
```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/ali-aydin/hazel@v1.0.0/hazel.js"></script>
```

#### Usage: 
```js
$(this).hazel(message, type, duration);
```

#### Example:
```js
$(this).hazel('This is a primary notification', 'primary', 3000);
```

#### Types:
`success`, `warning`, `danger`, `dark`, `primary`
