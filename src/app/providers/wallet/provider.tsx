import { TonConnectUIProvider, THEME } from "@tonconnect/ui-react";

interface ProviderProps extends React.PropsWithChildren {}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <TonConnectUIProvider
            manifestUrl={`${import.meta.env.VITE_BASE_URL}/tonconnect-manifest.json`}
            actionsConfiguration={{
                twaReturnUrl: import.meta.env.VITE_BOT_NAME,
            }}
            uiPreferences={{ theme: THEME.DARK }}
        >
            {children}
        </TonConnectUIProvider>
    );
};
