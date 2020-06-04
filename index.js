'use strict';

var Member = function(first_name,
                      family_name,
                      birthday,
                      blood_type,
                      hometown,
                      color) {
    this.first_name = first_name;
    this.family_name = family_name;
    this.birthday = birthday;
    this.blood_type = blood_type;
    this.hometown = hometown;
    this.color = color;

    var today = new Date();
    this.age = today.getFullYear() - birthday.getFullYear() - (today.setFullYear(2000) >= birthday.setFullYear(2000) ? 0 : 1 );
};

var momoirocloverz = function() {
    this.kanako = new Member("Kanako", "Momota", new Date(1994, 7, 12), "AB", "静岡県", "red");
    this.ayaka =  new Member("Ayaka", "Sasaki", new Date(1996, 6, 11), "AB", "神奈川県", "pink");
    this.shiori =  new Member("Shiori", "Tamai", new Date(1995, 6, 4), "A", "神奈川県", "yellow");
    this.reni = new Member("Reni", "Takagi", new Date(1993, 6, 21), "O", "神奈川県", "purple");
    this.members = [this.kanako, this.ayaka, this.shiori, this.momoka, this.reni];
};

module.exports = momoirocloverz;
