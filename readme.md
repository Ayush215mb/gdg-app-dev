# GDG App Development - Setup Guide

This repository contains three React Native Expo templates for building cross-platform mobile apps with different configurations and features.

## Available Templates

### 1. **Basic** (`basic/`)
A lightweight template with essential navigation setup using React Navigation.
- **Framework**: React Native with Expo
- **Navigation**: Bottom tab navigation
- **Best for**: Simple apps, quick prototypes
- **Key packages**: React Navigation, Expo

### 2. **Complete** (`complete/`)
A fully-designed template with polished screens and UI components.
- **Framework**: React Native with Expo
- **Navigation**: Bottom tab navigation
- **Best for**: Learning design patterns, reference implementation with styled screens
- **Key packages**: React Navigation, Expo, Vector Icons

### 3. **Default with NativeWind** (`default-with-nativewind/`)
Modern template with Tailwind CSS (NativeWind) for styling and Expo Router.
- **Framework**: React Native with Expo + Expo Router + NativeWind (Tailwind CSS)
- **Styling**: Tailwind CSS utilities for React Native
- **Best for**: Modern UI design, rapid styling development
- **Key packages**: Expo Router, NativeWind, Tailwind CSS

---

## Quick Start: Using Templates with `create-expo-app`

Instead of cloning this repository, you can use any of these templates directly when creating a new Expo project.

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Expo CLI** (optional, automatic with `npx`)

### Create a New Project from Template

Choose one of the following commands based on which template you want:

#### Option 1: Basic Template
```bash
npx create-expo-app my-app --template https://github.com/Ayush215mb/gdg-app-dev/tree/main/basic
cd my-app
```

#### Option 2: Complete Template
```bash
npx create-expo-app my-app --template https://github.com/Ayush215mb/gdg-app-dev/tree/main/complete
cd my-app
```

#### Option 3: Default with NativeWind
```bash
npx create-expo-app my-app --template https://github.com/Ayush215mb/gdg-app-dev/tree/main/default-with-nativewind
cd my-app
```

### Install Dependencies
```bash
npm install
```

If you prefer `pnpm`:
```bash
pnpm install
```

If you prefer `yarn`:
```bash
yarn install
```

---

## Development: Running Locally

### Start the Development Server

```bash
npm run start
```

This command will:
- Start the Expo development server
- Display a QR code in your terminal
- Provide options to run on different platforms

### Running on Your Mobile Device

#### Android/iOS with Expo App (Recommended for Development)

1. **Install the Expo Go app** on your mobile device:
   - [iOS App Store](https://apps.apple.com/app/apple-app-store/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Scan the QR code**:
   - After running `npm run start`, a QR code will appear in your terminal
   - Open the Expo Go app on your phone and scan the QR code
   - Your app will load on your device

3. **Hot Reload**:
   - Changes to your code will automatically reload on your device
   - Press `r` in the terminal to manually reload

#### Android (Build and Install)
```bash
npm run android
```

#### iOS (Build and Install)
```bash
npm run ios
```

#### Web Preview
```bash
npm run web
```

---

## Building for Production: EAS (Expo Application Services)

### Step 1: Install EAS CLI Globally

```bash
npm install -g eas-cli
```

Verify installation:
```bash
eas --version
```

### Step 2: Create an Expo Account

1. Visit [https://expo.dev](https://expo.dev)
2. Click **Sign Up**
3. Create an account with your email (or GitHub/Google)
4. Verify your email

### Step 3: Login with EAS CLI

```bash
eas login
```

You'll be prompted to enter your Expo credentials. This creates an authentication token on your machine.

### Step 4: Configure Build Settings

Navigate to your project directory and run:

```bash
eas build:configure
```

This command will:
- Create an `eas.json` configuration file in your project
- Ask about your build requirements
- Generate default configurations for Android and iOS builds

**During configuration**, you may be asked:
- **Platform**: Select Android (and/or iOS)
- **Build type**: Choose `preview` for testing builds

### Step 5: Build for Android

```bash
eas build --profile preview --platform android
```

This command will:
- Build your Android app on Expo's servers
- Show a build ID in the terminal
- Display a link to download the APK once ready

**Flags explained**:
- `--profile preview` - Uses the preview build profile (smaller, faster, for testing)
- `--platform android` - Targets Android platform

**Alternative profiles**:
- `--profile production` - Optimized for app store submission

### Step 6: Test the Built APK

Once the build is complete:

1. Download the APK from the provided link or via the Expo dashboard
2. Transfer it to your Android device
3. Install it manually
4. Test the app on your device

---

## Detailed Build Process

### Understanding the Build Output

When you run `eas build --profile preview --platform android`, Expo will:

1. **Queue the build** on their servers
2. **Download your project** dependencies
3. **Build the APK** (or AAB)
4. **Generate a download link**

Example output:
```
✔ Preparing build
✔ Cleaning up build cache
✔ Running ./prebuild
✔ Building APK
✔ Build complete

Download link: https://expo.dev/artifacts/[build-id].apk
```

### Building Multiple Formats

**For Android AAB (for Google Play Store)**:
```bash
eas build --profile production --platform android
```

**For both Android and iOS**:
```bash
eas build --profile preview --platform all
```

---

## Project Structure

```
gdg-app-dev/
├── basic/                              # Simple template
│   ├── src/
│   │   ├── App.js
│   │   ├── navigation/
│   │   └── screens/
│   ├── package.json
│   └── index.js
│
├── complete/                           # Fully-designed screens
│   ├── src/
│   │   ├── App.js
│   │   ├── navigation/
│   │   └── screens/
│   ├── package.json
│   └── index.js
│
├── default-with-nativewind/            # NativeWind + Expo Router
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── (tabs)/
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── nativewind-env.d.ts
│
└── readme.md                           # This file
```

---

## Troubleshooting

### QR Code Won't Scan

- Ensure your phone and computer are on the **same WiFi network**
- Try using `npx expo start --localhost` for local-only connections
- Manually enter the URL if QR code doesn't work

### Build Fails on EAS

- Ensure you're logged in: `eas login`
- Check your `eas.json` configuration
- View detailed logs: `eas build --platform android --logs`

### Dependencies Not Installing

- Clear cache: `rm -rf node_modules && npm install`
- Try `npm ci` instead of `npm install` for exact versions
- Check Node.js version: `node --version` (should be v18+)

### App Won't Start

- Check for syntax errors in your code
- Review the terminal output for error messages
- Try clearing the Expo cache: `npx expo start --clear`

---

## Next Steps

- **Customize your app**: Edit files in `src/screens/` or `app/` directory
- **Add packages**: `npm install package-name`
- **Deploy to stores**: See [Expo Documentation](https://docs.expo.dev) for app store submission
- **Environment variables**: Use `.env` file (see Expo docs for setup)

---

## Useful Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run start` | Start dev server |
| `npm run android` | Build and run on Android simulator |
| `npm run ios` | Build and run on iOS simulator |
| `npm run web` | Run web preview |
| `eas login` | Login to Expo account |
| `eas build:configure` | Setup build configuration |
| `eas build --profile preview --platform android` | Build APK for Android |
| `eas build --profile production --platform android` | Build optimized APK |
| `eas build --profile preview --platform all` | Build for both Android and iOS |

---

## Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Navigation](https://reactnavigation.org)
- [React Native Docs](https://reactnative.dev)
- [NativeWind Docs](https://www.nativewind.dev)
- [EAS Build Docs](https://docs.expo.dev/build/introduction/)

---

## License

These templates are provided as-is for development and learning purposes.
