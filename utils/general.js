export const getFetcher = (...args
    //: [input: RequestInfo, init?: RequestInit]
) => fetch(...args).then(res => res.json())