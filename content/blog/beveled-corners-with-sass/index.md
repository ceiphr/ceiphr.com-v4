---
title: Beveled Corners with Sass
date: "2021-07-04T22:12:03.284Z"
icons: ["sass", "marvel", "borderlands"]
description: "Three ways to create beveled corners with Sass and mixins."
unlisted: true
---

Go to [borderlands.com](https://borderlands.com/en-US/), [marvel.com](https://www.marvel.com/) and [whereismaurice.com](https://whereismaurice.com/). All three sites contain elements with beveled (specifically, chamfered) corners. Each site has taken an entirely different approach when making them. Here are those approaches, their strengths and their shortcomings:

## Sprite Map

On desktop, [borderlands.com](https://borderlands.com/en-US/) looks pretty clean. You wouldn't notice it, but they're leveraging a sprite map for a lot of their UI. Specifically, this sprite map:

![Borderlands.com Sprite Map](borderlands-sprite-map.png)

Using a sprite map for beveled corners can be useful because it will work with much older browsers, since a `background-image` for the sprite map and `flexbox` for connecting them is all you need:

```scss
.sprite {
  background-image: url('https://example.com/sprite.png');
  background-size: 475px 440px;

  width: 28px;
  height: 61px;
}

.button {
  display: flex;

  &-left {
    @extend .sprite;
    background-position: -286px -341px;
  }

  &-right {
    @extend .sprite;
    background-position: -257px -341px;
  }
}
```

For the button's body, you can use some Sass or CSS, since there isn't anything fancy about it. But, if you're going to use sprites, you might as well make this a sprite too for consistency. I mean, _that is_ what the [borderlands.com](https://borderlands.com/en-US/) developers did after all:

```scss
.button-body {
  background-image: url('https://example.com/sprite.png');
  background-size: 100% 100%;

  height: 61px;
  max-width: 12em;
  min-width: 165px;
  margin-left: -1px;
  margin-right: -1px;

  display: inline-block;
  flex: 1 1 auto;
  text-align: center;

  p {
    display: inherit;
    margin-top: 1.25rem;

    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
  }
}
```

Of course because the sides of the button are sprites, this approach is rigid. Each element may need multiple sprites. They must be appropriately sized. These elements can't stretch or shrink. And, if an element needs to be tweaked, you can't do much with Sass or CSS.

It's also important to mention, this approach needs three `div` elements (one for each background image):

```html
<div class="button">
  <div class="button-left"></div>
  <div class="button-body">
    <p>Sprite Button</p>
  </div>
  <div class="button-right"></div>
</div>
```

I would only recommend this approach if you're going to use it on elements with fixed sizes. You'll also need to spin up Photoshop anytime you want to tweak a button's color or dimensions, which isn't fun.

<iframe height="200" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/ceiphr/embed/qBmEwMp?defaultTab=result&theme-id=39629" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ceiphr/pen/qBmEwMp">
  </a> by Ari (<a href="https://codepen.io/ceiphr">@ceiphr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**Note**: I didn't make the sprites used for that button. They were taken from [borderlands.com](https://borderlands.com/en-US/) and are owned by Gearbox Software LLC.

## Pseudo Elements

[marvel.com](https://www.marvel.com/) takes a slightly nicer approach.  `::before` and `::after` are used to create the
top and bottom halves of elements. Both pseudo-elements contain a `repeating-linear-gradient` as their background image, which is a white line at a 45-degree angel.

The main caveat with this approach is the _insane_ amount of CSS required to get it working. It took me two hours and 70 lines of Sass to create a working example in CodePen. Here is the main bit:

```scss
.button {
  background-color: transparent;
  display: inline-block;
  margin: 15px auto;
  position: relative;

  &:after,
  &:before {
    border-color: white;
    border-style: solid;
    content: "";

    display: block;
    height: 16px;
  }

  &:before {
    top: 0;
    right: 0;
    border-width: 1px 1px 0 0;
    margin-left: 16px;
  }

  &:after {
    bottom: 0;
    left: 0;
    border-width: 0 0 1px 1px;
    margin-right: 16px;
  }
}
```

That chunk of code does everything _except_ the beveled corners. Yes, 34 lines of code for making half an outline for a button. At least, you only need one `div` element for it to work. Here are the other **40 LINES OF CODE** for the beveled edges:

```scss
.inner {
  display: block;
  padding: 0 35px;

  text-align: center;
  text-transform: uppercase;
  line-height: 16px;

  background-color: transparent;
  border-left: 1px solid white;
  border-right: 1px solid white;
  color: white;

  &:after,
  &:before {
    border-style: solid;
    border-color: transparent;
    border-width: 0 0 16px 16px;
    content: "";
    position: absolute;

    background-size: 16px 24px;
    background-image: repeating-linear-gradient(
                    -45deg,
                    white,
                    white 1px,
                    transparent 0,
                    transparent 16px
    );
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
    transform: rotate(180deg);
  }
}
```

Nearly 80 lines, just for a button. But in the end, you didn't have to use sprites, and you get the ability to modify color and sizing using Sass, which is great. As a bonus, you only need one `div` and a `span` for this to work:

```html
<div class="button">
  <span class="inner">
    Button Out.
  </span>
</div>
```

No need to boot up Photoshop every time a button needs a color tweaked. Instead, get a migraine whenever you need to debug all that pseudo-element goodness.

<iframe height="200" style="width: 100%;" scrolling="no" title="Beveled Corners with Pseudo-elements" src="https://codepen.io/ceiphr/embed/b79c33ed3339000e33f8a3d50a1b3553?defaultTab=result&theme-id=39629" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ceiphr/pen/b79c33ed3339000e33f8a3d50a1b3553">
  Beveled Corners with Pseudo-elements</a> by Ari (<a href="https://codepen.io/ceiphr">@ceiphr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Clip Path

[whereismaurice.com](https://whereismaurice.com/) (ahem, a project of mine), takes the most flexible approach. Let me introduce the `clip-path`. It works just like Photoshop's clipping mask. Currently, all browsers _except_ IE support it with shapes and inline SVGs (Firefox includes support for external SVGs).

The other two examples I've given have two key problems which makes them impractical for anything other than fixed UI elements. First, they are dependent on the size of the content and second, they cannot handle content overflow/scrolling. So, for anything other than buttons, they can be a disaster.

The fantastic [Chris Coyier on CSS-Tricks](https://css-tricks.com/notched-boxes/) found that if you apply a beveled polygon to a clip path, it can make any element look great beveled. And from my testing, that includes overflowing and scrollable elements.

Use `@include bevel-diag()` to apply this Sass mixin on any element you want alternating beveled corners on:

```scss
/* 
 * @param $size   Bevel size.
 * @param $alt    Use alternate corners.
 */
@mixin bevel-diag($size: 12px, $alt: false) {
  @if $alt {
    clip-path: polygon(
                    0% $size,
                    $size 0%,
                    100% 0%,
                    100% 100%,
                    100% calc(100% - #{$size}),
                    calc(100% - #{$size}) 100%,
                    100% 100%,
                    0% 100%
    );
  } @else {
    clip-path: polygon(
                    0% 0%,
                    0% 0%,
                    calc(100% - #{$size}) 0%,
                    100% $size,
                    100% 100%,
                    100% 100%,
                    $size 100%,
                    0 calc(100% - #{$size})
    );
  }
}
```

Well, that's great and all, but what if you want all corners to be beveled corners? Here is a much simpler mixing for that:

```scss
/* 
 * @param $size   Bevel size.
 */
@mixin bevel-full($size: 12px) {
  clip-path: polygon(
                  0% $size,
                  $size 0%,
                  calc(100% - #{$size}) 0%,
                  100% $size,
                  100% calc(100% - #{$size}),
                  calc(100% - #{$size}) 100%,
                  $size 100%,
                  0 calc(100% - #{$size})
  );
}
```

The only caveat? None. My code is divine.

Just kidding. Outlines. Outlines are annoying to implement. Here is some example Sass of a beveled button, outline styles included:

```scss
.button {
  color: white;
  background-color: turquoise;
  display: inline-block;
  padding: 1em;
  @include bevel-diag();

  &-alt {
    @extend .button;
    @include bevel-diag($alt: true);
  }

  &-outline {
    @extend .button;
    background-color: white;
    padding: 0;

    .button {
      background-color: black;
      margin: 1px;
      padding: calc(1em - 1px);
    }
  }
}
```

Not as bad as the pseudo-elements, but still not a Van Gogh. Regardless, the HTML isn't too bad either:

```html
<!-- Standard Button -->
<div class="button">Button</div>

<!-- Alternative Button -->
<div class="button-alt">Button</div>

<!-- Fancy Outline Button -->
<div class="button-outline">
  <div class="button">Button Out.</div>
</div>
```

Overall, I think this solution works best. It applies to flexible and fixed elements. You don't need to worry about scrollable `div` elements or overflow. And the code is simpler than the other solutions I've mention.

<iframe height="510" style="width: 100%;" scrolling="no" title="Beveled Corners with clip-path" src="https://codepen.io/ceiphr/embed/bGWNzYw?defaultTab=result&theme-id=39629" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ceiphr/pen/bGWNzYw">
  Beveled Corners with clip-path</a> by Ari (<a href="https://codepen.io/ceiphr">@ceiphr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Wrap Up

Those were three ways to implement beveled corners with Sass. Of course, I'm going to recommend using `clip-path` since that's the approach I've taken with my projects. But, at the end of the day, if any of these approaches work for you, that's great!

If you've found another, _scarier_, way to implement beveled corners, please let me know. I love to see nightmarish spaghetti code for something as mundane as a border style.

P.S. In case you're from the future and one of the example websites has been updated, to no longer use beveled corners, here are Wayback Machine links for [borderlands.com](https://web.archive.org/web/20210701075945/https://borderlands.com/en-US/), [marvel.com](https://web.archive.org/web/20210702001617/https://www.marvel.com/) and [whereismaurice.com](https://web.archive.org/web/20210522172927/https://whereismaurice.com/). I hope you are doing well future person.
