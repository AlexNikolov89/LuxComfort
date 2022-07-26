const products = [
    {
        name: 'Lille 2 Seater',
        image: '/images/sofas/2-sits/lille-2-seater.jpg',
        description: 'Extremely soft cushions provide excellent seating comfort and make the sofa very comfortable.',
        category: 'Sofa',
        price: 790.99,
        countInStock: 10,
        rating: 3,
        numReviews: 4
    },
    {
        name: 'Modena 2 Seater',
        image: '/images/sofas/2-sits/modena-2-seatar.jpg',
        description: 'Organic shapes and minimal lines come together in a casual, contemporary expression. The Modena chair will add a comfy vibe that calls for you to come lounge in excellent seating comfort. Elegant design details lift the overall expression and together with the soft comfort, ensure a chair that quickly will become your favourite relaxing spot.',
        category: 'Sofa',
        price: 699.90,
        countInStock: 3,
        rating: 4.5,
        numReviews: 6
    },
    {
        name: 'Carlton Sofa',
        image: '/images/sofas/2-sits/carlton-leterh-sofa.jpg',
        description: 'The low back combines with organic shapes for a minimalistic look that invites casual relaxation. Is soft all the way around. The soft, organic armrest make the sofa perfect for a nap.',
        category: 'Sofa',
        price: 1200.99,
        countInStock: 1,
        rating: 5,
        numReviews: 3
    },
    {
        name: 'Amsterdam 3 Seats Sofa',
        image: '/images/sofas/3-sits/amsterdam-sofa.jpg',
        description: 'The Amsterdam 3 seater sofa is your choice for the perfect, luxurious sofa statement. The sofa is in a extremely comfortable mix of hypersoft foam and down. Even the armrest and backrests come with extra padding to make the sofa comfortable all around.',
        category: 'Sofa',
        price: 960.99,
        countInStock: 4,
        rating: 5,
        numReviews: 3
    },
    {
        name: 'London 3 Seats Sofa',
        image: '/images/sofas/3-sits/london-3-seater.jpg',
        description: 'The London sofa is your personal design statement with adjustable headrest and ultimate comfort. The sofa offers a light appearance making it perfect for both small and larger spaces as well as details that make it superb in both leather and fabric. It’s coziness and luxury in one perfect expression.',
        category: 'Sofa',
        price: 890.99,
        countInStock: 4,
        rating: 5,
        numReviews: 3
    },
    {
        name: 'Cenova Sofa',
        image: '/images/sofas/3-sits/cenova-sofa',
        description: 'Feel free to judge the Cenova sofa by its cover – we assure you it is as comfortable as it looks. With large modules, a low base and an array of loose pillows this classic sofa embraces your body and brings a laid-back expression to your living room. Cosy up with your family or claim the sofa all to yourself with this roomy 3 seater sofa.',
        category: 'Sofa',
        price: 999.99,
        countInStock: 2,
        rating: 4,
        numReviews: 2
    },
    {
        name: 'Carmo Corner Sofa',
        image: '/images/sofas/corner/carmo-sofa.jpg',
        description: 'The modern Carmo sofa is a real show-stopper with its cubic look, perfectly accentuated by exclusive piping details. Don’t be fooled by the straight lines, this sofa is a dream to sit on. The open end will create a dynamic, welcoming atmosphere - a true blessing for the integrated areas of open-plan living. Put your feet up, stretch out or use it as an extra seat – you won’t be sorry for choosing this comfortable chaise longue sofa.',
        category: 'Sofa',
        price: 1600.99,
        countInStock: 2,
        rating: 4,
        numReviews: 2
    },
    {
        name: 'Bristol Corner Sofa',
        image: '/images/sofas/corner/bristol-corner-sofa.jpg',
        description: 'Feel free to judge the Bristol sofa by its cover – we assure you it is as comfortable as it looks. The large modules, low base and wide cushions make this classic sofa perfect for lounging, while still keeping a formal look. Put your feet up, stretch out or use it as an extra seat – you won’t be sorry for choosing this comfortable chaise longue sofa.',
        category: 'Sofa',
        price: 1600.99,
        countInStock: 2,
        rating: 4,
        numReviews: 2
    },
    {
        name: 'Chelsea Office Chair',
        image: '/images/office/chelsea-chair.jpg',
        description: 'Chelsea is Karim Rashid’s take on feminine, soft and organic design that adds a sensual comfort to your space. It’s an eye-catching statement piece inspired by the Chelsea neighbourhood of New York City – the art hub and home of the prolific designer.',
        category: 'Office',
        price: 1000.99,
        countInStock: 6,
        rating: 6,
        numReviews: 3
    },
    {
        name: 'Ottawa Sofa',
        image: '/images/office/ottawa-sofa.jpg',
        description: 'Got a creative mind? Designer Karim Rashid surely does, and with Ottawa he invites you to play and customise. Ottawa has a tight look but is an extremely flexible concept, inviting you to create your own space. This flexible combination of modules is designed for the open spaces and provides a carefully selected number of modules for you to play around with.',
        category: 'Office',
        price: 2800.99,
        countInStock: 2,
        rating: 4,
        numReviews: 3
    },
    {
        name: 'Toulouse Sofa',
        image: '/images/office/toulouse-sofa.jpg',
        description: 'The Toulouse system is your sleek modular system with a firm seating comfort and great configurability. The large system is softened by round and curvy edges and its discreet metal frame ensures a light and floating expression. Toulouse presents you with the building blocks to create the perfect lounge-scape.',
        category: 'Office',
        price: 2300.99,
        countInStock: 2,
        rating: 4,
        numReviews: 3
    },
    {
        name: 'Rome Sun Lounger',
        image: '/images/outdoor/rome-sun-lounger.jpg',
        description: 'The Rome sun lounger is your perfect place for comfort and relaxation. Place it in the garden, at the pool or on your terrace, adjust the back and enjoy the sun. The Rome sun lounger combines luxury anti-weather materials, quality craftsmanship and a design language that takes outdoor lounging to a new stylish height.',
        category: 'Outdoor',
        price: 600.99,
        countInStock: 12,
        rating: 1,
        numReviews: 3
    },
    {
        name: 'Rome Outdoor Sofa',
        image: '/images/outdoor/rome-outdoor-sofa.jpg',
        description: 'Get a comfortable place to enjoy the open air and transform your terrace into a contemporary living space with Rome. The minimal design, in high quality materials developed for all weather, ensures many years of great time in the sun. With plenty of room for the entire family, this corner sofa will be the hero of your outdoor space.',
        category: 'Outdoor',
        price: 1200.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Rome 2 Seats Sofa',
        image: '/images/outdoor/rome-2-seats.jpg',
        description: 'Get a comfortable place to enjoy the open air and transform your terrace into a contemporary living space with Rome. The minimal design, in high quality materials developed for all weather, ensures many years of great time in the sun. This 2 seater sofa is big on style and will perfectly fit your outdoor space.',
        category: 'Outdoor',
        price: 1200.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Imola Chair',
        image: '/images/chairs/imola-chair.jpg',
        description: 'Take a closer look. From the striking details to the graceful sweeps of its curves, the Imola armchair is a true design icon. Roomy enough for you to curl up in, yet so elegant it doesn’t seem over the top, the Imola armchair is an instant classic and ready to make a statement in your home. Fitted with a swivel base that turns this chair so seamlessly, you’ll want to take it for a spin.',
        category: 'Office',
        price: 890.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Osaka Chair',
        image: '/images/office/osaka-chair.jpg',
        description: 'With a feminine touch and a nod to 60s design, the Osaka armchair is all about style. The light design and slim proportions make this armchair perfect for small homes or as part of a style coordinated living room set with the Osaka sofa. The beautiful tufted seat adds visual softness and brings a classic look to your living room. The classic, straight armrests emphasise the clean lines and Scandinavian look. Slim aluminium legs complete the light look.',
        category: 'Office',
        price: 890.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Ogi Chair',
        image: '/images/office/ogi-chair.jpg',
        description: 'Your guests might just mistake this modern armchair for a piece of art - and we dare say it almost is. The Ogi armchair found its inspiration in the natural shape of the oyster, giving Ogi its characteristic, eye-catching design and stunning profile. Fitted with a round swivel base accentuating the curved design.',
        category: 'Office',
        price: 450.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Porto Chair',
        image: '/images/office/porto-chair.jpg',
        description: 'Your guests might just mistake this modern armchair for a piece of art - and we dare say it almost is. The Ogi armchair found its inspiration in the natural shape of the oyster, giving Ogi its characteristic, eye-catching design and stunning profile. Fitted with a round swivel base accentuating the curved design.',
        category: 'Office',
        price: 1500.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Newport Dining Chair',
        image: '/images/chairs/newport-chair.jpg',
        description: 'The Newport chair is an elegant, light and functional chair with exclusive details in the back and legs. The artistic symbiosis of a light base and compact seat allows for work with the upholstery options for vibrant and complementary looks.',
        category: 'Dining Chairs',
        price: 390.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Vienna Dining Chair',
        image: '/images/chairs/vienna-chair.jpg',
        description: 'Character, attitude and versatility united in a beautiful design expression. The Vienna chair distinctively combines creased lines, soft shapes and emphasised edges to ensure a comfortable and beautiful expression in you dining or working area.',
        category: 'Dining Chairs',
        price: 390.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Adele Dining Chair',
        image: '/images/chairs/adele-chair.jpg',
        description: 'The iconic Adele chair is all about curves, comfort and character. With a graceful, organic form and sublime comfort this modern chair will set an elegant tone in your home. Straight wooden legs give the dining chair a Scandinavian look and contrast the curved seat. At the same time, the sculptured seat without upholstery highlights the clean lines and minimal form.',
        category: 'Dining Chairs',
        price: 280.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Elba Chair',
        image: '/images/outdoor/elba-chair.jpg',
        description: 'Comfortable, close to maintenance-free and with a style punch to accompany it, Elba outdoor furniture is the perfect setting for great outdoor moments. Time for a barbeque? This outdoor dining chair adds a modern elegance to your outdoor dinner parties.',
        category: 'Outdoor',
        price: 280.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Granada Dining Table',
        image: '/images/tables/granada-table.jpg',
        description: 'Create a casual dining setting with the round Granada dining table and watch it bring a sense of style and urban living to your dining room. The sturdy pedestal base allows for more leg space and gives the table a more edgy look. Need extra seats? Just pull up the clever, built-in extension leaf and go from a 4-person family meal to a dinner party seating 8.',
        category: 'Tables',
        price: 1600.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Vancouver Dining Table',
        image: '/images/tables/vancouver-table.jpg',
        description: 'Vancouver, with its wooden top and heavy feel, is an expression of a natural and organic strength. The elegant metal legs provide a strong contrast to the heavy tabletop and ensures a light, yet strong and elegant look that makes the table radiate luxury and class.',
        category: 'Tables',
        price: 1300.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Milano Dining Table',
        image: '/images/tables/milano-table.jpg',
        description: 'Undeniably beautiful with its clean lines and streamlined appearance, the rectangular Milano dining table will bring a sense of style to any dining room. The perfectly straight edges of the table top accentuate the geometrical expression that defines this modern table. At the same time, slim wooden legs complete the Scandinavian style. Need extra seats? Just pull out the clever, built-in extension leaf and go from a 4-person family meal to a dinner party seating 10.',
        category: 'Tables',
        price: 900.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Sevilla Coffee Table',
        image: '/images/tables/sevilla-coffee-table.jpg',
        description: 'Add a Sevilla table to your living room and add beauty through simplicity and challenging construction principles. The elegant steel legs of the frame meet in the middle in a refined look that gives the table personality and strength.',
        category: 'Tables',
        price: 450.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Madrid Coffee Table',
        image: '/images/tables/madrid-coffee-table.jpg',
        description: 'Clean lines and organic shapes come together in a floating design to make the Madrid table a sensory, vibrant piece for your interior. The exquisite pipe base with integrated storage highlight the elegancy of the design for a contemporary expression.',
        category: 'Tables',
        price: 550.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Chiva Coffee Table',
        image: '/images/tables/chiva-coffee-table.jpg',
        description: 'This modern coffee table is pure functionality wrapped in great design. Hide your remotes, your magazines, your chargers and cables in the heart of the Chiva coffee table, with its clever integrated storage. Or raise the slim table tops to create the perfect height for afternoon tea. Different leg designs offer different heights and functionalities allowing you to get the perfect coffee table for your space.',
        category: 'Tables',
        price: 550.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Cupertino Desk',
        image: '/images/office/cupertino-desk.jpg',
        description: 'Cupertino - everything you need in a home office, hidden away in an instant. The Cupertino Executive desk combines a large table top and roomy drawers with a light design, providing plenty of space for all your office essentials while keeping a minimalist look.',
        category: 'Office',
        price: 1000.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Cupertino Desk White',
        image: '/images/office/cupertino-white.jpg',
        description: 'Cupertino - everything you need in a home office, hidden away in an instant. The Cupertino Executive desk combines a large table top and roomy drawers with a light design, providing plenty of space for all your office essentials while keeping a minimalist look.',
        category: 'Office',
        price: 1000.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Copenhagen Desk',
        image: '/images/office/copenhagen-desk.jpg',
        description: 'Show what you want, hide what you need! Everyone\'s storage needs are different, but the Copenhagen can take care of them all. As functional and flexible as it is beautiful, the Copenhagen is any organiser’s dream. Make Mondays a bit better with this stylish and functional office system that will work hard to keep your office tidy and your workday filled with style.',
        category: 'Office',
        price: 2800.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Elba Outdoor Table',
        image: '/images/outdoor/elba-table.jpg',
        description: 'Comfortable, close to maintenance-free and with a style punch to accompany it, Elba outdoor furniture is the perfect setting for great outdoor moments. With low legs providing a casual chic look, this outdoor lounge table provides the perfect spot for relaxing in the sun.',
        category: 'Outdoor',
        price: 260.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Rome Outdoor Coffee Table',
        image: '/images/outdoor/rome-coffee-table.jpg',
        description: 'Add an elegant centrepiece to your outdoor setting and keep food and drinks at hand even when you’re outdoors. The classic design with the stylish and durable glass surface ensures a balanced look and a functional setting that endures. Use the table alone or in combination with the other sized Rome table for a dynamic look.',
        category: 'Outdoor',
        price: 260.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Austin Bed',
        image: '/images/beds/austin-bed.jpg',
        description: 'Be embraced by the cocooning effect of the Austin bed. The headboard not only looks great, it defines your space and offers a comfortable place to rest. Choose your personal upholstery and create your bedroom haven.',
        category: 'Beds',
        price: 1900.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Arlington Bed',
        image: '/images/beds/arlington-bed.jpg',
        description: 'Great support when sitting against the headboard and a soft landing make the Arlington bed an amazing addition to the bedroom. Just like the extension of a pillow, the soft headboard invites you in for a good night sleep.',
        category: 'Beds',
        price: 2200.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Lugano Storage Bed',
        image: '/images/beds/lugano-bed.jpg',
        description: 'Let your body sink down and feel relaxation wash over you. Sleep like an angel in the elegant Lugano bed. Keeping a minimalist look with a clean wooden frame, this modern bed will bring a sense of calm and serenity to your bedroom. Fitted with a plinth base for a more masculine, heavy look this bed invites you into comfort. The tufted headboard adds a traditional touch and creates a soft, welcoming atmosphere. Lift the bed frame and reveal plenty of storage space for extra bedding, thick winter blankets or perhaps even for hiding presents.',
        category: 'Beds',
        price: 2200.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Houston Storage Bed',
        image: '/images/beds/houston-bed.jpg',
        description: 'Let your body sink down and feel relaxation wash over you. Sleep like an angel in the elegant Lugano bed. Keeping a minimalist look with a clean wooden frame, this modern bed will bring a sense of calm and serenity to your bedroom. Fitted with a plinth base for a more masculine, heavy look this bed invites you into comfort. The tufted headboard adds a traditional touch and creates a soft, welcoming atmosphere. Lift the bed frame and reveal plenty of storage space for extra bedding, thick winter blankets or perhaps even for hiding presents.',
        category: 'Beds',
        price: 2200.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Atlanta Drawer',
        image: '/images/office/atlanta-drawers.jpg',
        description: 'Atlanta is your flexible and individual storage system. Mix and match different units, sizes and colours to create the perfect solution for your space. Atlanta is here to enhance the look and functionality of all rooms.',
        category: 'Office',
        price: 1000.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Lucid Glass Vase',
        image: '/images/accessories/lucid-glass-vase.jpg',
        description: 'Choose a vase perfect for every flower, every room and every occasion. The simple and organic beautify of the \'Lucid\' vase, makes it a perfect choice.',
        category: 'Accessories',
        price: 25.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Float Vase',
        image: '/images/accessories/float-vase.jpg',
        description: 'Choose a vase perfect for every flower, every room and every occasion. The simple and organic beautify of the \'Lucid\' vase, makes it a perfect choice.',
        category: 'Accessories',
        price: 25.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Amass Vase',
        image: '/images/accessories/amass-vase.jpg',
        description: 'Choose a vase perfect for every flower, every room and every occasion. The simple and organic beautify of the \'Lucid\' vase, makes it a perfect choice.',
        category: 'Accessories',
        price: 30.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Orchid Sculpture',
        image: '/images/accessories/orchid-sculpture.jpg',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        category: 'Accessories',
        price: 30.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Hemispere Bowl',
        image: '/images/accessories/hemisphere-bowl.jpg',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        category: 'Accessories',
        price: 30.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Peacock Mirror',
        image: '/images/accessories/pecock-mirror.jpg',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        category: 'Accessories',
        price: 24.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Black Swan Print',
        image: '/images/accessories/black-swan.jpg',
        description: 'Artist Frida Uma was born and raised in Denmark though she has worked and lived in Paris for several years. Her inspiration is the beauty in people and the force of nature and, influenced by the aesthetics of fashion photography and performing arts, Frida Uma in ‘Black Swan’ really sets the scene. The photo only has a few yet effective colours kept in cold tones underlining a melancholic mood. The minimal use of elements draws all attention to the profile as we are drawn to her aesthetic appearance.',
        category: 'Accessories',
        price: 60.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Velvet Cushion',
        image: '/images/accessories/velvet-cushion.jpg',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        category: 'Accessories',
        price: 24.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Pine Table Lamp',
        image: '/images/lamp/pine-cone-lamp.jpg',
        description: 'Designers Charlotte Høncke and Olaf Recht went into nature for their inspiration to the Pine cone lamp. The round shapes and multiple layers combine with the beautiful finish to give the lamp a warm and soft light. Place the lamp beside you bed or on a sideboard to give your home a natural, warm and beautiful touch.',
        category: 'Lightening',
        price: 24.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Kuta Floor Lamp',
        image: '/images/lamp/kuta-floor-lamp.jpg',
        description: 'The Kuta floor lamp has a simple and stylish design. The dominant round shade and the long reach make it the perfect piece to couple with your sofa or dining table. Available in different colours, The Kuta floor lamp is sure to light up your interior.',
        category: 'Lightening',
        price: 24.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
    {
        name: 'Aerial Floor Lamp',
        image: '/images/lamp/aerial-lamp.jpg',
        description: 'The Aerial floor lamp has a simple and stylish design. The dominant round shade and the long reach make it the perfect piece to couple with your sofa or dining table. Available in different colours, The Kuta floor lamp is sure to light up your interior.',
        category: 'Lightening',
        price: 24.99,
        countInStock: 7,
        rating: 3,
        numReviews: 3
    },
]

module.exports = products