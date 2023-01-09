import React from 'react';
import { Button, Icon, Modal, Money, StatusBadge, Text } from '@deriv/components';
import { localize } from '@deriv/translations';
import { getCurrencyName } from '@deriv/shared';
import { connect } from 'Stores/connect';
import RootStore from 'Stores/index';
import CurrencyIcon from './currency';
import { AccountListDetail } from './types';
import classNames from 'classnames';

type CurrencySelectionModalProps = {
    //TODO: Replace the type with a proper one when ts migration cards merged
    account_list: object[];
    //TODO: Replace the type with a proper one when ts migration cards merged
    authentication_status: any;
    //TODO: Replace the type with a proper one when ts migration cards merged
    accounts: any;
    closeModal: () => void;
    is_authentication_needed: boolean;
    is_visible: boolean;
    loginid: string;
    openRealAccountSignup: (account_type: string) => void;
    selected_region: string;
    switchAccount: (loginid: string) => void;
};

const CurrencySelectionModal = ({
    account_list,
    authentication_status,
    accounts,
    closeModal,
    is_authentication_needed,
    is_visible,
    loginid: current_loginid,
    openRealAccountSignup,
    selected_region,
    switchAccount,
}: CurrencySelectionModalProps) => {
    return (
        <Modal is_open={is_visible} toggleModal={closeModal} width='422px' height='422px'>
            <div className='currency-selection-modal__header'>
                <Text line-height='m' weight='bold'>
                    {localize('Select account')}
                </Text>
                <Icon className='close-icon' icon='IcCross' onClick={() => closeModal()} />
            </div>
            <div className='currency-selection-modal__body'>
                {(account_list as AccountListDetail[])
                    .filter(
                        acc =>
                            (!acc.is_virtual && selected_region === 'Non-EU' && acc.loginid.startsWith('CR')) ||
                            (selected_region === 'EU' && acc.loginid.startsWith('MF'))
                    )
                    .map(({ icon, loginid }) => {
                        const { balance, currency } = accounts[loginid];
                        const is_selected = current_loginid === loginid;
                        return (
                            <div
                                key={loginid}
                                className={classNames('currency-item-card', {
                                    'currency-item-card--active': is_selected,
                                })}
                                onClick={async () => {
                                    if (loginid !== current_loginid) {
                                        await switchAccount(loginid);
                                    }
                                    closeModal();
                                }}
                            >
                                <CurrencyIcon className='currency-item-card__icons' icon={icon} size={32} />
                                <div className='currency-item-card__details'>
                                    <Text size='xs'>{getCurrencyName(currency)}</Text>
                                    <Text color={is_selected ? 'prominent' : 'less-prominent'} size='xxs'>
                                        {loginid}
                                    </Text>
                                </div>
                                <div className='currency-item-card__balance'>
                                    {is_selected && selected_region === 'EU' && is_authentication_needed ? (
                                        <StatusBadge document_status={authentication_status.document_status} />
                                    ) : (
                                        <Text size='xs' color='prominent'>
                                            <Money amount={balance} currency={currency} show_currency />
                                        </Text>
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </div>
            <div className='currency-selection-modal__bottom-controls'>
                <Button
                    className='block-button'
                    onClick={() => {
                        setTimeout(() => openRealAccountSignup('manage'), 500);
                        closeModal();
                    }}
                    secondary
                    large
                >
                    {localize('Add or manage account')}
                </Button>
            </div>
        </Modal>
    );
};

export default connect(({ client, traders_hub, ui }: RootStore) => ({
    account_list: client.account_list,
    accounts: client.accounts,
    authentication_status: client.authentication_status,
    closeModal: traders_hub.closeModal,
    is_authentication_needed: client.is_authentication_needed,
    loginid: client.loginid,
    openRealAccountSignup: ui.openRealAccountSignup,
    selected_region: traders_hub.selected_region,
    switchAccount: client.switchAccount,
}))(CurrencySelectionModal);