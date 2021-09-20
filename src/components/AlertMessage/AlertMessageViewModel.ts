import { ApolloError } from '@apollo/client';
import { TypeError } from './Types';

export default interface AlertMessageViewModel {
    message: ApolloError | string;
    type: TypeError;
} 
