const descuento = (precioOriginal,porcenDescuento) => (precioOriginal * porcenDescuento) / 100   

const precioConDescuento = (precioOriginal,descuento) => precioOriginal - descuento

const coupons = [
    {name:"juanDC_es_batman",
     discount:15
    },
    {name:"pero_no_se_los_diga_a_nadie",
     discount:30
    },
    {name:"es_un_secreto",   
     discount:25
    },
];

function calcularDescuento() {
    const inputPrice = document.getElementById("price") 
    const valuePrice = inputPrice.value

    /* const inputDiscount = document.getElementById("discount")
    const valueDiscount = inputDiscount.value */

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue= inputCoupon.value

    //let descue 
    
    //solucion # 1: Array y Switch

    /* switch (couponValue) {
        case "juanDC_es_batman":
            descue = 15
        case "pero_no_se_los_diga_a_nadie":
            descue = 30
        case "es_un_secreto":
            descue = 25
        break
    }  */

    //solucion # 2: legibilidad, error-first y muerte al switch
    /* if (!coupons.includes(couponValue)) {
        alert ("El cupon " + couponValue + " no es valido")
    } else if (couponValue === "juanDC_es_batman") {
        descue = 15
    } else if (couponValue === "pero_no_se_los_diga_a_nadie") {
        descue = 30
    } else if (couponValue === "es_un_secreto") {
        descue = 25
    } */

    //solucion # 3: arrays y condicionales, mucho más inteligentes
    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue
    }
    const userCoupon = coupons.find(isCouponValueValid)

    if(!userCoupon){
        alert ("El cupon " + couponValue + " no es valido")
    } else {
        let descue = coupons.discount
        const discount = descuento(valuePrice, descue)
        const priceConDiscount = precioConDescuento(valuePrice, discount)
        const resultP = document.getElementById("resultPrice")
        resultP.innerText ="El precio con descuento es: $ " + priceConDiscount
    }

    


    //const discount = descuento(valuePrice, descue)
    //const priceConDiscount = precioConDescuento(valuePrice, discount)

    //const resultP = document.getElementById("resultPrice")
    //resultP.innerText ="El precio con descuento es: $ " + priceConDiscount
}
