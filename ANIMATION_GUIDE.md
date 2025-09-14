# Animation Components Guide

This guide documents all the animation components available in the portfolio and how they work.

## Available Animation Components

### 1. FadeIn

**Purpose**: Fades in elements with optional directional movement
**Usage**:

```jsx
<FadeIn delay={0.15} direction="up" distance={20}>
  <h1>Your content</h1>
</FadeIn>
```

**Props**:

- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (default: 0.6)
- `direction`: 'up', 'down', 'left', 'right' (default: 'up')
- `distance`: Movement distance in pixels (default: 20)

### 2. SlideIn

**Purpose**: Slides elements in from specified direction
**Usage**:

```jsx
<SlideIn direction="left" delay={0.2} distance={100}>
  <div>Your content</div>
</SlideIn>
```

**Props**:

- `direction`: 'left', 'right', 'up', 'down' (default: 'left')
- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (default: 0.8)
- `distance`: Movement distance in pixels (default: 100)

### 3. ScaleIn

**Purpose**: Scales elements in with 3D rotation effect
**Usage**:

```jsx
<ScaleIn delay={0.1} scale={0.8}>
  <div>Your content</div>
</ScaleIn>
```

**Props**:

- `delay`: Animation delay in seconds (default: 0)
- `duration`: Animation duration in seconds (default: 0.6)
- `scale`: Initial scale value (default: 0.8)

### 4. HoverScale

**Purpose**: Scales elements on hover and tap
**Usage**:

```jsx
<HoverScale scale={1.05} duration={0.2}>
  <button>Hover me</button>
</HoverScale>
```

**Props**:

- `scale`: Scale value on hover (default: 1.05)
- `duration`: Animation duration in seconds (default: 0.2)

### 5. Stagger

**Purpose**: Animates multiple children with staggered timing
**Usage**:

```jsx
<Stagger staggerChildren={0.1} delayChildren={0.2}>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</Stagger>
```

**Props**:

- `staggerChildren`: Delay between each child animation (default: 0.1)
- `delayChildren`: Initial delay before starting (default: 0)

### 6. Typewriter

**Purpose**: Creates typewriter effect for text
**Usage**:

```jsx
<Typewriter text="Hello World" speed={50} delay={0.5}>
  {/* Content is automatically generated */}
</Typewriter>
```

**Props**:

- `text`: Text to type out
- `speed`: Typing speed in milliseconds (default: 50)
- `delay`: Initial delay in seconds (default: 0)

### 7. ParallaxScroll

**Purpose**: Creates parallax scrolling effect
**Usage**:

```jsx
<ParallaxScroll speed={0.5}>
  <div>Your content</div>
</ParallaxScroll>
```

**Props**:

- `speed`: Parallax speed multiplier (default: 0.5)

### 8. MagneticButton

**Purpose**: Creates magnetic effect that follows mouse movement
**Usage**:

```jsx
<MagneticButton strength={0.3}>
  <button>Magnetic button</button>
</MagneticButton>
```

**Props**:

- `strength`: Magnetic effect strength (default: 0.3)

### 9. PageTransition

**Purpose**: Handles page transitions between routes
**Usage**: Automatically applied in App.jsx

```jsx
<PageTransition>
  <YourPageComponent />
</PageTransition>
```

### 10. AnimatedBackground

**Purpose**: Creates animated background with floating particles and mouse follower
**Usage**: Automatically applied in App.jsx

```jsx
<AnimatedBackground />
```

## Implementation Status

✅ **All animations are now working and properly implemented:**

1. **FadeIn** - Working with scroll-triggered animations
2. **SlideIn** - Working with directional slide effects
3. **ScaleIn** - Working with 3D scale and rotation
4. **HoverScale** - Working with hover and tap interactions
5. **Stagger** - Fixed to handle both single elements and arrays
6. **Typewriter** - Working with blinking cursor
7. **ParallaxScroll** - Working with scroll-based movement
8. **MagneticButton** - Working with mouse tracking
9. **PageTransition** - Working with route changes
10. **AnimatedBackground** - Working with floating particles and mouse follower

## Pages Enhanced

- **Home Page**: Comprehensive showcase of all animations
- **Projects Page**: Animated project cards with stagger effects
- **Contact Page**: Interactive contact methods with magnetic effects
- **App.jsx**: Page transitions and animated background

## Dependencies

All animations use Framer Motion v12.23.12, which is already installed in the project.

## Performance Notes

- All animations use `useInView` for scroll-triggered animations to improve performance
- Animations are optimized with proper easing functions
- Background animations are set to `pointerEvents: 'none'` to avoid interference
