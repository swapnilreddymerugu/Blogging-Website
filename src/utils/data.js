const blogData = [
    {
        id: 1,
        title: "Learn React from Scratch",
        category: "Programming",
        author: "Swapnil Reddy",
        image: "/media/programming.jpg",
        description: "A beginner-friendly guide to understanding React fundamentals, components, and hooks.",
        content: `
React is one of the most popular JavaScript libraries for building modern user interfaces. It is widely used for creating single-page applications where performance and user experience matter the most.

When learning React from scratch, the first step is understanding why React exists. Traditional JavaScript manipulates the DOM directly, which becomes inefficient as applications grow. React solves this problem by using a virtual DOM that updates only what is necessary.

Components are the building blocks of React. A component is a reusable piece of UI that can accept inputs called props and maintain its own state. Breaking an application into components makes the code easier to manage and scale.

JSX is another important concept in React. It allows developers to write HTML-like syntax inside JavaScript, making the code more readable and expressive. Although it looks like HTML, JSX is converted into JavaScript behind the scenes.

State management is a core concept beginners must understand. Using the useState hook, React allows components to store and update data dynamically. Whenever state changes, React automatically re-renders the UI.

React also introduces hooks like useEffect for handling side effects such as API calls, subscriptions, and timers. Understanding hooks is essential for building real-world applications.

As you progress, learning concepts like conditional rendering, lists using map(), and lifting state up becomes crucial. These patterns help build interactive and dynamic interfaces.

In conclusion, learning React from scratch requires patience and practice. By building small projects and understanding core concepts, anyone can become confident in React development.
`
,
        createdAt: "2025-01-05",
        views: 1240,
        likes: 320,
        trending: true
    },
    {
        id: 2,
        title: "Yoga for Stress Relief",
        category: "Health",
        author: "Neha Patel",
        image: "/media/health/yoga.jpg",
        description: "Effective yoga poses to manage stress and anxiety.",
        content: `
Stress has become a common issue in modern lifestyles, and yoga offers a natural and effective way to manage it. Yoga combines physical postures, breathing techniques, and mindfulness to calm both the body and mind.

Yoga for stress relief focuses on slow movements and controlled breathing. These practices activate the parasympathetic nervous system, which helps reduce anxiety and tension.

Simple poses such as Child's Pose, Cat-Cow Stretch, and Forward Bends help release physical stress stored in muscles. These poses promote relaxation and improve blood circulation.

Breathing techniques, also known as pranayama, play a vital role in stress management. Deep breathing increases oxygen flow and reduces cortisol levels in the body.

Mental focus during yoga practice helps individuals stay present. This mindfulness reduces overthinking and improves emotional balance.

Practicing yoga regularly can improve sleep quality, concentration, and mood. Even 15 to 20 minutes a day can create noticeable improvements in mental health.

Yoga is suitable for people of all ages and fitness levels. It does not require expensive equipment, making it accessible to everyone`
,
        focus: "Mental Health",
        createdAt: "2025-01-04",
        views: 1680,
        likes: 490,
        trending: true
    },
    {
        id: 3,
        title: "A Complete Guide to Bali",
        category: "Travel",
        author: "Neha Patel",
        image: "/media/travel/bali.jpg",
        description: "Everything you need to know before visiting Bali – beaches, temples, and food.",
        content: `
Bali is one of the most popular travel destinations in the world, known for its beautiful beaches, rich culture, and warm hospitality. Whether you are a nature lover, adventure seeker, or someone looking for relaxation, Bali offers something for everyone.

The island is famous for its stunning temples such as Uluwatu and Tanah Lot. These cultural landmarks provide insight into Balinese traditions and spiritual practices.

Bali’s beaches range from lively surf spots like Kuta to peaceful shores like Nusa Dua. Each beach offers a unique experience depending on your travel preferences.

Food is another highlight of Bali. Traditional dishes such as Nasi Goreng, Satay, and Babi Guling are must-try options for visitors.

For nature enthusiasts, Bali offers lush rice terraces, waterfalls, and volcano hikes. Places like Ubud and Mount Batur provide breathtaking views and memorable experiences.

Travelers should plan their itinerary based on interests and travel time. Renting scooters, hiring local guides, and respecting cultural norms enhance the overall experience.

In conclusion, Bali is a perfect blend of adventure, culture, and relaxation. Proper planning ensures a smooth and unforgettable journey.
`
,
        location: "Bali, Indonesia",
        createdAt: "2025-01-03",
        views: 2120,
        likes: 610,
        trending: true
    },
    {
        id: 4,
        title: "10 Healthy Home Workouts",
        category: "Fitness",
        author: "John Carter",
        image: "/media/workout.jpg",
        description: "Simple home workouts you can do without any gym equipment.",
        content: `
Home workouts have gained popularity due to their convenience and flexibility. They allow individuals to stay fit without relying on gym memberships or equipment.

Healthy home workouts include exercises such as squats, push-ups, lunges, planks, and jumping jacks. These bodyweight exercises target multiple muscle groups effectively.

Consistency is more important than intensity. Short daily workouts help build strength and endurance over time.

Home workouts also reduce common excuses related to travel time and gym availability. This makes fitness more accessible for busy individuals.

Stretching before and after workouts prevents injuries and improves flexibility. Warm-up routines prepare muscles for movement.

Tracking progress helps maintain motivation. Small improvements in strength and stamina indicate positive results.

In conclusion, home workouts are a practical and effective way to maintain fitness. With dedication and consistency, they deliver long-term health benefits.
`
,
        createdAt: "2025-01-01",
        views: 1540,
        likes: 410,
        trending: true
    },
    {
        id: 5,
        title: "Morning Yoga for Beginners",
        category: "Fitness",
        author: "Neha Patel",
        image: "/media/workout.jpg",
        description: "Start your day with yoga poses that calm the mind and body.",
        content: `
Morning yoga is an excellent way for beginners to start their fitness journey. It gently awakens the body and prepares the mind for the day ahead.

Simple poses such as Mountain Pose, Sun Salutation, and Downward Dog improve flexibility and circulation.

Morning yoga helps reduce stiffness caused by prolonged sitting or poor posture. It also improves breathing and oxygen flow.

Practicing yoga in the morning promotes mental clarity and reduces stress throughout the day.

Beginners should focus on slow movements and proper alignment rather than perfection. Listening to the body is key.

Regular morning yoga builds discipline and encourages a healthy daily routine.

In conclusion, morning yoga is a beginner-friendly practice that enhances both physical and mental well-being.
`
,
        createdAt: "2024-12-30",
        views: 640,
        likes: 150,
        trending: false
    },
    {
        id: 6,
        title: "Best Protein-Rich Foods",
        category: "Fitness",
        author: "Amit Kumar",
        image: "/media/workout.jpg",
        description: "High-protein foods to support muscle growth and recovery.",
       content: `
Protein is an essential nutrient required for muscle growth, repair, and overall health. Including protein-rich foods in daily meals supports fitness goals.

Common protein sources include eggs, lean meats, dairy products, legumes, nuts, and seeds. Plant-based proteins are equally effective when consumed properly.

Protein helps maintain muscle mass and supports recovery after workouts. It also increases satiety, reducing unhealthy snacking.

Balanced protein intake throughout the day ensures steady energy levels.

Understanding portion sizes and dietary needs is important for optimal benefits.

In conclusion, protein-rich foods play a vital role in maintaining fitness and long-term health.
`
,
        createdAt: "2024-12-28",
        views: 890,
        likes: 230,
        trending: true
    },
    {
        id: 7,
        title: "Easy Indian Cooking Recipes",
        category: "Cooking",
        author: "Priya Singh",
        image: "/media/cooking.jpg",
        description: "Simple and delicious Indian recipes for beginners.",
        content: `
Indian cooking is rich in flavor, tradition, and variety. Beginners can start with simple recipes using basic spices and ingredients.

Dishes like dal, vegetable curries, and rice-based meals are easy to prepare and nutritious.

Understanding spices such as turmeric, cumin, and coriander enhances cooking confidence.

Home cooking allows control over ingredients and promotes healthier eating habits.

Practicing simple recipes regularly improves cooking skills over time.

In conclusion, Indian cooking becomes enjoyable when approached with patience and curiosity.
`
,
        createdAt: "2024-12-27",
        views: 720,
        likes: 190,
        trending: false
    },
    {
        id: 8,
        title: "5-Minute Breakfast Ideas",
        category: "Cooking",
        author: "Rohit Mehta",
        image: "/media/cooking.jpg",
        description: "Quick breakfast recipes for busy mornings.",
        content: `
Breakfast is the most important meal of the day, and quick options make it easier to maintain consistency.

Healthy 5-minute breakfasts include smoothies, oats, toast with toppings, and boiled eggs.

Quick meals save time while providing essential nutrients.

Planning ingredients in advance makes mornings stress-free.

In conclusion, fast breakfasts support energy and productivity throughout the day.
`
,
        createdAt: "2024-12-26",
        views: 1100,
        likes: 310,
        trending: true
    },
    {
        id: 9,
        title: "Street Food You Can Make at Home",
        category: "Cooking",
        author: "Ayesha Khan",
        image: "/media/cooking.jpg",
        description: "Recreate popular street foods easily at home.",
        content: `
Street food is loved for its bold flavors and variety. Making it at home ensures hygiene and better ingredient control.

Popular street foods like chaat, samosas, and sandwiches can be prepared easily with practice.

Home preparation allows customization and healthier alternatives.

Cooking street food at home is both fun and satisfying.

In conclusion, homemade street food combines taste, safety, and creativity.
`
,
        createdAt: "2024-12-25",
        views: 950,
        likes: 260,
        trending: true
    },
    {
        id: 10,
        title: "Exploring the Streets of Paris",
        category: "Travel",
        author: "Alex Martin",
        image: "/media/travel/paris.jpg",
        description: "A walk through the romantic streets of Paris, exploring cafes, art, and culture.",
        content: `
Paris is known as the city of art, romance, and culture. Walking through its streets reveals historic architecture and vibrant life.

Cafes, museums, and local markets add charm to the city.

Landmarks such as the Eiffel Tower and Louvre attract visitors from around the world.

Exploring Paris on foot allows travelers to experience local culture authentically.

In conclusion, Paris offers unforgettable experiences through its streets and heritage.
`
,
        location: "Paris, France",
        createdAt: "2025-01-06",
        views: 1820,
        likes: 540,
        trending: true
    },
    {
        id: 11,
        title: "React vs Angular: Which to Choose?",
        category: "Programming",
        author: "Swapnil Reddy",
        image: "/media/programming.jpg",
        description: "A comparison of React and Angular to help you decide.",
        content: `
React and Angular are popular frontend technologies used to build modern web applications.

React focuses on UI components and flexibility, while Angular provides a complete framework.

Choosing between them depends on project size, learning curve, and development needs.

React is lightweight and easier for beginners, while Angular suits enterprise-level applications.

In conclusion, both technologies are powerful when used appropriately.
`
,
        createdAt: "2024-12-22",
        views: 830,
        likes: 210,
        trending: false
    },
    {
        id: 12,
        title: "Meditation Techniques for Beginners",
        category: "Fitness",
        author: "Sonia Malhotra",
        image: "/media/workout.jpg",
        description: "Simple meditation practices to reduce stress and anxiety.",
       content: `
Meditation helps beginners manage stress and improve mental clarity.

Simple breathing exercises and mindfulness techniques are easy to start.

Regular meditation enhances focus, emotional balance, and relaxation.

In conclusion, meditation is a simple yet powerful practice for mental health.
`
,
        createdAt: "2024-12-21",
        views: 690,
        likes: 175,
        trending: false
    },
    {
        id: 13,
        title: "One-Pot Dinner Recipes",
        category: "Cooking",
        author: "Vikram Joshi",
        image: "/media/cooking.jpg",
        description: "Delicious one-pot meals that save time and effort.",
       content: `
One-pot recipes simplify cooking and reduce cleanup.

These meals are ideal for busy schedules and balanced nutrition.

Planning ingredients makes cooking efficient and enjoyable.

In conclusion, one-pot meals offer convenience without compromising taste.
`
,
        createdAt: "2024-12-20",
        views: 880,
        likes: 240,
        trending: true
    },
    {
        id: 14,
        title: "Beginner’s Guide to Node.js",
        category: "Programming",
        author: "Arjun Rao",
        image: "/media/programming.jpg",
        description: "Learn backend development using Node.js step by step.",
        content: `
Node.js allows JavaScript to run on the server side.

It is widely used for building scalable backend applications.

Understanding event-driven architecture is key to Node.js.

In conclusion, Node.js is an essential tool for modern web development.
`
,
        createdAt: "2024-12-18",
        views: 1020,
        likes: 300,
        trending: true
    },
    {
        id: 15,
        title: "Healthy Eating: A Beginner’s Guide",
        category: "Health",
        author: "Dr. Vikram Joshi",
        image: "/media/health/healthy-food.jpg",
        description: "Learn the basics of healthy eating and balanced nutrition.",
        content: `
Healthy eating focuses on balanced nutrition and portion control.

Including fruits, vegetables, proteins, and whole grains supports overall health.

Consistency matters more than strict dieting.

In conclusion, healthy eating is a sustainable lifestyle choice.
`
,
        focus: "Nutrition",
        createdAt: "2025-01-03",
        views: 1450,
        likes: 410,
        trending: false
    },
    {
        id: 16,
        title: "Understanding JavaScript Closures",
        category: "Programming",
        author: "Kunal Shah",
        image: "/media/programming.jpg",
        description: "A deep dive into closures with real-world examples.",
       content: `
Closures are an important JavaScript concept that allows functions to access outer scope variables.

They are commonly used in callbacks and event handling.

Understanding closures improves code structure and efficiency.

In conclusion, mastering closures enhances JavaScript expertise.
`
,
        createdAt: "2024-12-24",
        views: 1700,
        likes: 520,
        trending: true
    }
];

export default blogData;
