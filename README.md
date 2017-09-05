# scrollTo - simple jQuery ScrollTo library

## Installation

`npm install https://github.com/spidersAgency/scrollTo.git --save`

and in your code:

`import scrollTo from 'sa_scroll_to';`

## Basic usage

Just add class `scrollto`, `data-scroll-to="target"` to your element and thats all. Take a look a this example:

```html
<a href="#" class="scrollto" data-scroll-to="footer">Hello World</a>
```

`target` can be a DOM element (like `body`),  a class (`.some-class`) or an id (`#home`).

## Options
`data-scroll-to=""` - scroll target

`data-duration="400"` - animation duration

`data-offset="0"` - scroll offset

`data-easing="swing"` - scroll easing

`data-base="html,body` - scroll base
