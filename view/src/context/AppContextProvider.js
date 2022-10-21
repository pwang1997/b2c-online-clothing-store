import {
    FirebaseUserCollectionContext,
    FirebaseProductCollectionContext,
    FirebaseStorageContext
} from './FirebaseContext';
import { combineComponents } from '../utils/combineComponents';

const providers = [
    FirebaseUserCollectionContext,
    FirebaseProductCollectionContext,
    FirebaseStorageContext
];

export const AppContextProvider = combineComponents(...providers);