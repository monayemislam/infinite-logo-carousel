# Infinite Logo Carousel

A framework-agnostic infinite logo carousel using CSS and minimal JavaScript. This lightweight package allows you to create smooth, infinitely scrolling logo carousels in multiple directions.

## Demo

Check out the [live demo](https://monayemislam.me/packages/infinite-logo-carousel/demo) to see the Infinite Logo Carousel in action!

## Features

- Pure CSS implementation
- Framework-agnostic (works with any JavaScript framework or vanilla JS)
- Multiple scrolling directions:
  - Left to Right
  - Right to Left
  - Top to Bottom
  - Bottom to Top
- Pause on hover
- Customizable speed and styling
- Responsive design

## Installation

You can install the package via npm:

```bash
npm install infinite-logo-carousel
```

Or include it directly in your HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/infinite-logo-carousel@1.0.0/src/infinite-logo-carousel.css">
<script src="https://unpkg.com/infinite-logo-carousel@1.0.0/src/infinite-logo-carousel.js"></script>
```

## Usage

1. Include the CSS and JS files in your project:

```javascript
import 'infinite-logo-carousel/src/infinite-logo-carousel.css';
import 'infinite-logo-carousel/src/infinite-logo-carousel.js';
```

2. Create the HTML structure for your carousel:

```html
<div class="logos" data-direction="left-to-right">
  <div class="logo_items">
    <img src="path/to/logo1.png" alt="Logo 1">
    <img src="path/to/logo2.png" alt="Logo 2">
    <!-- Add more logo images as needed -->
  </div>
  <div class="logo_items">
    <!-- Duplicate the logos for seamless scrolling -->
    <img src="path/to/logo1.png" alt="Logo 1">
    <img src="path/to/logo2.png" alt="Logo 2">
    <!-- Add more logo images as needed -->
  </div>
</div>
```

3. Initialize the carousel (if using JavaScript):

```javascript
document.addEventListener('DOMContentLoaded', () => {
  new InfiniteLogoCarousel(document.querySelector('.logos'), {
    direction: 'left-to-right',
    speed: 35
  });
});
```

## Configuration

You can configure the carousel using the following data attributes or JavaScript options:

- `data-direction`: Sets the scrolling direction. Options are:
  - `left-to-right`
  - `right-to-left`
  - `top-to-bottom`
  - `bottom-to-top`
- `speed`: Sets the animation duration in seconds (default is 35s).

## Customization

You can customize the appearance of the carousel by overriding the CSS variables or adding your own styles. The main CSS classes are:

- `.logos`: The container for the entire carousel
- `.logo_items`: The container for each set of logos
- `.logo_items img`: Individual logo images

## Browser Support

This carousel supports all modern browsers that implement CSS animations and flexbox.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Md Monayem Islam
- Website: [https://monayemislam.me](https://monayemislam.me)
- GitHub: [@monayemislam](https://github.com/monayemislam)

## Acknowledgements

- Thanks to all contributors who have helped with this project.
- Logo images in the demo are sourced from [World Vector Logo](https://worldvectorlogo.com/).

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/monayemislam/infinite-logo-carousel/issues) on GitHub.
