export function serialize(queryObject) {
    let queryString = "";
    for (let key in queryObject) {
        queryString += `&${key}=${queryObject[key]}`;
    }

    return queryString;
}