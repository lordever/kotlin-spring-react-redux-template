import React, {useCallback, useState} from 'react';
import Container from '../common/container/container.component';
import {Input} from '../common/input/input.component';
import Button from '../common/button/button.component';
import {useAppDispatch} from "../../hooks/store.hook";
import {UserModel} from "../../models/users/user.model";
import {setUsers} from "../../store/users/users.slice";
import Layout from "../layout/layout.component";
import {useNavigate} from "react-router-dom";

const USERS_API_URL = '/api/v1/users';

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFetchUsers = useCallback(async () => {
        const basicToken = window.btoa(`${username}:${password}`); // username:password -> base64

        const response = await fetch(USERS_API_URL, {
            method: 'GET',
            headers: {
                Authorization: `Basic ${basicToken}`,
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            // 401 / 403 / 500 etc
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data: UserModel[] = await response.json();
        dispatch(setUsers(data));
        navigate("/users");
    }, [username, password])

    return (
        <Layout>
            {/*Left info section*/}
            <section className="relative z-10 mt-16 flex max-w-[525px] flex-col gap-4 text-center md:gap-12 lg:text-left">
                <h1 className="text-preset-2 text-white md:text-preset-1">
                    Learn to code by watching others
                </h1>
                <p className="text-preset-3 text-white">
                    See how experienced developers solve problems in real-time. Watching
                    scripted tutorials is great, but understanding how developers think
                    is invaluable.
                </p>
            </section>

            {/*Right info section*/}
            <section className="flex flex-col gap-6">
                <Container variant="info">
                    <div className="flex items-center justify-center">
                        <b>Try it free 7 days then $20/mo.</b> thereafter
                    </div>
                </Container>

                <Container>
                    <div className="flex flex-col gap-6 px-10 py-8">

                        <Input placeholder="Username"
                               kind="string"
                               value={username}
                               onValueChange={(username) => {
                                   setUsername(username!)
                               }}/>

                        <Input placeholder="Password"
                               kind="string"
                               value={password}
                               onValueChange={(password) => {
                                   setPassword(password!)
                               }}/>

                        <div className="flex flex-col gap-4">
                            <Button onClick={handleFetchUsers}>Get Users Info</Button>
                            <p className="text-center text-preset-5-medium text-gray-200">
                                By clicking the button, you are agreeing to our{' '}
                                <b className="text-red-400">Terms and Services</b>
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};

export default Login;
