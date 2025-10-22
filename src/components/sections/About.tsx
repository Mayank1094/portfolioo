import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Database Design', level: 88 },
];

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful interfaces with attention to detail',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in team environments',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience building modern web applications
          </p>
        </motion.div>

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          <p className="text-muted-foreground mb-4 text-center">
            I started my journey in web development during college, fascinated by how code can bring ideas to life. Since then, I've worked with startups and established companies, helping them build products that users love.
          </p>
          <p className="text-muted-foreground text-center">
            My approach combines technical expertise with a deep understanding of user needs. I believe great software is not just about clean code—it's about solving real problems and creating delightful experiences.
          </p>
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">What I Bring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-hero"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
