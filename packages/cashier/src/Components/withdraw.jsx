import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'Stores/connect';
import CashierContainer from './cashier-container.jsx';

const Withdraw = ({ container, iframe_height, iframe_url, is_loading, onMount, setActiveTab, verification_code }) => {
    React.useEffect(() => {
        setActiveTab(container);
        onMount(verification_code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <CashierContainer iframe_height={iframe_height} iframe_url={iframe_url} is_loading={is_loading} />;
};

Withdraw.propTypes = {
    container: PropTypes.string,
    iframe_height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    iframe_url: PropTypes.string,
    is_loading: PropTypes.bool,
    onMount: PropTypes.func,
    setActiveTab: PropTypes.func,
    verification_code: PropTypes.string,
};

export default connect(({ client, modules }) => ({
    container: modules.cashier.withdraw_store.container,
    iframe_height: modules.cashier.withdraw_store.iframe.iframe_height,
    iframe_url: modules.cashier.withdraw_store.iframe.iframe_url,
    is_loading: modules.cashier.cashier_store.is_loading,
    onMount: modules.cashier.cashier_store.onMount,
    setActiveTab: modules.cashier.cashier_store.setActiveTab,
    verification_code: client.verification_code.payment_withdraw,
}))(Withdraw);
