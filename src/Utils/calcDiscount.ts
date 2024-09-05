/// fiyat ve indirim oranı alacak
// indirim varsa asıl fiyattan indirim oranı kadar çıkartacak
// indirim yoksa asıl fiyatı döndürücek

export default (price: number, discount: number = 0) => {
    if (discount) {
        return (price * (100 - discount)) / 100;
    } else {
        return price;
    }
  };