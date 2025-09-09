import React from 'react';
import Container from '@/components/atoms/Container';
import ApperIcon from '@/components/ApperIcon';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
    quote: "Working with DreamWares AI was a game-changer for our business. They delivered a custom automation platform that increased our productivity by 300%. The team's expertise and dedication to understanding our unique needs was exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "StartupLab Inc.",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    quote: "The no-code solution they built for us revolutionized how we handle client onboarding. What used to take weeks now happens in hours. Their technical prowess combined with business acumen is truly remarkable.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Growth Dynamics",
    position: "Operations Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    quote: "From initial consultation to final deployment, the process was seamless. They not only delivered on time and within budget but also provided ongoing support that has been invaluable for our team's success.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    company: "InnovateNow",
    position: "Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
    quote: "The AI-powered testing solution they developed caught critical bugs that our manual testing missed. The ROI was evident within the first month. I highly recommend them for any business looking to leverage technology for growth.",
    rating: 5
  }
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what successful businesses say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-6 text-primary-100">
                <ApperIcon name="Quote" size={32} />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <ApperIcon 
                    key={index}
                    name="Star" 
                    size={20} 
                    className="text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-50 to-transparent rounded-tl-full -z-0"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-600">
            <div className="flex items-center">
              <ApperIcon name="Users" size={24} className="text-primary-500 mr-2" />
              <span className="font-semibold">100+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <ApperIcon name="Award" size={24} className="text-primary-500 mr-2" />
              <span className="font-semibold">99% Satisfaction Rate</span>
            </div>
            <div className="flex items-center">
              <ApperIcon name="Clock" size={24} className="text-primary-500 mr-2" />
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with custom technology solutions.
          </p>
          <button className="bg-white text-primary-600 py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold shadow-lg">
            Get Started Today
          </button>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;