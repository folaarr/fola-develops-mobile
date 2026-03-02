# Mobile App for FolaDevelops

A cross-platform mobile application built with React Native and Expo for FolaDevelops. It features authentication, profile management, and more, designed to showcase modern mobile development flows.

## Features

- **Authentication:** Secure login and session management
- **Navigation:** Navigate between screens
- **Connection to backend:** Fetch data from server
- **Custom UI Components:** Reusable buttons, overlays, and input sections

## Tech Stack

- **React Native**
- **Expo**
- **React Navigation**
- **Axios** (API requests)
- **Custom Contexts:** Auth and autofill management

## Getting Started

1. **Clone the repository:**
	```sh
	git clone https://github.com/folaarr/fola-develops-mobile.git
	cd fola-develops-mobile
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Start the development server:**
	```sh
	npx expo start
	```
4. **Run on device (Expo Go) or on the emulator:**
	- Android: `npm run android`
	- iOS: `npm run ios`

## Project Structure

- `components/` — Reusable UI components
- `screens/` — App screens
- `constants/` — Colors, image strings
- `store/` — Context providers
- `utils/` — Utility functions (e.g., HTTP requests)
- `assets/` — Fonts and images

## Configuration

App configuration is managed via `app.json` while deployment configuration is managed via `eas.json`. Update icons, splash screens, and other settings as needed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---
## Backend:  
Backend at [https://github.com/folaarr/fola-develops](https://github.com/folaarr/fola-develops).
