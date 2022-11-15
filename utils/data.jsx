import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'User',
            email: 'user@user.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg' ,
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt',
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg' ,
            price: 75,
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 3,
            countInStock: 20,
            description: 'A fit shirt',
        },
        {
            name: 'Classic Shirt',
            slug: 'classic-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg' ,
            price: 55,
            brand: 'Fila',
            rating: 5,
            numReviews: 15,
            countInStock: 20,
            description: 'A classic shirt',
        },
        {
            name: 'Free Pants',
            slug: 'free-pants',
            category: 'Pants',
            image: '/images/pants1.jpg' ,
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular Pant',
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg' ,
            price: 44,
            brand: 'Adidas',
            rating: 3,
            numReviews: 9,
            countInStock: 20,
            description: 'A fit Pant',
        },
        {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg' ,
            price: 33,
            brand: 'Nike',
            rating: 2,
            numReviews: 14,
            countInStock: 20,
            description: 'A classic Pant',
        }
    ]
}

export default data;