import config from '../constants'


export const getTotalPages = (length)=> {
    return Math.ceil(length/10);
}


export const getRecordIndex = (page)=> {
    return (page-1)*config.PAGE_SIZE ;
}


