var Customer = /** @class */ (function () {
    function Customer(cid, cname, ccity) {
        if (cid === void 0) { cid = 0; }
        if (cname === void 0) { cname = ""; }
        if (ccity === void 0) { ccity = ""; }
        this.cid = cid;
        this.cname = cname;
        this.ccity = ccity;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Details :: Id : ".concat(this.cid, ", Name : ").concat(this.cname, ", City : ").concat(this.ccity));
        console.log("--------------------------------------------------------------------------------------");
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10);
var c3 = new Customer(20, "Prachi");
var c4 = new Customer(30, "Supriya", "Pune");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
