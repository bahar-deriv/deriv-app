import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { DesktopWrapper, MobileWrapper, DataList, DataTable, Money } from '@deriv/components';
import { urlFor, isDesktop, website_name } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import { ReportsTableRowLoader } from 'App/Components/Elements/ContentLoader';
import CompositeCalendar from 'App/Components/Form/CompositeCalendar/composite-calendar.jsx';
import { getContractPath } from 'App/Components/Routes/helpers';
import { getSupportedContracts } from 'Constants';
import { connect } from 'Stores/connect';
import { WS } from 'Services/ws-methods';
import { getStatementTableColumnsTemplate } from '../Constants/data-table-constants';
import PlaceholderComponent from '../Components/placeholder-component.jsx';
import { ReportsMeta } from '../Components/reports-meta.jsx';
import EmptyTradeHistoryMessage from '../Components/empty-trade-history-message.jsx';
import Shortcode from '../Helpers/shortcode';

class Statement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { total_deposits: 0, total_withdrawals: 0 };
    }

    componentDidMount() {
        this.props.onMount();
        const is_mx_mlt =
            this.props.landing_company_shortcode === 'iom' || this.props.landing_company_shortcode === 'malta';

        if (is_mx_mlt)
            WS.accountStatistics().then(response => {
                if (response.error) {
                    this.setState({ api_error: response.error.message });
                    return;
                }
                this.setState({
                    total_deposits: response.account_statistics.total_deposits,
                    total_withdrawals: response.account_statistics.total_withdrawals,
                });
            });
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    mobileRowRenderer = ({ row }) => {
        return (
            <>
                <div className='data-list__row'>
                    <DataList.Cell row={row} column={this.columns_map.icon} />
                    <DataList.Cell row={row} column={this.columns_map.action_type} />
                </div>
                <div className='data-list__row'>
                    <DataList.Cell row={row} column={this.columns_map.refid} />
                    <DataList.Cell
                        className='data-list__row-cell--amount'
                        row={row}
                        column={this.columns_map.balance}
                    />
                </div>
                <div className='data-list__row'>
                    <DataList.Cell row={row} column={this.columns_map.date} />
                    <DataList.Cell className='data-list__row-cell--amount' row={row} column={this.columns_map.amount} />
                </div>
            </>
        );
    };

    getRowAction = row_obj => {
        let action;

        if (row_obj.id && ['buy', 'sell'].includes(row_obj.action_type)) {
            action = getSupportedContracts()[
                Shortcode.extractInfoFromShortcode(row_obj.shortcode).category.toUpperCase()
            ]
                ? getContractPath(row_obj.id)
                : {
                      component: (
                          <Localize
                              i18n_default_text='This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.'
                              values={{
                                  website_name,
                              }}
                              components={[
                                  <a
                                      key={0}
                                      className='link link--orange'
                                      rel='noopener noreferrer'
                                      target='_blank'
                                      href={urlFor('user/statementws', { legacy: true })}
                                  />,
                              ]}
                          />
                      ),
                  };
        } else if (['deposit', 'withdrawal'].includes(row_obj.action_type)) {
            action = {
                message: row_obj.desc,
            };
        }

        return action;
    };

    getAccountStatistics() {
        const { currency } = this.props;
        return (
            <React.Fragment>
                <div className='statement__account-statistics'>
                    <div className='statement__account-statistics--is-rectangle'>
                        <span className='statement__account-statistics-title'>{localize('Total deposits')}</span>
                        <span className='statement__account-statistics-amount'>
                            <Money amount={this.state.total_deposits} currency={currency} />
                        </span>
                    </div>
                    <div className='statement__account-statistics--is-rectangle'>
                        <span className='statement__account-statistics-title'>{localize('Total withdrawals')}</span>
                        <span className='statement__account-statistics-amount'>
                            <Money amount={this.state.total_withdrawals} currency={currency} />
                        </span>
                    </div>
                    <div className='statement__account-statistics--is-rectangle'>
                        <span className='statement__account-statistics-title'>{localize('Net deposits')}</span>
                        <span className='statement__account-statistics-amount'>
                            <Money
                                amount={this.state.total_deposits - this.state.total_withdrawals}
                                currency={currency}
                            />
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    getReportsMetaProps(is_mx_mlt) {
        const reports_meta_props = {};

        if (is_mx_mlt) {
            Object.assign(reports_meta_props, { optional_component: this.getAccountStatistics() });
        }
        if (isDesktop()) {
            Object.assign(reports_meta_props, {
                i18n_heading: localize('Statement'),
                i18n_message: localize(
                    'View all transactions on your account, including trades, deposits, and withdrawals.'
                ),
            });
        }
        return reports_meta_props;
    }

    render() {
        const {
            component_icon,
            currency,
            data,
            date_from,
            date_to,
            is_empty,
            is_loading,
            error,
            filtered_date_range,
            handleScroll,
            handleDateChange,
            has_selected_date,
        } = this.props;

        if (error) return <p>{error}</p>;

        const filter_component = (
            <React.Fragment>
                <CompositeCalendar
                    input_date_range={filtered_date_range}
                    onChange={handleDateChange}
                    from={date_from}
                    to={date_to}
                />
            </React.Fragment>
        );

        this.columns = getStatementTableColumnsTemplate(currency);
        this.columns_map = this.columns.reduce((map, item) => {
            map[item.col_index] = item;
            return map;
        }, {});
        const is_mx_mlt =
            this.props.landing_company_shortcode === 'iom' || this.props.landing_company_shortcode === 'malta';

        return (
            <React.Fragment>
                <ReportsMeta
                    className={is_mx_mlt ? undefined : 'reports__meta--statement'}
                    filter_component={filter_component}
                    {...this.getReportsMetaProps(is_mx_mlt)}
                />
                {this.props.is_switching ? (
                    <PlaceholderComponent is_loading={true} />
                ) : (
                    <React.Fragment>
                        {data.length === 0 || is_empty ? (
                            <PlaceholderComponent
                                is_loading={is_loading}
                                has_selected_date={has_selected_date}
                                is_empty={is_empty}
                                empty_message_component={EmptyTradeHistoryMessage}
                                component_icon={component_icon}
                                localized_message={localize('You have no transactions yet.')}
                                localized_period_message={localize('You have no transactions for this period.')}
                            />
                        ) : (
                            <React.Fragment>
                                <DesktopWrapper>
                                    <DataTable
                                        className='statement'
                                        data_source={data}
                                        columns={this.columns}
                                        onScroll={handleScroll}
                                        getRowAction={row => this.getRowAction(row)}
                                        is_empty={is_empty}
                                        custom_width={'100%'}
                                        getRowSize={() => 63}
                                        content_loader={ReportsTableRowLoader}
                                    >
                                        <PlaceholderComponent is_loading={is_loading} />
                                    </DataTable>
                                </DesktopWrapper>
                                <MobileWrapper>
                                    <DataList
                                        className='statement'
                                        data_source={data}
                                        rowRenderer={this.mobileRowRenderer}
                                        getRowAction={this.getRowAction}
                                        onScroll={handleScroll}
                                        custom_width={'100%'}
                                        getRowSize={() => 176}
                                    >
                                        <PlaceholderComponent is_loading={is_loading} />
                                    </DataList>
                                </MobileWrapper>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

Statement.propTypes = {
    component_icon: PropTypes.string,
    data: MobxPropTypes.arrayOrObservableArray,
    date_from: PropTypes.number,
    date_to: PropTypes.number,
    error: PropTypes.string,
    filtered_date_range: PropTypes.object,
    handleScroll: PropTypes.func,
    has_selected_date: PropTypes.bool,
    history: PropTypes.object,
    is_empty: PropTypes.bool,
    is_loading: PropTypes.bool,
    is_switching: PropTypes.bool,
    landing_company_shortcode: PropTypes.string,
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
};

export default connect(({ modules, client }) => ({
    currency: client.currency,
    date_from: modules.statement.date_from,
    date_to: modules.statement.date_to,
    data: modules.statement.data,
    error: modules.statement.error,
    filtered_date_range: modules.statement.filtered_date_range,
    handleScroll: modules.statement.handleScroll,
    handleDateChange: modules.statement.handleDateChange,
    has_selected_date: modules.statement.has_selected_date,
    is_empty: modules.statement.is_empty,
    is_loading: modules.statement.is_loading,
    is_switching: client.is_switching,
    landing_company_shortcode: client.landing_company_shortcode,
    onMount: modules.statement.onMount,
    onUnmount: modules.statement.onUnmount,
}))(withRouter(Statement));
