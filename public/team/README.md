# Team Photos

Place your team member photos in this folder. The app will automatically pick them up.

## Naming Convention

- **Team Group Photo:** `team-photo.jpg` (or `.png`, `.webp`)
- **Individual Member Photos:** `member-name.jpg` (e.g., `siva-anangi.jpg`, `john-doe.jpg`)

## Recommended Specs

- **Format:** JPG, PNG, or WebP
- **Size:** 800x800px minimum for headshots, 1600x900px for group photos
- **Aspect Ratio:** 1:1 (square) for headshots, 16:9 for group photos
- **Quality:** High quality, well-lit professional photo

## How to Use

1. Drop your photo files into this `public/team/` folder
2. Reference them in components using `/team/filename.jpg`
3. For the Team section (Story.jsx), uncomment the `<img>` tag and update the `src` attribute

### Example

```jsx
// In Story.jsx, replace the placeholder with:
<img src="/team/team-photo.jpg" alt="SortNow Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
