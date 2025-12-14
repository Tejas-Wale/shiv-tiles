// Mock customer reviews

export const mockReviews = [
  {
    id: 1,
    productId: 1,
    customerName: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent quality tiles! The marble finish looks absolutely premium. Installation was smooth and the result is stunning.',
    date: '2024-03-10',
    helpful: 15,
  },
  {
    id: 2,
    productId: 1,
    customerName: 'Priya Sharma',
    rating: 4,
    comment: 'Beautiful tiles, but slightly more expensive than expected. Quality is top-notch though.',
    date: '2024-03-15',
    helpful: 8,
  },
  {
    id: 3,
    productId: 4,
    customerName: 'Amit Patel',
    rating: 5,
    comment: 'Perfect for my kitchen backsplash. Classic subway tile look that never goes out of style.',
    date: '2024-03-20',
    helpful: 12,
  },
  {
    id: 4,
    productId: 4,
    customerName: 'Sneha Reddy',
    rating: 5,
    comment: 'Great quality and easy to clean. Highly recommend for kitchen renovations!',
    date: '2024-03-18',
    helpful: 10,
  },
  {
    id: 5,
    productId: 14,
    customerName: 'Vikram Singh',
    rating: 5,
    comment: 'Smooth operation and looks very elegant. Chrome finish is perfect.',
    date: '2024-02-25',
    helpful: 7,
  },
  {
    id: 6,
    productId: 17,
    customerName: 'Meera Iyer',
    rating: 5,
    comment: 'This rain shower system transformed my bathroom! Feels like a spa at home.',
    date: '2024-02-28',
    helpful: 18,
  },
  {
    id: 7,
    productId: 17,
    customerName: 'Arjun Nair',
    rating: 4,
    comment: 'Great product but installation requires professional help. Worth the investment.',
    date: '2024-03-05',
    helpful: 9,
  },
  {
    id: 8,
    productId: 11,
    customerName: 'Kavita Desai',
    rating: 5,
    comment: 'Modern and stylish basin. Perfectly complements my bathroom design.',
    date: '2024-03-12',
    helpful: 11,
  },
  {
    id: 9,
    productId: 6,
    customerName: 'Rahul Joshi',
    rating: 5,
    comment: 'Beautiful mosaic pattern. My bathroom looks so much better now!',
    date: '2024-03-08',
    helpful: 14,
  },
  {
    id: 10,
    productId: 2,
    customerName: 'Deepa Menon',
    rating: 4,
    comment: 'Love the wood finish look. Gives a warm feeling to the room.',
    date: '2024-02-20',
    helpful: 6,
  },
  {
    id: 11,
    productId: 10,
    customerName: 'Sanjay Gupta',
    rating: 5,
    comment: 'Premium quality tiles at reasonable price. Excellent purchase!',
    date: '2024-03-22',
    helpful: 13,
  },
  {
    id: 12,
    productId: 15,
    customerName: 'Anita Kapoor',
    rating: 5,
    comment: 'The matte black finish is stunning! Pull-down sprayer works perfectly.',
    date: '2024-03-17',
    helpful: 16,
  },
  {
    id: 13,
    productId: 7,
    customerName: 'Karan Malhotra',
    rating: 5,
    comment: 'Excellent anti-slip performance. Safety first, and these deliver!',
    date: '2024-03-14',
    helpful: 9,
  },
  {
    id: 14,
    productId: 20,
    customerName: 'Pooja Agarwal',
    rating: 4,
    comment: 'Good quality accessory set. All pieces match perfectly.',
    date: '2024-03-11',
    helpful: 7,
  },
  {
    id: 15,
    productId: 28,
    customerName: 'Rohit Verma',
    rating: 5,
    comment: 'Luxurious gold finish adds elegance to my bathroom. Love it!',
    date: '2024-03-25',
    helpful: 12,
  },
];

// Generate more reviews for products without reviews
const additionalReviews = [];
const reviewId = 16;

export const getAllReviews = () => {
  return [...mockReviews, ...additionalReviews];
};

export const getReviewsByProductId = (productId) => {
  return mockReviews.filter(review => review.productId === productId);
};

export const getAverageRating = (productId) => {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / productReviews.length).toFixed(1);
};
