import React from "react";
import { useCustomers } from "../hooks/useCustomers";

const CustomerList: React.FC = () => {
  const { data: customers, isLoading, error } = useCustomers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading customers: {error.message}</div>;

  if (!Array.isArray(customers)) {
    return <div>No customers found</div>;
  }

  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>
          {customer.name} ({customer.email})
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
