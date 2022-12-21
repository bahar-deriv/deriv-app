import React from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Modal } from '@deriv/components';
import { routes } from '@deriv/shared';
import { useStore } from '@deriv/stores';
import { Localize } from '@deriv/translations';
import AccountTransfer from '@deriv/cashier/src/pages/account-transfer';

const AccountTransferModal = () => {
    const [is_open, setIsOpen] = React.useState<boolean>(true);

    const {
        modules: {
            cashier: {
                account_transfer: { is_transfer_confirm, should_switch_account },
            },
        },
    } = useStore();

    const history = useHistory();

    const modal_title = !is_transfer_confirm && <Localize i18n_default_text={'Transfer funds to your account'} />;

    const toggleModal = () => {
        setIsOpen(false);
    };

    const onClickDeposit = () => {
        setIsOpen(false);
        history.push(routes.cashier_deposit);
    };

    const onClickNotes = () => {
        setIsOpen(false);
        history.push(routes.cashier_acc_transfer);
    };

    return (
        <Modal
            className={should_switch_account ? 'account-transfer-modal' : ''}
            has_close_icon={!is_transfer_confirm}
            is_open={is_open}
            is_title_centered={is_transfer_confirm}
            small
            title={modal_title}
            toggleModal={toggleModal}
            should_header_stick_body={false}
        >
            <Modal.Body>
                <AccountTransfer
                    onClickDeposit={onClickDeposit}
                    onClickNotes={onClickNotes}
                    onClose={() => setIsOpen(false)}
                />
            </Modal.Body>
        </Modal>
    );
};

export default observer(AccountTransferModal);
