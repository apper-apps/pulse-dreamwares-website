import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { testimonialService } from "@/services/api/testimonialService";
import ApperIcon from "@/components/ApperIcon";
import Container from "@/components/atoms/Container";
function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load testimonials from database
  useEffect(() => {
    const loadTestimonials = async () => {
      setLoading(true);
      try {
        const items = await testimonialService.getAll();
        setTestimonials(items);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Fallback data
        setTestimonials([
          {
            Id: 1,
            name_c: "Sarah Johnson",
            company_c: "TechFlow Solutions", 
            position_c: "CEO",
            image_c: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
            quote_c: "Working with DreamWares AI was a game-changer for our business. They delivered a custom automation platform that increased our productivity by 300%. The team's expertise and dedication to understanding our unique needs was exceptional.",
            rating_c: 5
          },
          {
            Id: 2,
            name_c: "Michael Chen",
            company_c: "StartupLab Inc.",
            position_c: "CTO",
            image_c: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
            quote_c: "The no-code solution they built for us revolutionized how we handle client onboarding. What used to take weeks now happens in hours. Their technical prowess combined with business acumen is truly remarkable.",
            rating_c: 5
          },
          {
            Id: 3,
            name_c: "Emily Rodriguez",
            company_c: "Growth Dynamics",
            position_c: "Operations Director",
            image_c: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
            quote_c: "From initial consultation to final deployment, the process was seamless. They not only delivered on time and within budget but also provided ongoing support that has been invaluable for our team's success.",
            rating_c: 5
          },
          {
            Id: 4,
            name_c: "David Thompson",
            company_c: "InnovateNow",
            position_c: "Founder",
            image_c: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
            quote_c: "The AI-powered testing solution they developed caught critical bugs that our manual testing missed. The ROI was evident within the first month. I highly recommend them for any business looking to leverage technology for growth.",
            rating_c: 5
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
}, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't just take our word for it. Here's what successful businesses say about working with us.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.Id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden hover:border-primary-200"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute top-4 right-6 text-primary-100"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 15,
                  color: "#2563EB" 
                }}
              >
                <ApperIcon name="Quote" size={32} />
              </motion.div>

              {/* Rating Stars */}
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
              >
                {[...Array(testimonial.rating_c)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (index * 0.2) + 0.5 + (starIndex * 0.1)
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <ApperIcon 
                      name="Star" 
                      size={20} 
                      className="text-yellow-400 fill-current hover:text-yellow-500" 
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.blockquote 
                className="text-gray-700 text-lg leading-relaxed mb-6 italic relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index * 0.2) + 0.6 }}
              >
                "{testimonial.quote_c}"
              </motion.blockquote>

              {/* Client Info */}
              <motion.div 
                className="flex items-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index * 0.2) + 0.8 }}
              >
                <motion.img
                  src={testimonial.image_c}
                  alt={testimonial.name_c}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-100 mr-4"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">
                    {testimonial.name_c}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonial.position_c}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company_c}
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent rounded-tl-full -z-0"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index * 0.2) + 1.0 }}
              />
            </motion.div>
          ))}
        </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent rounded-tl-full -z-0"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index * 0.2) + 1.0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-600">
            {[
              { icon: "Users", text: "100+ Happy Clients" },
              { icon: "Award", text: "99% Satisfaction Rate" },
              { icon: "Clock", text: "24/7 Support" }
            ].map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <ApperIcon name={indicator.icon} size={24} className="text-primary-500 mr-2" />
                </motion.div>
                <span className="font-semibold">{indicator.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ready to Join Our Success Stories?
            </motion.h3>
            <motion.p 
              className="text-primary-100 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Let's discuss how we can help transform your business with custom technology solutions.
            </motion.p>
            <motion.button 
              className="bg-white text-primary-600 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;