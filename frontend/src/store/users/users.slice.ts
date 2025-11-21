import {UserModel} from "../../models/users/user.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UsersSlice {
    users: UserModel[];
}

const initialState: UsersSlice = {
    users: []
}

export const booksSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserModel[]>) => {
            state.users = action.payload;
        }
    },
})

export const { setUsers } = booksSlice.actions;

export default booksSlice.reducer