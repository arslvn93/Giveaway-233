const config = {
  "settings": {
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveawayupdate",
    "confettiColors": ["#003DA5", "#FF4D00", "#00275E", "#FFFFFF", "#C8102E"],
    "showCountdownInHero": true
  },
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_out", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "luxury_staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Tickets Experience",
    "heroHeadline": "Win Tickets to a <span class='highlight'>Toronto Blue Jays Game</span>!",
    "heroSubheadline": "Celebrate Canada Day with us and enter for a chance to win tickets valued at $100 to see the Jays live!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter Now for Your Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "⚾ You're In! ⚾",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email on July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Win a $100 value prize to enjoy tickets to a live Toronto Blue Jays game! Experience the energy, excitement, and memorable moments of Canada's favorite sport with friends or family.",
    "images": [
      {
        "src": "https://cdn.pixabay.com/photo/2017/07/11/16/05/baseball-2490064_1280.jpg",
        "alt": "Toronto Blue Jays Baseball Field"
      },
      {
        "src": "https://cdn.pixabay.com/photo/2016/11/15/04/24/baseball-1822433_1280.jpg",
        "alt": "Baseball Fans Cheer"
      },
      {
        "src": "https://cdn.pixabay.com/photo/2017/08/06/23/07/baseball-2592374_1280.jpg",
        "alt": "Toronto Blue Jays Game Tickets"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Tickets valued at $100 to a Jays game" },
      { "icon": "fas fa-users", "text": "Perfect for family or friends outing" },
      { "icon": "fas fa-baseball-ball", "text": "Enjoy the thrill of live baseball" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry on-site at our booth" }
    ],
    "limitedTimeOfferText": "\u26BD Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN MY TICKETS!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Find us at the Canada Day event on July 1st to enter the giveaway."
      },
      {
        "icon": "fas fa-pen",
        "title": "Fill Out a Quick Survey",
        "description": "Complete a simple entry form—just a few seconds and you’re done!"
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Wait for the Draw",
        "description": "Winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Experience live Jays excitement" },
      { "icon": "fas fa-gift", "text": "Free entry with amazing prize value" },
      { "icon": "fas fa-users", "text": "Great for friends and family outings" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win Blue Jays tickets worth $100!",
    "entryCountText": "Join hundreds of baseball fans who’ve already entered!",
    "socialSharePrompt": "Share the excitement with your friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays Tickets at the Canada Day event!")
    },
    "termsText": "By entering, you agree to our <a href='https://www.mls.theskygroup.ca/privacy-policy' target='_blank'>Privacy Policy</a> and <a href='https://www.mls.theskygroup.ca/privacy-policy' target='_blank'>Terms & Conditions</a>."
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Random Winner Selection",
      "text": "Winner is chosen randomly and fairly from all eligible entries received at the Canada Day event booth."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted via email on or about July 2, 2025. Please check your inbox and spam folders regularly."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to attendees of the Canada Day event on July 1, 2025, who are 18 years or older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "Entry is open on July 1, 2025, at our booth during the event. Winner announced July 2, 2025."
      },
      {
        "q": "How is the winner selected?",
        "a": "The winner is selected randomly from all entries collected at the event."
      },
      {
        "q": "Do I need to be present to win?",
        "a": "Yes, attendees must enter at the booth to qualify. Winner will be notified by email."
      },
      {
        "q": "Can I enter multiple times?",
        "a": "Limit one entry per person. Multiple entries will be disqualified."
      },
      {
        "q": "How is my information used?",
        "a": "Information is used only for this giveaway and handled according to our Privacy Policy."
      }
    ],
    "fullRulesPdfLink": "",
    "tips": [
      "Double-check your contact info before submitting entry.",
      "Add shar@theskygroup.ca to your contacts to ensure you receive notifications.",
      "Visit our social media pages for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy",
    "termsLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "deploymentInfo": {
    "repoName": "Giveaway-233",
    "repoUrl": "https://github.com/arslvn93/Giveaway-233",
    "netlifyUrl": "http://Giveaway-233.netlify.app",
    "netlifyId": "1003252963"
  }
};
