const regex = /(\d{4})-(\d{2})-(\d{2})/; //manejo de fechas, QUE ES ESTO
const match = regex.exec("2022-01-15")
console.table(match)