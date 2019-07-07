import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'name 1', price: 10000, photo: './assets/images/samsung.jpeg' },
            { id: 'p02', name: 'name 2', price: 20000, photo: './assets/images/infinix.jpeg' },
            { id: 'p03', name: 'name 3', price: 30000, photo: './assets/images/uawei.jpeg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}