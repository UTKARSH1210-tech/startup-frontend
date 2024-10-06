import React from 'react';

interface MetricsProps {
    metrics: any;
}

const MetricsDisplay: React.FC<MetricsProps> = ({ metrics }) => {
    return (
        <div>
            <h3>Metrics</h3>
            <p>Total Company Revenue: {metrics.total_company_revenue}</p>
            <p>Total Subscription Revenue: {metrics.total_subscription_revenue}</p>
            <p>Total Implementation Revenue: {metrics.total_implementation_revenue}</p>
            <p>Total Company COGS: {metrics.total_company_cogs}</p>
            <p>Total Subscription COGS: {metrics.total_subscription_cogs}</p>
            <p>Total Implementation COGS: {metrics.total_implementation_cogs}</p>
            <p>Total Company Gross Profit: {metrics.total_company_gross_profit}</p>
            <p>Subscription Gross Profit: {metrics.subscription_gross_profit}</p>
            <p>Implementation Gross Profit: {metrics.implementation_gross_profit}</p>
            <p>Total Company Gross Profit Percentage: {metrics.total_company_gross_profit_percentage}</p>
            <p>Subscription Gross Profit Percentage: {metrics.subscription_gross_profit_percentage}</p>
            <p>Implementation Gross Profit Percentage: {metrics.implementation_gross_profit_percentage}</p>
            <p>New Customers: {metrics.new_customer}</p>
            <p>Total Customers: {metrics.total_customer}</p>
            <p>Implementation Revenue per Customer: {metrics.implementation_revenue_per_customer}</p>
            <p>Subscription Revenue per Customer: {metrics.subscription_revenue_per_customer}</p>
            <p>Implementation Gross Profit per Customer: {metrics.implementation_gross_profit_per_customer}</p>
            <p>Subscription Gross Profit per Customer: {metrics.subscription_gross_profit_per_customer}</p>
            <p>Average Customer Lifetime: {metrics.average_customer_lifetime}</p>
            <p>Total Lifetime Value Subscription: {metrics.total_lifetime_value_subscription}</p>
            <p>Customer Lifetime Value: {metrics.customer_lifetime_value}</p>
            <p>Customer Acquisition Cost: {metrics.customer_acquisition_cost}</p>
            <p>LTV to CAC Ratio: {metrics.ltv_cac_ratio}</p>
        </div>
    );
};

export default MetricsDisplay;
