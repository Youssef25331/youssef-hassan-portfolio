"use client"
import { useScroll, useMotionValue, useEffect } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';

// Component for each item
const ScrollAnimatedItem = ({ item, index }) => {
  const ref = useRef(null);
  const opacity = useMotionValue(0); // Reactive opacity value
  const { scrollY } = useScroll(); // Get scroll position

  useEffect(() => {
    const updateOpacity = () => {
      if (ref.current) {
        const elementTop = ref.current.offsetTop; // Top position of the element
        const elementHeight = ref.current.offsetHeight; // Element's height
        const viewportHeight = window.innerHeight; // Viewport height
        const viewportCenter = scrollY.get() + viewportHeight / 2; // Center of the viewport
        const elementCenter = elementTop + elementHeight / 2; // Center of the element
        const distance = Math.abs(elementCenter - viewportCenter); // Distance from center
        const maxDistance = viewportHeight / 2; // Range where opacity changes
        const newOpacity = Math.max(0, 1 - distance / maxDistance); // Calculate opacity
        opacity.set(newOpacity); // Update opacity
      }
    };

    // Update opacity whenever scroll position changes
    scrollY.onChange(updateOpacity);
    return () => scrollY.clearListeners(); // Cleanup
  }, [scrollY, opacity]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }} // Bind opacity to the MotionValue
      initial={{ y: 20 + (index % 3 * 6) }} // Keep your initial y offset
      className="flex gap-2"
      key={item.name}
    >
      {item.name} {/* Your item content */}
    </motion.div>
  );
};

// Parent component to render the list
const ParentComponent = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ScrollAnimatedItem item={item} index={index} key={item.name} />
      ))}
    </div>
  );
};

// Example usage
const items = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  // Add more items as needed
];

export default function App() {
  return <ParentComponent items={items} />;
}
