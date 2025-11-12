import React from 'react';
import { motion } from 'framer-motion';

const LeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: 'H.E. Ordin Bedri',
      title: 'President of the Harari People\'s Regional State',
      bio: 'Leading the preservation and promotion of Harar\'s rich cultural heritage while fostering sustainable tourism development.',
      image: '/president.jpg'
    },
    {
      name: 'Sami Abdulwasi',
      title: 'Founder and CEO at visit Harar',
      bio: '',
      image: '/ceo.PNG'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-200 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            Visionary Leadership Behind Harar's Revival
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders working to preserve and promote Harar's cultural heritage through innovation and sustainable tourism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-yellow-500"
                  />
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;