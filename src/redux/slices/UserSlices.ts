import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/FireBaseConfig";
import {
    collection,
    addDoc,
} from "firebase/firestore";
const initialState = {
    user: null,
    loading: true,
    error: null as string | null,
};
//Thêm người dùng
export const addUser = createAsyncThunk("data/addUser", async (newData: any) => {
    try {

        const docRef = await addDoc(collection(db, "User"), newData);
        console.log("Document written with ID: ", docRef.id);


    } catch (error) {
        console.log('error Add user', error);
    }
});
export const UserSlices = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.error = null; // Reset lỗi khi có dữ liệu người dùng mới
            state.loading = false;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload ?? null; // Lưu user có `id` vào state
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
});
export const { setUser, setLoading } = UserSlices.actions;
export default UserSlices.reducer;