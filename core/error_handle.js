import {BaseException} from "./base_exceptions";

import {StoreKeys} from "../constants/store_keys";
import { NextResponse } from "next/server";

function handleUnAuthentication(error){
    if(error === 401 || error === 403){
        localStorage.removeItem(StoreKeys.token);
        localStorage.removeItem(StoreKeys.userId);

        return NextResponse.redirect("/");
    }
    return NextResponse.next();
}

export function errorHandle(error){
    if(error.response){
        const status = error.response.status;
        const data = error.response.data;

        handleUnAuthentication(status);

        throw new BaseException(data,'Error response',status);
    }else if(error.request){
        throw new BaseException(null,'Error request',99);
    }
    throw new BaseException('Unknow Error' , 100);
}