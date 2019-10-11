import React from 'react';

const UserContext = React.createContext("Anson G"); // default value is used when userProvider is not used

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };