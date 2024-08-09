
const dailyNormaEveryMan = 1.5;

export const calculateDailyNorma = (weight, gender, activeTime = 0) => {
    if (!weight) return dailyNormaEveryMan;

    let volume = 0;
    switch (gender) {
        case "woman":
            volume = (weight * 0.03) + (activeTime * 0.4);
            break;
        case "man":
            volume = (weight * 0.04) + (activeTime * 0.6);
            break;
        default: volume = 0;
    }
    return volume.toFixed(1);
};