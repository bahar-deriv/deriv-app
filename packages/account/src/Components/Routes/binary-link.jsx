import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PlatformContext } from '@deriv/shared';
import getRoutesConfig from 'Constants/routes-config';
import { findRouteByPath, normalizePath } from './helpers';

const BinaryLink = ({ active_class, to, children, ...props }) => {
    const { is_deriv_crypto } = React.useContext(PlatformContext);
    const path = normalizePath(to);
    const route = findRouteByPath(path, getRoutesConfig({ hide_crypto_routes: is_deriv_crypto }));

    if (!route) {
        throw new Error(`Route not found: ${to}`);
    }

    return to ? (
        <NavLink to={path} activeClassName={active_class || 'active'} exact={route.exact} {...props}>
            {children}
        </NavLink>
    ) : (
        <a {...props}>{children}</a>
    );
};

BinaryLink.propTypes = {
    active_class: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
    to: PropTypes.string,
};

export default BinaryLink;
