module.exports = {
    name: "Elkhorn Roofing",
    email: "sales@elkhornroofing.com",
    phoneForTel: "918-471-7790",
    phoneFormatted: "(918) 471-7790",
    address: {
        lineOne: "30515 S County Rd",
        
        city: "4350 Kinta",
        state: "OK",
        zip: "74552",
        country: "US",
        mapLink: "https://maps.app.goo.gl/ATs4oqoBV2uSh3sX6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/elkhorn_roofing/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
