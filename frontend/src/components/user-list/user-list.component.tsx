import React from 'react';
import Container from "../common/container/container.component";
import Layout from "../layout/layout.component";
import {useAppSelector} from "../../hooks/store.hook";

const UserList = () => {
    const users = useAppSelector(state => state.users.users)

    return (
        <Layout>
            <Container variant="info">
                {users?.map((user) => (
                    <div key={user.id} className="flex flex-row gap-2">
                        <span className="text-preset-5-medium">
                            {user.firstName}
                        </span>

                        <span className="text-preset-5-medium">
                            {user.lastName}
                        </span>

                        <span className="text-preset-5-medium">
                            {user.email}
                        </span>
                    </div>
                ))}
            </Container>
        </Layout>
    );
};

export default UserList;