
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    review: "Ayesha delivered exceptional work on our AI project. Her technical expertise and attention to detail exceeded our expectations.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    review: "Working with Ayesha was a game-changer for our platform. She implemented complex AI features with remarkable efficiency.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "InnovateLab",
    review: "Ayesha's full-stack development skills are outstanding. She delivered a robust solution that perfectly met our requirements.",
    rating: 5,
    avatar: "ER"
  }
];

const Reviews = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>
          What Clients Say
        </h2>
        <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
        }`}>
          Don't just take my word for it - here's what my clients have to say about working with me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`backdrop-blur-lg border rounded-xl p-6 transition-all duration-300 ${
              resolvedTheme === 'light'
                ? 'bg-white/80 border-gray-200/50 hover:bg-white/90'
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {review.avatar}
              </div>
              <div>
                <h4 className={`font-semibold transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                  {review.name}
                </h4>
                <p className={`text-sm transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/60'
                }`}>
                  {review.role} at {review.company}
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="relative">
              <Quote className="w-8 h-8 text-purple-400 opacity-50 absolute -top-2 -left-2" />
              <p className={`leading-relaxed pl-6 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
              }`}>
                {review.review}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
