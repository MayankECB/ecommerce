export class ProductItem {
    id: string;
    name: string;
    imageUrl: string[];
    description: string;
    price: string;
    discount: string;
    discountedPrice: string;
    offerLabel: string;
    rating: string;
    constructor(id: string, name: string, imageUrl: string[],
        description: string, price: string, discount: string,
        discountedPrice: string, offerLabel: string, rating: string ) {
        this.id = id || '';
        this.name = name || 'No Name';
        this.imageUrl = imageUrl || [];
        this.description = description || '';
        this.price = price || '0';
        this.discount = discount || '0';
        this.discountedPrice = discountedPrice || '0';
        this.offerLabel = offerLabel || '';
        this.rating = rating || '0';
    }
}