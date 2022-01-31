import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

// COMO ESTOU USANDO TOAST PARA EMITIR ERROS, NÃO VEJO NECESSIDADE DE DISPARAR ERROS COM REDUCER,
// JÁ QUE POSSO OBTER O MESMO EFEITO COM UMA FUNÇÃO COMUM BEM ESCRITA.

const messageSlice = createSlice({
    name: "message",
    initialState: {
        message: "",
        type: ""
    },
    reducers: {
        setMessage: (state, action) => {
            toast[action.payload.type](action.payload.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }
})

export const {setMessage} = messageSlice.actions

export default messageSlice.reducer