import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  // Manually added customer data
  const [payments, setPayments] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      customerPhone: '123-456-7890',
      customerAddress: '1234 Elm St, Springfield',
      orderDate: '2025-01-20',
      amount: 99.99,
      status: 'Pending',
      paymentMethod: 'COD - Cash On Delivery',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      customerEmail: 'jane.smith@example.com',
      customerPhone: '987-654-3210',
      customerAddress: '4321 Oak St, Metropolis',
      orderDate: '2025-01-21',
      amount: 149.99,
      status: 'Paid',
      paymentMethod: 'Paypal Checkout',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      customerEmail: 'alice.johnson@example.com',
      customerPhone: '555-123-4567',
      customerAddress: '5678 Pine St, Gotham',
      orderDate: '2025-01-22',
      amount: 249.99,
      status: 'Pending',
      paymentMethod: 'Bank Transfer',
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    'COD - Cash On Delivery',
    'Bank Transfer',
    'Paypal Checkout',
    'Credit and Debit Cards',
    'Google Pay',
    'PhonePe',
    'Paytm',
    'Airtel Payment',
    'Other UPIs',
  ]);
  const [newPaymentMethod, setNewPaymentMethod] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('customerName'); // Sorting criterion
  const [selectedMethodFilter, setSelectedMethodFilter] = useState(''); // Payment method filter

  // Function to handle payment method change
  const handlePaymentMethodChange = (paymentId, selectedMethod) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === paymentId ? { ...payment, paymentMethod: selectedMethod } : payment
      )
    );
  };

  // Function to handle status change (Pending to Paid)
  const handlePaymentStatusChange = (paymentId, newStatus) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === paymentId ? { ...payment, status: newStatus } : payment
      )
    );
  };

  // Function to handle refund (Paid to Refunded)
  const handleRefund = (paymentId) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === paymentId ? { ...payment, status: 'Refunded' } : payment
      )
    );
  };

  // Function to add a new payment method
  const handleAddNewPaymentMethod = () => {
    if (newPaymentMethod && !paymentMethods.includes(newPaymentMethod)) {
      setPaymentMethods((prevMethods) => [...prevMethods, newPaymentMethod]);
      setNewPaymentMethod('');
      alert(`New payment method "${newPaymentMethod}" added successfully!`);
    } else {
      alert('Payment method already exists or input is empty.');
    }
  };

  // Handle search query
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sorting function
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Payment method filter change
  const handleMethodFilterChange = (e) => {
    setSelectedMethodFilter(e.target.value);
  };

  // Filtering and sorting customers
  const filteredPayments = payments
    .filter((payment) =>
      (payment.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.customerEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        payment.customerPhone.includes(searchQuery)) &&
      (selectedMethodFilter ? payment.paymentMethod === selectedMethodFilter : true)
    )
    .sort((a, b) => {
      if (sortBy === 'customerName') {
        return a.customerName.localeCompare(b.customerName);
      } else if (sortBy === 'orderDate') {
        return new Date(a.orderDate) - new Date(b.orderDate);
      } else {
        return a.amount - b.amount;
      }
    });

  // Dashboard for payment status summary
  const paidPaymentsCount = payments.filter(payment => payment.status === 'Paid').length;
  const pendingPaymentsCount = payments.filter(payment => payment.status === 'Pending').length;
  const refundedPaymentsCount = payments.filter(payment => payment.status === 'Refunded').length;

  return (
    <div className="payment-container">
      <h1>Payment Gateway - Admin</h1>
      <p>Manage and view payment details below.</p>

      {/* Dashboard */}
      <div className="dashboard">
        <div className="status-box">
          <h3>Total Payments: {payments.length}</h3>
        </div>
        <div className="status-box">
          <h3>Paid: {paidPaymentsCount}</h3>
        </div>
        <div className="status-box">
          <h3>Pending: {pendingPaymentsCount}</h3>
        </div>
        <div className="status-box">
          <h3>Refunded: {refundedPaymentsCount}</h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="filter-container">
  {/* Search Bar */}
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by name, email, or phone"
      value={searchQuery}
      onChange={handleSearch}
    />
  </div>

  {/* Sorting Dropdown */}
  <div className="sort-dropdown">
    <label>Sort By:</label>
    <select value={sortBy} onChange={handleSortChange}>
      <option value="customerName">Customer Name</option>
      <option value="orderDate">Order Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>

  {/* Method Filter */}
  <div className="method-filter">
    <label>Filter by:</label>
    <select>
      <option value="">Payment Method</option>
      {paymentMethods.map((method, index) => (
        <option key={index} value={method}>
          {method}
        </option>
      ))}
    </select>
  </div>
</div>

      {/* Customer Table */}
      <h2>Customer Orders</h2>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Order Date</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.customerName}</td>
              <td>{payment.customerEmail}</td>
              <td>{payment.customerPhone}</td>
              <td>{payment.customerAddress}</td>
              <td>{payment.orderDate}</td>
              <td>
                <select
                  value={payment.paymentMethod || ''}
                  onChange={(e) =>
                    handlePaymentMethodChange(payment.id, e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select a Payment Method
                  </option>
                  {paymentMethods.map((method, index) => (
                    <option key={index} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </td>
              <td>{payment.status}</td>
              <td>
                {payment.status === 'Pending' ? (
                  <button
                    className="status-btn"
                    onClick={() => handlePaymentStatusChange(payment.id, 'Paid')}
                  >
                    Mark as Paid
                  </button>
                ) : payment.status === 'Paid' ? (
                  <button
                    className="refund-btn"
                    onClick={() => handleRefund(payment.id)}
                  >
                    Refund
                  </button>
                ) : (
                  <span>Refunded</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Payment Method Section */}
      <div className="add-method-container">
        <h3>Add New Payment Method</h3>
        <input
          type="text"
          placeholder="Enter new payment method"
          value={newPaymentMethod}
          onChange={(e) => setNewPaymentMethod(e.target.value)}
        />
        <button onClick={handleAddNewPaymentMethod}>Add Method</button>
      </div>

    </div>
  );
};

export default Payment;
