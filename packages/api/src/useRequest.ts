import { useMutation } from '@tanstack/react-query';
import { send } from './utils';
import type {
    TSocketEndpointNames,
    TSocketAcceptableProps,
    TSocketResponseData,
    TSocketRequestCleaned,
    TSocketRequestMutationOptions,
} from '../types';

// Todo: Get rid of redundant array wrapper for the props argument.
const useRequest = <T extends TSocketEndpointNames>(name: T, options?: TSocketRequestMutationOptions<T>) =>
    useMutation<TSocketResponseData<T>, unknown, TSocketAcceptableProps<T>>(props => {
        const prop = props?.[0];
        const payload = prop && 'payload' in prop ? (prop.payload as TSocketRequestCleaned<T>) : undefined;

        return send(name, payload);
    }, options);

export default useRequest;