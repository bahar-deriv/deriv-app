import classNames from 'classnames';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { setWebsocket, routes } from '@deriv/shared';
import Routes from 'Components/routes/routes';
import { StoreProvider } from '@deriv/stores';
import { useStores, initContext } from 'Stores';
import { TRootStore } from 'Types';
import AccountTransferModal from 'Components/account-transfer-modal';
import './app.scss';

type TAppProps = {
    passthrough: {
        root_store: TRootStore;
        WS: Record<string, any>;
    };
};

const App: React.FC<TAppProps> = ({ passthrough }: TAppProps) => {
    const { root_store, WS } = passthrough;
    initContext(root_store, WS);
    setWebsocket(WS);
    const { ui }: TRootStore = useStores();

    const [is_open, setIsOpen] = React.useState<boolean>(true);

    return (
        <StoreProvider store={root_store as any}>
            <main
                className={classNames('dashboard', {
                    'theme--light': !ui.is_dark_mode_on,
                    'theme--dark': ui.is_dark_mode_on,
                    'dashboard-onboarding': window.location.pathname === routes.onboarding,
                })}
            >
                <div className='dw-dashboard'>
                    <Routes />
                    <AccountTransferModal is_modal_open={is_open} toggleModal={() => setIsOpen(false)} />
                </div>
            </main>
        </StoreProvider>
    );
};

export default observer(App);
