# Hero Section Video Guide

## Overview
The hero section now supports background video for a more dynamic and engaging presentation.

## Video Specifications

### Required File
- **Filename**: `hero-aerospace.mp4`
- **Location**: `/frontend/public/videos/hero-aerospace.mp4`
- **Format**: MP4 (H.264 codec recommended)
- **Dimensions**: 1920x1080 or higher (16:9 aspect ratio)
- **Duration**: 5-10 seconds (looping video)
- **File Size**: Keep under 10MB for optimal loading

## Video Recommendations

### Content Ideas
- ✅ Aerospace/aviation footage (planes, rockets, etc.)
- ✅ Engineering/technology visuals
- ✅ Smooth transitions and professional production
- ✅ Subtle animations with gradual movements
- ✅ Aerospace facility tours or product demos

### Technical Settings
- **Codec**: H.264 (MP4)
- **Bitrate**: 5000-8000 kbps
- **Frame Rate**: 30 FPS (24 FPS also acceptable)
- **Audio**: Muted (built into component)
- **Autoplay**: Enabled (muted only)
- **Loop**: Continuous

## How to Add Your Video

### Option 1: Using FFmpeg (Recommended)
```bash
# Install FFmpeg if not already installed
brew install ffmpeg

# Convert your video to optimized MP4
ffmpeg -i your-video.mov -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k hero-aerospace.mp4

# Move to the videos folder
mv hero-aerospace.mp4 frontend/public/videos/
```

### Option 2: Using Handbrake GUI
1. Download Handbrake (https://handbrake.fr/)
2. Open your video file
3. Select "Fast 1080p30" preset
4. Export as MP4
5. Save to `frontend/public/videos/hero-aerospace.mp4`

### Option 3: Online Video Converter
1. Visit https://cloudconvert.com or similar service
2. Upload your video
3. Convert to MP4 format
4. Download and save to `frontend/public/videos/hero-aerospace.mp4`

## Features Implemented

### Home Hero Component (`/components/home/hero.tsx`)
```jsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/videos/hero-aerospace.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
```

### Main Hero Component (`/components/hero.tsx`)
```jsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-25"
>
  <source src="/videos/hero-aerospace.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-white" />
```

### Key Features
- ✅ Automatic playback on page load
- ✅ Muted for better UX (user can unmute if needed)
- ✅ Continuous loop
- ✅ Works on mobile devices
- ✅ Opacity controls (30% for home hero, 25% for main hero)
- ✅ White overlay gradient to maintain text readability
- ✅ Fallback to white background if video fails

## Performance Optimization

### Video Loading
- Video loads asynchronously
- Non-blocking (content displays while video loads)
- Low opacity (25-30%) reduces visual impact on performance

### Browser Support
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari (iOS 10+)
- ✅ Android browsers

## Troubleshooting

### Video Not Playing?
1. **Check file location**: Ensure `hero-aerospace.mp4` is in `frontend/public/videos/`
2. **Verify format**: Confirm file is valid MP4 with H.264 codec
3. **Check browser console**: Look for any error messages
4. **Clear browser cache**: Sometimes cached versions cause issues
5. **Test in different browser**: Rules out browser-specific issues

### Video Too Large?
1. Reduce resolution from 1920x1080 to 1280x720
2. Lower bitrate to 3000-4000 kbps
3. Use FFmpeg with higher CRF value: `ffmpeg -i input.mp4 -crf 28 output.mp4`

### Video Not Looping?
- The component uses `loop` attribute
- Videos under 10 seconds loop smoothly
- For longer videos, trim to 5-10 seconds

## Alternative Approaches

### If You Don't Have a Video
The components have fallbacks:
1. Video fails to load → white background displays
2. Opacity controls allow text to remain readable even with video

### Using a Different Video Format
Update the `<source>` tag in components:
```jsx
<source src="/videos/hero-aerospace.webm" type="video/webm" />
<source src="/videos/hero-aerospace.mp4" type="video/mp4" />
```

## Testing the Video

### Local Testing
1. Start development server: `npm run dev`
2. Visit http://localhost:3000
3. Inspect Elements > Network tab
4. Check if video file loads (should see `hero-aerospace.mp4`)
5. Verify playback in hero sections

### Production Testing
After deployment:
1. Clear browser cache
2. Open site in incognito/private mode
3. Check Network tab for video load
4. Verify smooth playback on different devices

## File Size Reference

| Resolution | Bitrate | Duration | File Size |
|-----------|---------|----------|-----------|
| 1920x1080 | 5000 kbps | 10s | ~6.25 MB |
| 1280x720 | 3000 kbps | 10s | ~3.75 MB |
| 1280x720 | 2000 kbps | 10s | ~2.5 MB |

## Next Steps

1. **Prepare your video** using one of the methods above
2. **Place it** in `frontend/public/videos/hero-aerospace.mp4`
3. **Test locally** by running `npm run dev`
4. **Deploy** and verify in production

---

For questions or issues, refer to the component files or check the browser console for error messages.
