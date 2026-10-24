# crib

An opinionated Expo starter for React Native apps — batteries included, zero compromises.

![Expo SDK](https://img.shields.io/badge/Expo_SDK-57-blue?style=flat-square)
![React Native](https://img.shields.io/badge/React_Native-0.86-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## What is crib?

**crib** is the Expo starter you wish existed — pre-configured with every dependency you actually reach for, a solid file-based routing setup, polished light/dark theming, and cross-platform support from day one. Clone it, rename it, ship it.

This is not a tutorial app. The `example/` directory shows one reference implementation; your real app lives wherever you put it.

---

## What's included

| Feature | Details |
|---|---|
| 🗂 File-based routing | Expo Router with typed routes and `src/app/` layout |
| 🎨 Light & dark theming | Token-based `useTheme()` + `useColorScheme()` hooks |
| 🪟 Glass effect | `expo-glass-effect` for frosted UI surfaces |
| ⚡ Reanimated 4 | Smooth animations via Reanimated + Worklets |
| 📱 Cross-platform | Android · iOS · Web, with `.web.tsx` variants |
| 🔷 TypeScript 6 | Strict types, typed routes, React Compiler enabled |
| 🖼 expo-image | Performant, cached image loading |
| ☁️ EAS ready | Pre-configured `eas.json` for cloud builds & OTA |

---

## Stack

- [Expo SDK 57](https://docs.expo.dev)
- [React Native 0.86](https://reactnative.dev) / React 19
- [Expo Router](https://docs.expo.dev/router/introduction) — file-based navigation
- [TypeScript 6](https://www.typescriptlang.org)
- [Reanimated 4](https://docs.swmansion.com/react-native-reanimated) + react-native-worklets
- [expo-glass-effect](https://docs.expo.dev/versions/latest/sdk/glass-effect)
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image)
- [expo-symbols](https://docs.expo.dev/versions/latest/sdk/symbols)
- react-native-gesture-handler · react-native-safe-area-context · react-native-screens

---

## Project structure

```
crib/
├── example/                  # Reference implementation — study or delete
│   └── src/
│       ├── app/              # Screens (file-based routes)
│       │   ├── _layout.tsx
│       │   ├── index.tsx
│       │   └── explore.tsx
│       ├── components/       # Shared UI components
│       ├── constants/        # Theme tokens, spacing
│       └── hooks/            # useTheme, useColorScheme
├── assets/                   # Icons, splash screen, images
├── app.json                  # Expo config + EAS project ID
├── eas.json                  # Build profiles (development / preview / production)
├── package.json
└── tsconfig.json
```

> **Note:** Non-route code (components, hooks, utils) lives *outside* `src/app/`. Every file inside `app/` becomes a route — keep it clean.

---

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/mahmedsaleem1/crib.git my-app
cd my-app
```

### 2. Install dependencies

Always use `npx expo install` — it resolves SDK-compatible versions automatically.

```bash
npm install

# For new packages later:
npx expo install <package>
```

### 3. Start the dev server

```bash
npx expo start
# press a → Android emulator
# press i → iOS simulator
# press w → web browser
```

### 4. Reset to a blank slate

Remove the example screens and start with a clean `index.tsx`:

```bash
npm run reset-project
```

---

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Expo dev server |
| `npm run android` | Build & run on Android (local) |
| `npm run ios` | Build & run on iOS (local) |
| `npm run web` | Start the web build |
| `npm run lint` | Run Expo's ESLint config |
| `npm run reset-project` | Wipe example screens, start fresh |

---

## Building with EAS

crib ships with a ready `eas.json`. No Xcode or Android Studio required for cloud builds.

```bash
# Install EAS CLI
npm install -g eas-cli

# Log in to your Expo account
eas login

# Build a development client (needed for native modules)
eas build --profile development

# Ship an over-the-air update
eas update --branch main
```

> **Heads up:** After adding any library with native code, you need a new development build. Expo Go only includes its own bundled native modules.

---

## Theming

The theme system is token-based. Call `useTheme()` anywhere to get typed color values that automatically track the device's light/dark preference.

```tsx
import { useTheme } from '@/hooks/use-theme';

export default function MyScreen() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.textSecondary }}>Hello</Text>
    </View>
  );
}
```

Platform-specific component variants follow the `.web.tsx` convention — Expo Router picks them up automatically.

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

1. Fork and create a branch: `git checkout -b feat/your-feature-name`
2. Lint and typecheck before committing:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```
3. Open a pull request describing what changed and why.

---

## License

[MIT](LICENSE) © 2026 Muhammad Ahmed Saleem Khan
