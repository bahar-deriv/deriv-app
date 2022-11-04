import classNames from 'classnames';
import React from 'react';
import { ExpansionPanel } from '@deriv/components';
import PaymentAgentCardDescription from './payment-agent-card-description';
import PaymentAgentDepositDetails from '../payment-agent-deposit-details';
import PaymentAgentListedWithdrawForm from '../payment-agent-listed-withdraw-form';
import { TPaymentAgentDetails } from 'Types';
import './payment-agent-card.scss';

type PaymentAgentCardProps = {
    is_dark_mode_on?: boolean;
    is_deposit?: boolean;
    payment_agent: TPaymentAgentDetails;
};

const PaymentAgentCard = ({ is_dark_mode_on, is_deposit, payment_agent }: PaymentAgentCardProps) => {
    const message = {
        header: <PaymentAgentCardDescription is_dark_mode_on={is_dark_mode_on} payment_agent={payment_agent} />,
        content: is_deposit ? (
            <PaymentAgentDepositDetails payment_agent={payment_agent} />
        ) : (
            <PaymentAgentListedWithdrawForm payment_agent={payment_agent} />
        ),
    };
    return (
        <div
            className={classNames('payment-agent-card', {
                'payment-agent-card--dark': is_dark_mode_on,
            })}
        >
            <ExpansionPanel message={message} />
        </div>
    );
};

export default PaymentAgentCard;
