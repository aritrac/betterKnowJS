var house = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeeet: 1000
};

var house2 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeeet: 1000
};

var house3 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};

var house4 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
};

//Just imagine if we had to create 100 of these objects...

//Based on the above structure, we will not create a constructor function as below

function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.sqFeet = numSqft;
}