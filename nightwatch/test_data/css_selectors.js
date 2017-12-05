module.exports = {
    homeScreen: {
        startButton: 'button[class=home-btn]',
        
    },
    loanPropTypeScreen: {
        loanDropDown: 'select[name=loanDropDown]',
        loanSelectors: {
            optionPurchase: 'option[name=purchase]',
            optionRefi: 'option[name=refi]',
            optionEquity: 'option[name=equity]'
        },
        propDropDown: 'select[name=propDropDown]',
        propSelectors: {
            optionSingle: 'option[name=singleHome]',
            optionTown: 'option[name=townHome]',
            optionCondo: 'option[name=condo]',
            optionMulti: 'option[name=multiHome]',
            optionMobile: 'option[name=mobileHome]'
        },
        nextButton: 'button[name=next]'
    },
    cityScreen: {
        city: 'input[name="cityName"]'
    },
    whatPropScreen: {
        primaryHome: 'button[name="primary"]',
        rental: 'button[name="rental"]',
        secondHome: 'button[name="secondary"]'        
    },
    foundHomeScreen: {
        found: 'button[name="yesFound"]',
        notFound: 'button[name="noFound"]'
    },
    agentScreen: {
        agent: 'button[name="yesAgent"]',
        noAgent: 'button[name="noAgent"]'
    },
    paymentScreen: {
        purchasePrice: 'input[name="purchasePrice"]',
        downPayment: 'input[name="downPayment"]',
        nextButton: 'button[name=next]'
    },
    creditScoreScreen: {
        scoreExcellent: 'button[name="excellent"]',
        scoreGood: 'button[name="good"]',
        scoreFair: 'button[name="fair"]',
        scorePoor: 'button[name="poor"]'
    },
    historyScreen: {
        noHistory: 'button[name="noBankruptForeclosure"]',
        bankruptcy: 'button[name="bankrupt"]',
        foreclusure: 'button[name="foreclosure"]',
        bothHistory: 'button[name="bankruptForeclosure"]'
    },
    addressScreen: {
        addressOne: 'input[name="addressOne"]',
        addressTwo: 'input[name="addressTwo"]',
        addressThree:  'input[name="addressThree"]',
        nextButton: 'button[name=next]'        
    },
    nameScreen: {
        firstName: 'input[name=firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        nextButton: 'button[name=next]'
    },
    overviewScreen: {
        send: 'button[name="send"]',
        startAgain: 'button[name="startOver"]'
    }
}