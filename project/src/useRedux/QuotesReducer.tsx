import { IQuote } from "../models/IQuote";
import { QuotesAction } from "./QuotesAction";
import { QuotesType } from "./QuotesType";

const defaultIQuote: IQuote = {
    id: 0,
    quote: "",
    author: ""
} 

export const QuotesReducer = (state: IQuote = defaultIQuote, action: QuotesAction ) => {
    switch (action.type) {
        case QuotesType.QUOTE_ADD:
        return action.payload

        case QuotesType.QUOTE_REMOVE:
        return action.payload

        case QuotesType.QUOTE_LIST:
        return action.payload
    
        default:
            return state
    }
}