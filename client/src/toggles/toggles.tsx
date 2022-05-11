import { useContext, createContext } from 'react';

interface toggles {
    readonly 'isToggleOn'?: boolean;
}

export type Toggles = toggles;

export const togglesContext = createContext<Toggles>({});

export function useTogglesContext(): Toggles {
    return useContext(togglesContext);
}
