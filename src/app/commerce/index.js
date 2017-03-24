import angular from 'angular';
import productListComponent from './product-list.component';
import productComponent from './product.component';
import favoriteComponent from './favorite.component';
import addToBasketComponent from './add-to-basket.component';

import service from './product.service';

const MODULE_NAME = "commerce"

angular.module(MODULE_NAME, [])
.service(service.UID, service)
.component(productListComponent.UID, productListComponent)
.component(productComponent.UID, productComponent)
.component(favoriteComponent.UID, favoriteComponent)
.component(addToBasketComponent.UID, addToBasketComponent)

export default MODULE_NAME;