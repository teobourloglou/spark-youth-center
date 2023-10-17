function translationSwitcher() {
    return {
        selected: 0,
        languages: [
            {
                label: 'English',
                lang: 'en',
            },
            {
                label: 'Greek',
                lang: 'el',
            },
        ],
        menuToggle: false,
        // Header
        home: {
            en: 'Home',
            el: 'Αρχική'
        },
        create: {
            en: 'Create',
            el: 'Create'
        },
        get_involved: {
            en: 'Get involved',
            el: 'Συμμετέχετε'
        },
        upcoming_events: {
            en: 'Upcoming Events',
            el: 'Upcoming Events'
        },
        // Hero
        title: {
            en: "Spark: Stewarding Dreams.",
            el: "Spark: Καλλιεργώντας Όνειρα.",
        },
        description: {
            en: "A shared community space that exists for the youth in Thessaloniki to discover their God given identity and develop dreams.",
            el: "Ένας κοινόχρηστος κοινοτικός χώρος που υπάρχει για τους νέους στη Θεσσαλονίκη για να ανακαλύψουν την ταυτότητα που τους δόθηκε από τον Θεό και να αναπτύξουν όνειρα.",
        },
        // About
        what_is_spark: {
            en: "What is Spark?",
            el: "Τι είναι το Spark;"
        }
    }
}