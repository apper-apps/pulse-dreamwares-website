import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import NavigationItem from "@/components/molecules/NavigationItem";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

const navigationItems = [
    { label: "Home", href: "#home", active: true },
    { label: "Process", href: "#process", active: false },
    { label: "Portfolio", href: "#portfolio", active: false },
    { label: "Services", href: "#services", active: false },
    { label: "Testimonials", href: "#testimonials", active: false },
    { label: "FAQ", href: "#faq", active: false },
    { label: "Contact", href: "#contact", active: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-transparent"
      )}>
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={item.active}
                  onClick={closeMobileMenu}
                />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <ApperIcon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <Container>
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <NavigationItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    active={item.active}
                    onClick={closeMobileMenu}
                    className="block w-full text-left"
                  />
                ))}
              </nav>
            </Container>
          </div>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;