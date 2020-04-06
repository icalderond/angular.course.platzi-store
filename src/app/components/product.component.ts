import {
    Component,
    Input, Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit, DoCheck,
    OnDestroy } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{

    @Input() product: Product;
    @Output() productAddCart: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(){
        console.log('Anadir al carrito');
        this.productAddCart.emit(this.product.id);
    }

    // #region Ciclo de vida de un componente
    constructor(){
        console.log('1. Constructor');
    }

    // Con este se implementa en la clase el OnChanges
    // ngOnChanges(changes: SimpleChanges){
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    // Este metodo no puede trabajar juntp con el metodo ngOnChanges
    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }
    // #endregion Ciclo de vida de un componente
}
