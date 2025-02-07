/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2017 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU Affero General Public License for more details. You should have received a copy of
 * the GNU Affero General Public License along with this program. If not, see
 * http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

(function() {
    'use strict';

    angular.module('complaint-form-modal', [
        //'openlmis-modal',
        'stock-adjustment-creation',
        //'stock-adjustment',
        //'stock-orderable-group',
        //'stock-product-name',

        'openlmis-date',
        'stock-adjustment',
        'stock-confirm-discard',
        'stock-orderable-group',
        'stock-product-name',
        'stock-constants',
        'stock-valid-reason',
        'referencedata-program',
        'referencedata-facility',
        'referencedata-lot',
        'stock-unpack-kit',
        'stock-reasons-modal',
        'stock-edit-lot-modal',
        //'receiving-add-discrepancy-modal',
        'complaint-form-modal',
        'openlmis-currency'
    ]);
})();
