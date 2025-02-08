export default class checkoutPage {
    firstName           = '#first-name';
    lastName            = '#last-name';
    zipCode             = '#postal-code';
    btnContinue         = '#continue';
    btnFinish           = '#finish';
    txtHeaderInfo       = 'span[data-test="title"] >> text=Checkout: Your Information';
    txtHeaderOverview   = 'span[data-test="title"] >> text=Checkout: Overview';
    txtComplete         = '.complete-header';

    listItemPrice       = '[data-test="inventory-item-price"]';
    subTotalPrice       = '[data-test="subtotal-label"]';            
}