import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Database, Paintbrush, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications using React, TypeScript, and modern frameworks.',
    features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust server-side solutions with Node.js, databases, and RESTful APIs.',
    features: ['Node.js & Express', 'PostgreSQL & MongoDB', 'REST & GraphQL', 'Authentication'],
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Designing intuitive, beautiful interfaces that prioritize user experience and accessibility.',
    features: ['Figma & Design Systems', 'Responsive Design', 'Accessibility', 'User Research'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    description: 'Ensuring seamless experiences across all devices with mobile-first design principles.',
    features: ['Responsive Layouts', 'Touch Optimization', 'Progressive Web Apps', 'Cross-browser Testing'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, efficiency, and excellent Core Web Vitals scores.',
    features: ['Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Bundle Analysis'],
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Integrating third-party services and building custom APIs for complex functionalities.',
    features: ['REST APIs', 'Payment Gateways', 'Social Auth', 'Cloud Services'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-card transition-all hover:-translate-y-2">
                <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
