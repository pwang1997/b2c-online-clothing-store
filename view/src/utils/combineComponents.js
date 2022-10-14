import React, { useContext } from "react";

export const combineComponents = (...components) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            return ({ children }) => {
                const useCustomContext = useContext(CurrentComponent);
                return (
                    <AccumulatedComponents>
                        <CurrentComponent.Provider value={useCustomContext}>
                            {children}
                        </CurrentComponent.Provider>
                    </AccumulatedComponents>
                );
            };
        },
        ({ children }) => <>{children}</>,
    );
};