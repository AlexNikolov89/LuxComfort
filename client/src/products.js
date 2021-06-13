import LileImage from './images/chairs/dining-chair-grey.jfif'
import kuper from './images/beds/double-bed.jpg'
import skye from './images/beds/king-size-dark-blue.jpg'
import king from './images/sofas/2-sits/2-sits-sofa.jfif'
import romance from './images/sofas/corner/corner-sofa.jpg'
import comfort from './images/sofas/2-sits/2-sits-sofa.jpg'
import safira from './images/sofas/corner/corner-sofa.jpg'

const products = [
    {
        id: '1',
        name: 'Lile',
        image: LileImage,
        description: 'The perfect seat for dining, our Lule chairs.',
        category: 'Dining Chairs',
        price: 149.99,
        countInStock: 10,
        rating: 3,
        numReviews: 4
    },
    {
        id: '2',
        name: 'Kuper',
        image: kuper,
        description: 'Kiruna Double Bed, Kuper',
        category: 'Beds',
        price: 699.99,
        countInStock: 3,
        rating: 4.5,
        numReviews: 6
    },
    {
        id: '3',
        name: 'Skye',
        image: skye,
        description: 'Skye King Size Bed, Dark Blue Weave with Black Legs',
        category: 'Beds',
        price: 1200.99,
        countInStock: 1,
        rating: 5,
        numReviews: 3
    },
    {
        id: '4',
        name: 'Romance',
        image: romance,
        description: 'Goswell 2 Seater Sofa, Sapphire Blue Velvet',
        category: 'Sofa',
        price: 600.99,
        countInStock: 4,
        rating: 5,
        numReviews: 3
    },
    {
        id: '5',
        name: 'King Corner Sofa',
        image: king,
        description: 'Goswell 2 Seater Sofa, Sapphire Blue Velvet',
        category: 'Sofa',
        price: 600.99,
        countInStock: 4,
        rating: 5,
        numReviews: 3
    },
    {
        id: '6',
        name: 'Comfort 3 Seats Sofa',
        image: comfort,
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        category: 'Sofa',
        price: 999.99,
        countInStock: 2,
        rating: 4,
        numReviews: 2
    },
    {
        id: '7',
        name: 'Safira Corder Seats Sofa',
        image: safira,
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
        category: 'Sofa',
        price: 850.99,
        countInStock: 2,
        rating: 4,
        numReviews: 2
    }
]

export default products