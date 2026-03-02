# Block AI

Bybit-style crypto trading app UI built with **React Native (Expo)**. Dark theme, Block AI branding, and ready to run on your Android phone via **Expo Go**.

## Run on your Android phone

1. **Install Expo Go** on your Android device from the [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).

2. **Install dependencies and start the dev server:**
   ```bash
   cd BlockAI
   npm install
   npx expo start
   ```

3. **Open in Expo Go:**
   - Scan the QR code with the Expo Go app, or
   - Press `a` in the terminal to open on an Android emulator.

Use the same Wi‑Fi network for your phone and computer so they can connect.

## What's included

- **Home screen:** Search bar, notification icon, promo banner, quick actions (Deposit, Buy Crypto, Rewards, More), and market list (BTC/USDT, ETH/USDT, etc.) with 24h change (green/red).
- **Bottom tabs:** Home, Markets, Derivatives, Trade, Assets.
- **Theme:** Dark background (#0B0E11), orange accent (#F7A600), Block AI branding in the header.

## Tech stack

- React Native + Expo (SDK 52)
- React Navigation (bottom tabs)
- No native build required — runs in Expo Go.
