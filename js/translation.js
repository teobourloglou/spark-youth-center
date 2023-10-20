const translationSwitcher = () => {
    const storedLanguage = localStorage.getItem('selectedLanguage');

    return {
        selected: storedLanguage || 0,
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
            en: "A shared community space that exists for the youth in Thessaloniki to be equipped, discover their gifts and develop dreams.",
            el: "A shared community space that exists for the youth in Thessaloniki to be equipped, discover their gifts and develop dreams.",
        },
        // Statement
        statement: {
            en: "YOU ARE CREATED TO DREAM, EXPLORE &",
            el: "YOU ARE CREATED TO DREAM, EXPLORE &",
        },
        statement_create: {
            en: "CREATE",
            el: "CREATE",
        },
        // About
        what_is_spark: {
            en: "What is Spark?",
            el: "Τι είναι το Spark;"
        },
        about_text: {
            en: "Spark is a creative and open space in Thessaloniki. We want to host people and their ideas!<br><br>Come and JOIN US in our events, projects. We would love to meet you.<br><br>Spark was created out of a dream of a few young people, with love and excitement in 2022. Seeing the need for more creative social spaces for youth in our city, we decided to create this initiative.<br><br>Spark is a flexible co-working and social space for creative minds, located on the ground and underground floor of a apartment building, in the quiet yet lively neighborhood next to the iconic Yeni Tzami.",
            el: "Spark is a creative and open space in Thessaloniki. We want to host people and their ideas!<br><br>Come and JOIN US in our events, projects. We would love to meet you.<br><br>Spark was created out of a dream of a few young people, with love and excitement in 2022. Seeing the need for more creative social spaces for youth in our city, we decided to create this initiative.<br><br>Spark is a flexible co-working and social space for creative minds, located on the ground and underground floor of a apartment building, in the quiet yet lively neighborhood next to the iconic Yeni Tzami.",
        },
        // Our Spaces
        our_spaces_title: {
            en: "Our Spaces",
            el: "Οι χώροι μας",
        },
        space_1_title: {
            en: "Main Space",
            el: "Main Space",
        },
        space_1_text: {
            en: "COWORKING AREA ASK FOR AVAILABLE SEATS!<br><br>Spark gives you everything you need to work and grow! Join a creative working environment while focusing on what really matters, your projects!",
            el: "COWORKING AREA ASK FOR AVAILABLE SEATS!<br><br>Spark gives you everything you need to work and grow! Join a creative working environment while focusing on what really matters, your projects!",
        },
        space_2_title: {
            en: "Side Space",
            el: "Side Space",
        },
        space_2_text: {
            en: "Seminar/Class Room<br>Photo Studio Space<br>Content Creator Studio",
            el: "Seminar/Class Room<br>Photo Studio Space<br>Content Creator Studio",
        },
        space_3_title: {
            en: "Upper Room",
            el: "Upper Room",
        },
        space_3_text: {
            en: "MEETING ROOM<br>CONNECT WITH YOUR CREW<br><br>Spark provides everything you need for a productive meeting with your team or your clients!",
            el: "MEETING ROOM<br>CONNECT WITH YOUR CREW<br><br>Spark provides everything you need for a productive meeting with your team or your clients!",
        },
        our_spaces_text: {
            en: "​Host up to 50 people in our Main or Side space.",
            el: "​Host up to 50 people in our Main or Side space.",
        },
        our_spaces_button: {
            en: "Book your meeting HERE",
            el: "Book your meeting HERE",
        },
        // Events
        events_title: {
            en: "Events",
            el: "Events",
        },
        // Create
        create_title: {
            en: "CREATE!",
            el: "CREATE!",
        },
        create_text: {
            en: "Host your Workshop, Event or Project!<br>Workshops, team building activities, exhibitions, talks, hackathons..<br><br>Whatever your need to host Spark will support you!<br><br>We provide hosting services and production support. You need an extra set of hands?<br>We are your support team!!",
            el: "Host your Workshop, Event or Project!<br>Workshops, team building activities, exhibitions, talks, hackathons..<br><br>Whatever your need to host Spark will support you!<br><br>We provide hosting services and production support. You need an extra set of hands?<br>We are your support team!!",
        },
        create_button: {
            en: "Get in touch HERE",
            el: "Get in touch HERE",
        },
        // Contact
        contact_title: {
            en: "Contact us",
            el: "Contact us",
        },
        contact_text: {
            en: "For more info on our events, projects or your booking",
            el: "For more info on our events, projects or your booking",
        },
        contact_address_label: {
            en: "Address",
            el: "Διεύθυνση",
        },
        contact_address_value: {
            en: "Zaimi 8, 54641, Thessaloniki, Greece",
            el: "Ζαϊμη 8, 54641, Θεσσαλονίκη, Ελλάδα",
        },
        contact_phone_label: {
            en: "Phone",
            el: "Τηλέφωνο",
        },
    }
}

const changeLanguage = (switcher, index) => {
    translationSwitcher.selected = index;
    localStorage.setItem('selectedLanguage', index);
}