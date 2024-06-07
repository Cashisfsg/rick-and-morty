export const formatCurrency = (
    currency: number,
    fractionDigits: number = 0
) => {
    const formatterUSD = new Intl.NumberFormat("ru-RU", {
        style: "decimal",
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });

    return formatterUSD.format(currency);
};
