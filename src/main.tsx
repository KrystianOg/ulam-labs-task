import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.scss";

import ThemeProvider from "@contexts/ThemeProvider";
import { persistor, store } from "@app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
// possible TODO: add chained providers

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider>
					<SnackbarProvider maxSnack={3}>
						<App />
					</SnackbarProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
