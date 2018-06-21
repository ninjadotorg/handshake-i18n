# Styles

## Bootstrap

### Breadpoints and positions

> https://getbootstrap.com/docs/4.0/layout/grid/#grid-options

- sm 576px
- md 768px
- lg 992px
- xl 1200px

SCSS file: `/src/styles/_repsonsive.scss`

Usage example with right positions:

```scss
body {
  background-color: #f00;
  @include repsond(md) {
    background-color: #00f;
  }
  @include respond(sm) {
    background-color: #0f0;
  }
  // ... xs -> lg -> md -> sm
}
```
