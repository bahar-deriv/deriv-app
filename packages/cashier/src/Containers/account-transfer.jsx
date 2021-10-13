import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@deriv/components';
import { WS } from '@deriv/shared';
import { connect } from 'Stores/connect';
import AccountTransferNoAccount from '../Components/Error/account-transfer-no-account.jsx';
import Error from '../Components/Error/error.jsx';
import NoBalance from '../Components/Error/no-balance.jsx';
import Virtual from '../Components/Error/virtual.jsx';
import CashierLocked from '../Components/Error/cashier-locked.jsx';
import TransferLock from '../Components/Error/transfer-locked.jsx';
import AccountTransferForm from '../Components/Form/account-transfer-form.jsx';
import AccountTransferReceipt from '../Components/Receipt/account-transfer-receipt.jsx';
import AccountTransferConfirm from '../Components/Confirm/account-transfer-confirm.jsx';
import CryptoTransactionsHistory from '../Components/Form/crypto-transactions-history';

const AccountTransfer = ({
    accounts_list,
    container,
    error,
    has_no_account,
    has_no_accounts_balance,
    is_cashier_locked,
    is_crypto_transactions_visible,
    is_loading,
    is_switching,
    is_transfer_confirm,
    is_transfer_lock,
    is_transfer_successful,
    is_virtual,
    onMount,
    recentTransactionOnMount,
    setAccountTransferAmount,
    setActiveTab,
    setIsTransferConfirm,
    setSideNotes,
}) => {
    const [is_loading_status, setIsLoadingStatus] = React.useState(true);

    React.useEffect(() => {
        if (!is_crypto_transactions_visible) {
            recentTransactionOnMount();
        }
    }, [is_switching]);

    React.useEffect(() => {
        setActiveTab(container);
        onMount();

        WS.wait('authorize', 'website_status', 'get_settings', 'paymentagent_list').then(() => {
            setIsLoadingStatus(false);
        });

        return () => {
            setAccountTransferAmount('');
            setIsTransferConfirm(false);
        };
    }, []);

    React.useEffect(() => {
        if (typeof setSideNotes === 'function' && (has_no_accounts_balance || is_switching)) {
            setSideNotes(null);
        }
    }, [setSideNotes, has_no_accounts_balance]);

    if (is_virtual) {
        return <Virtual />;
    }
    if (is_loading || is_switching || is_loading_status) {
        return <Loading className='cashier__loader' is_fullscreen={false} />;
    }
    if (is_cashier_locked) {
        return <CashierLocked />;
    }
    if (is_transfer_lock) {
        return <TransferLock />;
    }
    if (error.is_show_full_page || (error.message && !accounts_list.length)) {
        // for errors with CTA hide the form and show the error,
        // for others show them at the bottom of the form next to submit button
        return <Error error={error} />;
    }
    if (has_no_account) {
        return <AccountTransferNoAccount />;
    }
    if (has_no_accounts_balance) {
        return <NoBalance />;
    }
    if (is_transfer_confirm) {
        return <AccountTransferConfirm />;
    }
    if (is_transfer_successful) {
        return <AccountTransferReceipt />;
    }
    if (is_crypto_transactions_visible) {
        return <CryptoTransactionsHistory />;
    }

    return <AccountTransferForm error={error} setSideNotes={setSideNotes} />;
};

AccountTransfer.propTypes = {
    accounts_list: PropTypes.array,
    container: PropTypes.string,
    error: PropTypes.object,
    has_no_account: PropTypes.bool,
    has_no_accounts_balance: PropTypes.bool,
    is_cashier_locked: PropTypes.bool,
    is_crypto_transactions_visible: PropTypes.bool,
    is_loading: PropTypes.bool,
    is_switching: PropTypes.bool,
    is_transfer_confirm: PropTypes.bool,
    is_transfer_successful: PropTypes.bool,
    is_transfer_lock: PropTypes.bool,
    is_virtual: PropTypes.bool,
    onMount: PropTypes.func,
    recentTransactionOnMount: PropTypes.func,
    setAccountTransferAmount: PropTypes.func,
    setActiveTab: PropTypes.func,
    setIsTransferConfirm: PropTypes.func,
    setSideNotes: PropTypes.func,
};

export default connect(({ client, modules }) => ({
    is_virtual: client.is_virtual,
    is_switching: client.is_switching,
    accounts_list: modules.cashier.account_transfer_store.accounts_list,
    container: modules.cashier.account_transfer_store.container,
    error: modules.cashier.account_transfer_store.error,
    has_no_account: modules.cashier.account_transfer_store.has_no_account,
    has_no_accounts_balance: modules.cashier.account_transfer_store.has_no_accounts_balance,
    is_cashier_locked: modules.cashier.cashier_store.is_cashier_locked,
    is_crypto_transactions_visible: modules.cashier.transaction_history.is_crypto_transactions_visible,
    is_loading: modules.cashier.cashier_store.is_loading,
    is_transfer_confirm: modules.cashier.account_transfer_store.is_transfer_confirm,
    is_transfer_successful: modules.cashier.account_transfer_store.is_transfer_successful,
    is_transfer_lock: modules.cashier.cashier_store.is_transfer_lock,
    onMount: modules.cashier.account_transfer_store.onMountAccountTransfer,
    recentTransactionOnMount: modules.cashier.transaction_history.onMount,
    setActiveTab: modules.cashier.cashier_store.setActiveTab,
    setAccountTransferAmount: modules.cashier.account_transfer_store.setAccountTransferAmount,
    setIsTransferConfirm: modules.cashier.account_transfer_store.setIsTransferConfirm,
}))(AccountTransfer);
