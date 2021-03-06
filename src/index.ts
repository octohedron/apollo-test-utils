import { ApolloClient } from 'apollo-client';

function isApolloClient(client: any): boolean {
  return client instanceof ApolloClient;
}

export {
  isApolloClient
};

export {
  createMockFetch,
  createMockedIResponse,
} from './mocks/mockFetch';

export {
  mockBatchedNetworkInterface,
  mockNetworkInterface,
  mockSubscriptionNetworkInterface,
  MockedSubscription,
  ParsedRequest,
} from './mocks/mockNetworkInterface';

export { mockQueryManager } from './mocks/mockQueryManager';
export { mockWatchQuery } from './mocks/mockWatchQuery';

export {
  wrap,
  withWarning,
} from './util/wrap';

export { subscribeAndCount } from './util/subscribeAndCount';

export {
  observableToPromise,
  observableToPromiseAndSubscription,
} from '../src/util/observableToPromise';
