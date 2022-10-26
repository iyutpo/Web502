const { PI } = Math;  // private to this file

area = (r) => PI * r ** 2;  // exported
circumference = (r) => 2 * PI * r;  // exported


exports.area = area;
exports.circumference = circumference;