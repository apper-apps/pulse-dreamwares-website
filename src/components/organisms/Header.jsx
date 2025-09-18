import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { cn } from "@/utils/cn";
import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import NavigationItem from "@/components/molecules/NavigationItem";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { AuthContext } from "../../App";
import { navigationService } from "@/services/api/navigationService";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navigationItems, setNavigationItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.user);

  // Load navigation items from database
  useEffect(() => {
    const loadNavigationItems = async () => {
      setLoading(true);
      try {
        const items = await navigationService.getAll();
        setNavigationItems(items);
      } catch (error) {
        console.error("Error fetching navigation items:", error);
        // Fallback navigation items
        setNavigationItems([
          { Name: "Home", label_c: "Home", href_c: "#home", active_c: true },
          { Name: "Process", label_c: "Process", href_c: "#process", active_c: false },
          { Name: "Portfolio", label_c: "Portfolio", href_c: "#portfolio", active_c: false },
          { Name: "Services", label_c: "Services", href_c: "#services", active_c: false },
          { Name: "Testimonials", label_c: "Testimonials", href_c: "#testimonials", active_c: false },
          { Name: "FAQ", label_c: "FAQ", href_c: "#faq", active_c: false },
          { Name: "Contact", label_c: "Contact", href_c: "#contact", active_c: false }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadNavigationItems();
  }, []);

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
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700" 
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
                  key={item.Name}
                  label={item.label_c}
                  href={item.href_c}
                  active={item.active_c}
                  onClick={closeMobileMenu}
                />
              ))}
              
              {/* Logout Button */}
              {isAuthenticated && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="ml-4"
                >
                  <ApperIcon name="LogOut" size={16} className="mr-1" />
                  Logout
                </Button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-200"
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
<div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg">
            <Container>
<nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <NavigationItem
                    key={item.Name}
                    label={item.label_c}
                    href={item.href_c}
                    active={item.active_c}
                    onClick={closeMobileMenu}
                    className="block w-full text-left"
                  />
                ))}
                
                {/* Mobile Logout Button */}
                {isAuthenticated && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={logout}
                    className="w-full mt-4"
                  >
                    <ApperIcon name="LogOut" size={16} className="mr-2" />
                    Logout
                  </Button>
                )}
              </nav>
            </Container>
          </div>
        )}
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;