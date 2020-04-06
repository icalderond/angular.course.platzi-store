import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent{

    @Input() product: Product;
    // product: Product = {
    //     id: '1',
    //     image: 'assets/images/camiseta.png',
    //     title: 'Camiseta',
    //     price: 80000,
    //     description: 'Esto es uns descripcion de la camiseta'
    // };
}
