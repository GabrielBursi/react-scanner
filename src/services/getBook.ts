import { IBooks } from "../types"
import { MyApi } from "./config"

export const getBook = async (isbn: string) => {
    try {
        const { data } = await MyApi(`/books/${isbn}`)
        return data as IBooks
    } catch (error) {
        return new Error("Aconteceu um erro: " + error)
    }
}