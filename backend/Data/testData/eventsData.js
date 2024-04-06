const testEvents = [
    {
      title: "Tech Conference 2024",
      description: "Annual tech conference focusing on the latest in software development.",
      location: "London, UK",
      date_created: new Date(),
      date_start: new Date("2024-04-10"),
      date_end: new Date("2024-04-12"),
      price: 299,
      isFree: false,
      image: "tech_conference_2024.jpg",
      category: "Technology",
      url: "https://example.com/events/tech-conference-2024",
      slots: 500,
      attendees: []
    },
    {
      title: "Local Art Exhibition",
      description: "Explore the latest in contemporary art from local artists.",
      location: "Edinburgh, Scotland",
      date_created: new Date(),
      date_start: new Date("2024-05-15"),
      date_end: new Date("2024-05-20"),
      price: 0,
      isFree: true,
      image: "art_exhibition_2024.jpg",
      category: "Art",
      url: "https://example.com/events/art-exhibition-2024",
      slots: 200,
      attendees: []
    },
    {
      title: "Marathon 2024",
      description: "Join us for the annual city marathon and run for a good cause.",
      location: "Birmingham, UK",
      date_created: new Date(),
      date_start: new Date("2024-09-05"),
      date_end: new Date("2024-09-05"),
      price: 50,
      isFree: false,
      image: "marathon_2024.jpg",
      category: "Sports",
      url: "https://example.com/events/marathon-2024",
      slots: 1000,
      attendees: []
    },
    {
      title: "Cooking Workshop",
      description: "Learn to cook delicious meals with our expert chefs in this weekend workshop.",
      location: "Hull, UK",
      date_created: new Date(),
      date_start: new Date("2024-07-21"),
      date_end: new Date("2024-07-22"),
      price: 150,
      isFree: false,
      image: "cooking_workshop_2024.jpg",
      category: "Food",
      url: "",
      slots: 50,
      attendees: []
    },
    {
      title: "DIY Home Decor",
      description: "Create beautiful home decor items in our DIY workshop.",
      location: "Leeds, UK",
      date_created: new Date(),
      date_start: new Date("2024-08-12"),
      date_end: new Date("2024-08-12"),
      price: 75,
      isFree: false,
      image: "diy_home_decor.jpg",
      category: "Lifestyle",
      url: "https://example.com/events/diy-home-decor",
      slots: 100,
      attendees: []
    }
    ];
  
    module.exports = testEvents;