module.exports ={
    INSERT_PRODUCT:`INSERT INTO PRODUCTS VALUES(?,?,?,?)`,
    FETCH_PRODUCTS:`SELECT * FROM products`,
    UPDATE_PRODUCT:`UPDATE products SET price=? WHERE productId=?`,
    DELETE_PRODUCT:`DELETE FROM products where productId=?`,
    SEARCH_BY_NAME : ``

}