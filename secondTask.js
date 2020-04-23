const data = [{
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

const finalInterest = (principal, rate, time, interest) => {
    return {
        principal,
        rate,
        time,
        interest
    }
};


const interestCalculator = (arr) => {
    let rate, interest, interestData = [];
    arr.forEach(data => {
        if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
            rate = 3;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push(
                finalInterest(data.principal, rate, data.time, interest)
            );
        } else if (data.principal >= 2500 && data.time >= 3) {
            rate = 4;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push(
                finalInterest(data.principal, rate, data.time, interest)
            );
        } else if (data.principal < 2500 || data.time <= 1) {
            rate = 2;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push(
                finalInterest(data.principal, rate, data.time, interest)
            );
        } else {
            rate = 1;
            interest = (data.principal * rate * data.time) / 100;
            interestData.push(
                finalInterest(data.principal, rate, data.time, interest)
            );
        }
    })

    console.log(interestData);

    return interestData;
}

interestCalculator(data);