export const formatNumber = (num: number): string => {
    const ranges = [
        { divider: 1e9, suffix: "B" },
        { divider: 1e6, suffix: "M" },
        { divider: 1e3, suffix: "k" },
    ];

    for (const range of ranges) {
        if (num >= range.divider) {
            return (
                (num / range.divider).toFixed(1).replace(/\.0$/, "") +
                range.suffix
            );
        }
    }
    return num.toString();
};
