class MigrosBase {
    rateOfDiscount = 30;

    constructor(name, surname, haveCard, products) {
        this.name = name;
        this.surname = surname;
        this.haveCard = haveCard;
        this.products = products;
    }

    Calculate() {
        let payment = 0;
        if (this.CheckProduct(this.products)) {

            //(100 * 50)/100    = 5000/100

            //shopping cart full.
            if (this.haveCard) {
                //There is a money card.
                this.products.forEach((product) => {
                    payment  += (product.price * (100 - this.rateOfDiscount) / 100);
                })
            } else {
                //There is no money card.
                this.products.forEach((product) => {
                    payment += product.price;
                })
            }


        } else {
            alert("You must buy a product at least ");
        }
        return payment;
    }

    CheckProduct(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }

    getName(){
        return this.name;
    }

    getSurname(){
        return this.surname;
    }


    totalPrice(){
        let priceOfProducts = 0;
        if (this.CheckProduct(this.products)){
            this.products.forEach((product) => {
                priceOfProducts  += product.price;
            })
        return priceOfProducts
        }
    }


}