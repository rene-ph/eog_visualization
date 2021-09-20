import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

class ClientApollo {
  private static client: ApolloClient<NormalizedCacheObject>;

  private static createApolloInstance() {
    return new ApolloClient({
      uri: process.env.REACT_APP_APOLO_CLIENT,
      cache: new InMemoryCache(),
    });
  }

  public static get Instance() {
    return this.client || this.createApolloInstance();
  }
}

export const Client = ClientApollo.Instance;
