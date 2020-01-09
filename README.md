# element-addclass

Tiny helper module for adding classes to elements.

This emulates jQuery's `addClass` behaviour: it works for multiple elements, can take a space delimitted String for multiple classes, won't add duplicate classes, and even works in awful browsers.

```javascript
addClass(elements, 'class-1 class-2 class-3');
```

## Installation and usage

Grab from NPM

```
npm install element-addclass
```

And import it

```javascript
import addClass from 'element-addclass';
```

Or grab the minified JavaScript from unpkg

```html
<script src="https://unpkg.com/element-addclass"></script>
```
