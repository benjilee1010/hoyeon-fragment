# Art Portfolio Website

A simple, elegant portfolio site to display your artworks, with an About page and Contact form.

## Structure

- **Gallery** (`index.html`) – Grid of artworks with titles and medium/year
- **About** (`about.html`) – Your bio and artist statement
- **Contact** (`contact.html`) – Contact form and alternative contact info

## Adding Your Artworks

1. Create an `artworks` folder in the project root (if it doesn’t exist).
2. Add your image files (e.g. `painting-1.jpg`, `sketch-2.png`).
3. **Remove metadata**: run `npm install` then `npm run strip-metadata` to strip EXIF/location/camera info from all images. Do this after adding new photos.
4. In `index.html`, update each artwork block:

```html
<article class="artwork">
  <div class="artwork-frame">
    <img src="artworks/your-image.jpg" alt="Description of artwork">
  </div>
  <h3 class="artwork-title">Your Artwork Title</h3>
  <p class="artwork-medium">Oil on canvas • 2024</p>
</article>
```

Copy this block for each new piece. The gallery grid will adjust automatically.

## Customizing Content

- **About page**: Replace the placeholder text in `about.html` with your bio. Add a portrait by replacing the `about-image-placeholder` div with `<img src="images/portrait.jpg" alt="Portrait">`.
- **Contact page**: Update the email in `contact-info` and add links to your social profiles. To make the form work, use a service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/).

## Running Locally

Open `index.html` in a browser, or use a simple local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.
