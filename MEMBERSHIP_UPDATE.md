# Membership Page - Implementation Guide

## Changes Made

### 1. **Modal System Implementation** ✅
- Created a reusable `MembershipFormModal` component (`/components/membership-form-modal.tsx`)
- All membership application buttons now trigger modals instead of redirecting to external links
- Forms are embedded as iframes within the modal for seamless user experience

### 2. **Updated Membership Page** ✅
- Modified `/app/membership/page.tsx` to use modals
- Added state management for 5 different modals:
  - **Student Member Modal** - Shows ISL Student Leader Fellowship form
  - **Professional Member Modal** - Shows IGF Apply Form
  - **Institutional Member Modal** - Shows IGF Apply Form
  - **ISL Modal** - For special programs section
  - **IGF Modal** - For special programs section

### 3. **Special Programs Section** ✅
Added a new "Special Programs & Initiatives" section with:
- **Two Buttons at Top** - Positioned horizontally for better layout:
  - **ISL Student Leader Fellowship** (Blue button on left)
  - **IGF Apply Form** (Purple button on right)
- **Program Image Below** - Beautiful image from `/public/iaaa fellow programs.png`
- **Responsive Design** - Buttons stack vertically on mobile devices
- Both buttons open their respective modals with embedded forms

## How to Update the Image

The image from `/public/iaaa fellow programs.png` is now integrated into the Special Programs section.

**Current Image Path**: `/public/iaaa fellow programs.png`

To replace with a different image:
1. Edit `/app/membership/page.tsx` (around line 127)
2. Find the line: `src="/iaaa fellow programs.png"`
3. Replace the filename with your new image path
4. Make sure your image is in `/public/` folder

Example:
```tsx
<img 
  src="/your-new-image.jpg" 
  alt="Special Programs - ISL Student Leader Fellowship and IGF Apply Form"
  className="w-full max-w-2xl h-auto rounded-xl shadow-md object-cover"
/>
```

## Form URLs Used

1. **ISL Student Leader Fellowship**: `https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/ISLFRegistration/formperma/jnGdNb6c-JEv0CGhAUCIubkBXcEEs07q0_HWXX8YhLs`

2. **IGF Apply Form**: `https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/IGFRegistration/formperma/iR2NRQRSMH1fLnrWop6vpx4MJpEbTOb68jyVvflMd1s`

## Features

✅ **Modal-based Forms**: No more "Page Not Found" errors - forms display in beautiful modals
✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
✅ **Fallback Links**: If iframe fails to load, users can open forms in new window
✅ **Notice Messages**: Each modal shows a helpful notice message
✅ **Smooth Animations**: Scroll-triggered animations on the special programs section
✅ **Beautiful UI**: Gradient buttons, rounded corners, smooth transitions

## Files Modified

1. `/app/membership/page.tsx` - Updated with modal states and special programs section
2. Created `/components/membership-form-modal.tsx` - New reusable modal component

## Testing

The modals are fully functional. To test:
1. Click on "Join as Student Member", "Apply as Professional", or "Register Your Institution" buttons
2. Or scroll down to the "Special Programs & Initiatives" section and click either button
3. Forms should load inside a modal dialog
4. Close button (X) in top-right closes the modal
5. Clicking outside the modal also closes it
