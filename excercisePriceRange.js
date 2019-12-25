function PriceRange(label,tooltip,minPrice,maxPrice){
    this.label = label;
    this.tooltip = tooltip;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
}

let priceRanges = [ new PriceRange('$','inexpencive',0,10),
                    new PriceRange('$$','moderate',11,20),
                    new PriceRange('$$$','expencive',21,50)];

console.log(priceRanges);
