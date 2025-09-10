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
            el: 'Δημιούργησε'
        },
        get_involved: {
            en: 'Host your own event',
            el: 'Τρέξε το event σου'
        },
        upcoming_events: {
            en: 'Upcoming Events',
            el: 'Τα events μας'
        },
        // Hero
        title: {
            en: "Spark<br>Stewarding Dreams",
            el: "Spark<br>Όνειρα σε πράξη",
        },
        description: {
            en: "A shared community space that exists for the youth in Thessaloniki to be equipped, discover their gifts and develop dreams.",
            el: "Ένας φιλόξενος χώρος, που δημιουργήθηκε για τους νέους της Θεσσαλονίκης, ώστε να αναπτύξουν τις δεξιότητές τους και να τολμήσουν/ επιχειρήσουν τα όνειρά τους, μέσα από τις δικές τους δράσεις.",
        },
        // Statement
        statement: {
            en: "",
            el: "ΑΝΑΚΑΛΥΨΕ",
        },
        statement_2: {
            en: "YOU ARE CREATED TO DREAM, EXPLORE &",
            el: "ΟΝΕΙΡΕΨΟΥ",
        },
        statement_3: {
            en: "CREATE",
            el: "ΔΗΜΙΟΥΡΓΗΣΕ",
        },
        statement_footer: {
            en: "You are created to ",
            el: "You are created to ",
        },
        statement_footer_dream: {
            en: "Dream, ",
            el: "Dream, ",
        },
        statement_footer_explore: {
            en: "Explore & ",
            el: "Explore & ",
        },
        statement_footer_grow: {
            en: "Grow",
            el: "Grow",
        },
        // About
        what_is_spark: {
            en: "What is Spark?",
            el: "Τι είναι το Spark;"
        },
        about_text: {
            en: "Spark is a creative and open space in Thessaloniki. We want to host people and their ideas!<br><br>Come and JOIN US in our events, projects. We would love to meet you.<br><br>Spark was created out of a dream of a few young people, with love and excitement in 2022. Seeing the need for more creative social spaces for youth in our city, we decided to create this initiative.<br><br>Spark is a flexible co-working and social space for creative minds, located on the ground and underground floor of a apartment building, in the quiet yet lively neighborhood next to the iconic Yeni Tzami.",
            el: "Το Spark είναι ένας δημιουργικός και ανοιχτός - στο κοινό- χώρος, στη Θεσσαλονίκη. Όραμά μας, να φιλοξενούμε τους ανθρώπους και τις ιδέες τους!<br><br>Έλα κι εσύ να ΣΥΜΜΕΤΑΣΧΕΙΣ στις δράσεις και τα project μας. Θα χαρούμε πολύ να σε γνωρίσουμε!<br><br>Το Spark δημιουργήθηκε το 2022, με αγάπη και ενθουσιασμό, μέσα από το όραμα μιας παρέας νέων ανθρώπων. Παρατηρώντας την ανάγκη στην πόλη μας για πολυχώρους που θα συνδυάζουν τη δημιουργικότητα και την κοινωνικοποίηση/ συναναστροφή με άλλους, αποφασίσαμε υλοποιήσουμε τη συγκεκριμένη πρωτοβουλία.<br><br>Το Spark είναι ένας ευέλικτος χώρος, ιδανικός για (συν)εργασία και κοινωνικοποίηση και απευθύνεται σε δημιουργικούς ανθρώπους. Στεγάζεται σε ισόγειο διαμέρισμα, σε μια πυκνοκατοικημένη γειτονιά, δίπλα στο Γενί Τζαμί.",
        },
        // Our Spaces
        our_spaces_title: {
            en: "Our Spaces",
            el: "Οι εγκαταστάσεις μας",
        },
        space_1_title: {
            en: "Main Space",
            el: "Κεντρικός Χώρος",
        },
        space_1_text: {
            en: "COWORKING AREA ASK FOR AVAILABLE SEATS!<br><br>Spark gives you everything you need to work and grow! Join a creative working environment while focusing on what really matters, your projects!",
            el: "ΧΩΡΟΣ ΕΡΓΑΣΙΑΣ, ΡΩΤΗΣΕ ΜΑΣ ΓΙΑ ΔΙΑΘΕΣΗΜΟΤΗΤΑ!<br><br>Το Spark σου προσφέρει όλα όσα χρειάζεσαι, για να δουλέψεις και να εξελιχθείς! Γίνε μέλος σε ένα δημιουργικό περιβάλλον, εστιάζοντας σε ό,τι έχει πραγματικά σημασία, μέσα από τις δικές σου δράσεις!",
        },
        space_2_title: {
            en: "Side Space",
            el: "Πλαϊνός Χώρος",
        },
        space_2_text: {
            en: "Seminar/Class Room<br>Photo Studio Space<br>Content Creator Studio",
            el: "Αίθουσα Σεμιναρίων/ Μαθημάτων<br>Στούντιο Φωτογραφίας<br>Στούντιο για δημιουργία περιεχομένου",
        },
        our_spaces_text: {
            en: "​Host up to 50 people in our Main or Side space.",
            el: "Οι εγκαταστάσεις του Spark έχουν χωρητικότητα για 50 άτομα, συνολικά.",
        },
        our_spaces_button: {
            en: "Book your meeting HERE",
            el: "Κλείσε τη συνάντησή σου ΕΔΩ",
        },
        // Events
        events_title: {
            en: "Events",
            el: "Events",
        },
        events_previous_events: {
            en: "Previous Events",
            el: "Προηγούμενα Events",
        },
        events_upcoming_events: {
            en: "Upcoming Events",
            el: "Επόμενα Events",
        },
        no_upcoming_events: {
            en: "No events planned yet.",
            el: "Δεν έχουν προγραμματιστεί events ακόμα."
        },
        // Create
        create_title: {
            en: "CREATE!",
            el: "ΔΗΜΙΟΥΡΓΗΣΕ!",
        },
        create_text: {
            en: "Host your Workshop, Event or Project!<br>Workshops, team building activities, exhibitions, talks, hackathons..<br><br>Whatever your need to host Spark will support you!<br><br>We provide hosting services and production support. You need an extra set of hands?<br>We are your support team!!",
            el: "Διοργάνωσε το δικό σου εργαστήριο, event, ομαδική δραστηριότητα, έκθεση, ομιλία...<br><br>Οτιδήποτε θέλεις να διοργανώσεις, το Spark είναι δίπλα σου, για να το υλοποιήσεις!<br><br>Σου προσφέρουμε τους χώρους συνεδριάσεων/αιθουσών, για να φιλοξενήσεις το δικό σου event<br>και την υποστήριξη για τη διοργάνωση και τη διαχείριση του! Χρειάζεσαι περισσότερη βοήθεια;<br>Είμαστε εδώ, για να στηρίξουμε εσένα και την ομάδα σου!!",
        },
        create_button: {
            en: "Get in touch HERE",
            el: "Έλα σε επαφή μαζί μας",
        },
        discover_button: {
            en: "Discover all our events",
            el: "Ανακάλυψε όλα τα events",
        },
        // Contact
        contact_title: {
            en: "Contact us",
            el: "Επικοινώνησε",
        },
        contact_text: {
            en: "For more info on our events, projects or your booking",
            el: "Για περισσότερες πληροφορίες, σχετικά με τις δράσεις μας ή την κράτηση χώρου, επικοινώνησε μαζί μας",
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
            el: "Τηλέφωνο Επικοινωνίας",
        },
        // Events
        event_1: {
            en: "📹 Content Creator Studio",
            el: "📹 Studio Δημιουργίας Περιεχομένου",
        },
        event_2: {
            en: "🛣️ Life Coaching",
            el: "🛣️ Μαθήματα Αυτοβελτίωσης",
        },
        event_3: {
            en: "🎤 Music Live Shows",
            el: "🎤 Βραδιές Ζωντανής Μουσικής",
        },
        event_4: {
            en: "🇬🇧 English Nights",
            el: "🇬🇧 Βραδιές Αγγλικών",
        },
        event_5: {
            en: "📝 Study Hours",
            el: "📝 Ώρες Διαβάσματος",
        },
        event_6: {
            en: "🎮 Console Tournaments",
            el: "🎮 Τουρνουά Βιντεοπαιχνιδιών",
        },
        event_7: {
            en: "🙌🏼 Community Nights",
            el: "🙌🏼 Community Nights",
        },
        event_8: {
            en: "📽️ Movie Nights",
            el: "📽️ Βραδιές Ταινιών",
        },
        event_9: {
            en: "🗣️ Topic Talks",
            el: "🗣️ Θεματικές Ομιλίες",
        },
        event_10: {
            en: "🎲 Game Nights",
            el: "🎲 Βραδιές Παιχνιδιού",
        },
        event_11: {
            en: "💻 Coworking",
            el: "💻 Coworking",
        },
        event_12: {
            en: "🎚️ DJ Nights",
            el: "🎚️ Βραδιές DJ",
        },
        event_13: {
            en: "📖 Costudying Space",
            el: "📖 Χώρος Διαβάσματος",
        },
        event_14: {
            en: "👩‍⚕️ Counseling",
            el: "👩‍⚕️ Συμβουλευτική",
        },
        event_15: {
            en: "👨‍🏫 Seminars",
            el: "👨‍🏫 Σεμινάρια",
        },
        event_16: {
            en: "🎨 Art Shows",
            el: "🎨 Καλλιτεχνικές Δράσεις",
        },
        event_17: {
            en: "💪🏻 Leadership Seminars",
            el: "💪🏻 Σεμινάρια Ηγεσίας",
        },
        event_18: {
            en: "📚 Book Clubs",
            el: "📚 Ομάδες για Βιβλιοφάγους",
        },
        event_19: {
            en: "👗 Boutique",
            el: "👗 Μπουτικ",
        },
        event_20: {
            en: "🏋️ Training Programs",
            el: "🏋️ Εκπαιδευτικά Προγράμματα",
        },

    }
}

const changeLanguage = (switcher, index) => {
    translationSwitcher.selected = index;
    localStorage.setItem('selectedLanguage', index);
}