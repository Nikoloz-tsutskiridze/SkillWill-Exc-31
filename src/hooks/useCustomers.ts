import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Customer {
  id: number;
  name: string;
  email: string;
}

const fetchCustomers = async (): Promise<Customer[]> => {
  const { data } = await axios.get("/customers");
  return Array.isArray(data) ? data : [];
};

export const useCustomers = () => {
  return useQuery<Customer[], Error>({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });
};
