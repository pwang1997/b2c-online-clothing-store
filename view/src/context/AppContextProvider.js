import { FirebaseUserCollectionContext, FirebaseProductCollectionContext } from './FirebaseContext';
import { combineComponents } from '../utils/combineComponents';

const providers = [
    FirebaseUserCollectionContext,
    FirebaseProductCollectionContext
];

export const AppContextProvider = combineComponents(...providers);