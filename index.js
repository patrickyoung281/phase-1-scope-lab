

var customerName = "bob";

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
    return customerName;
};

var bestCustomer;

function setBestCustomer () {
    bestCustomer = "not bob";
    return bestCustomer;
};

function overwriteBestCustomer () {
    bestCustomer = "maybe bob";
    return bestCustomer;
};

const leastFavoriteCustomer = "Jack"

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "Jingle";
    return leastFavoriteCustomer;
}