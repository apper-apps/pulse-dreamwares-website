import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';
import { cn } from '@/utils/cn';
import { contactService } from '@/services/api/contactService';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ai-integration', label: 'AI Integration' },
    { value: 'automation', label: 'Process Automation' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setLoading(true);
    
    try {
      await contactService.submitForm(formData);
      toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const trustBadges = [
    { icon: 'Shield', text: 'ISO 27001 Certified' },
    { icon: 'Award', text: '99.9% Uptime SLA' },
    { icon: 'Users', text: '500+ Happy Clients' },
    { icon: 'Clock', text: '24/7 Support' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your digital transformation goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get Your Free Consultation
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
                      errors.name 
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ApperIcon name="AlertCircle" size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
                      errors.email 
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    )}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ApperIcon name="AlertCircle" size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
                      errors.company 
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    )}
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ApperIcon name="AlertCircle" size={14} className="mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors bg-white",
                      errors.projectType 
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    )}
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <ApperIcon name="AlertCircle" size={14} className="mr-1" />
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors resize-vertical",
                    errors.message 
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
                      : "border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  )}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <ApperIcon name="AlertCircle" size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <ApperIcon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <ApperIcon name="Send" size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <ApperIcon 
                        name={badge.icon} 
                        size={24} 
                        className="text-success-500" 
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-medium">
                      {badge.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch Directly
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Phone" size={24} className="text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 mt-1">Ready to talk? Give us a call</p>
                    <a 
                      href="tel:+1-555-123-4567" 
                      className="text-primary-600 hover:text-primary-700 font-semibold mt-2 inline-block"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Mail" size={24} className="text-success-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">Send us an email anytime</p>
                    <a 
                      href="mailto:contact@dreamwares.com" 
                      className="text-success-600 hover:text-success-700 font-semibold mt-2 inline-block"
                    >
                      contact@dreamwares.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name="MapPin" size={24} className="text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600 mt-1">Come visit our office</p>
                    <p className="text-gray-700 mt-2">
                      123 Innovation Drive<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <ApperIcon name="Clock" size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Quick Response</h3>
              </div>
              <p className="text-primary-100 mb-4">
                We understand time is valuable. That's why we guarantee:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ApperIcon name="CheckCircle" size={20} className="mr-3 text-success-300" />
                  <span>Response within 2 hours during business hours</span>
                </li>
                <li className="flex items-center">
                  <ApperIcon name="CheckCircle" size={20} className="mr-3 text-success-300" />
                  <span>Free consultation call within 24 hours</span>
                </li>
                <li className="flex items-center">
                  <ApperIcon name="CheckCircle" size={20} className="mr-3 text-success-300" />
                  <span>Detailed project proposal within 3 business days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;