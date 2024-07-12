import { UnknownAction } from "redux";
import { IQuote } from "../models/IQuote";
import { QuotesType } from "./QuotesType";

export interface QuotesAction extends UnknownAction {
    type: QuotesType,
    payload: IQuote
}