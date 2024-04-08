const eventsData = [
    {
        title: "Tech Conference 2024",
        description: "Annual tech conference focusing on the latest in software development.",
        location: "London, UK",
        date_created: new Date(),
        date_start: new Date("2024-04-10"),
        date_end: new Date("2024-04-12"),
        price: 299,
        isFree: false,
        image: "https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg",
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
        image: "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg",
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
        image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg",
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
        image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg",
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
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
        category: "Lifestyle",
        url: "https://example.com/events/diy-home-decor",
        slots: 100,
        attendees: []
      },
      { 
        title: "Fantasy Book Club", 
        description: "Monthly meeting of fantasy literature enthusiasts.", 
        location: "Oxford, UK", 
        date_created: new Date(), 
        date_start: new Date("2024-06-15"), 
        date_end: new Date("2024-06-15"), 
        price: 0, 
        isFree: true, 
        image: "https://images.pexels.com/photos/4861330/pexels-photo-4861330.jpeg", 
        category: "Literature", 
        url: "https://example.com/events/fantasy-book-club", 
        slots: 30, 
        attendees: [] 
      },
      { 
        title: "Live Jazz Evening", 
        description: "Enjoy an evening of live jazz music from renowned artists.", 
        location: "Newcastle, UK", 
        date_created: new Date(), 
        date_start: new Date("2024-10-20"), 
        date_end: new Date("2024-10-20"), 
        price: 45, 
        isFree: false, 
        image: "https://images.pexels.com/photos/9419405/pexels-photo-9419405.jpeg", 
        category: "Music", 
        url: "https://example.com/events/live-jazz-evening", 
        slots: 150, 
        attendees: [] 
      },
      { 
        title: "Start-up Pitch Night", 
        description: "Pitch your start-up idea to potential investors and entrepreneurs.", 
        location: "London, UK", 
        date_created: new Date(), 
        date_start: new Date("2024-11-10"), 
        date_end: new Date("2024-11-10"), 
        price: 100, 
        isFree: false, 
        image: "https://images.pexels.com/photos/7414013/pexels-photo-7414013.jpeg", 
        category: "Business", 
        url: "https://example.com/events/start-up-pitch-night", 
        slots: 100, 
        attendees: [] 
      },
      { 
        title: "Organic Farming Workshop", 
        description: "Learn about organic farming practices and sustainable living.", 
        location: "Cwmgors, Wales", 
        date_created: new Date(), 
        date_start: new Date("2024-07-05"), 
        date_end: new Date("2024-07-06"), 
        price: 200, 
        isFree: false, 
        image: "https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg", 
        category: "Environment", 
        url: "https://example.com/events/organic-farming-workshop", 
        slots: 75, 
        attendees: [] 
      },
      { 
        title: "Digital Marketing Seminar", 
        description: "Explore the latest trends in digital marketing and grow your business online.", 
        location: "Machester, UK", 
        date_created: new Date(), 
        date_start: new Date("2024-08-25"), 
        date_end: new Date("2024-08-26"), 
        price: 350, 
        isFree: false, 
        image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg", 
        category: "Marketing", 
        url: "https://example.com/events/digital-marketing-seminar", 
        slots: 200, 
        attendees: [] }
  ];

  module.exports = eventsData;