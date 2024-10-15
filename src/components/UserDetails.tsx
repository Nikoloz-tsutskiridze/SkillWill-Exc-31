// src/components/UserDetails.tsx
import React from "react";
import { useUser } from "../hooks/useUser";

interface UserDetailsProps {
  userId: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ userId }) => {
  const { data: user, isLoading, error } = useUser(userId);

  if (isLoading) return <div>Loading user details...</div>;
  if (error) return <div>Error loading user</div>;

  return (
    <div>
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
    </div>
  );
};

export default UserDetails;
