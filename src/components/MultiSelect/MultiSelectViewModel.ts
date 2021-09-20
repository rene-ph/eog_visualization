import { ApolloError } from "@apollo/client";

export default interface MultiSelectViewModel {
  listOfMetrics: any;
  isLoading: boolean;
  hasError?: ApolloError;
}
