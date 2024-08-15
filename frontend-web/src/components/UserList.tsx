import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUsers } from '../hooks/useUsers';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;

const UserList: React.FC = () => {
  const { users, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          {user.name} ({user.email})
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
