import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Idea: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const payload = {
        name: formData.Name.trim(),
        email: formData.Email.trim(),
        idea: formData.Idea.trim(),
      };
  
      console.log('📤 Sending payload:', payload);
  
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycby8UvSFJQNg4VZEEOqyvi-KXkJqiNqCIHxBDTvOYcr12AjiHL5oarMcTMgyF7wUiDWi/exec',
          {
            method: 'POST',
            mode: 'no-cors', // Add this to handle CORS
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        );
  
        // Since we're using no-cors, we can't access the response
        alert('Thank you for sharing your idea! We will get back to you soon.');
        setFormData({ Name: '', Email: '', Idea: '' });
      } catch (error) {
        console.error('❌ Error submitting form:', error);
        alert('Sorry, there was an error submitting your idea. Please try again later.');
      }
    };
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Engaging Content */}
          <div className="appear-on-scroll space-y-6">
            <h2 className="text-3xl font-bold mb-6">
              <span className="fancy-underline">Join Our Creative Journey</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Be part of MIT Editorial Board - the creative hub behind MIT's official yearbook, newsletters, and social media presence. We're looking for passionate storytellers, designers, and content creators.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-edboard-accent text-2xl">✦</span>
                <p className="text-foreground/80">Create content for MIT's official yearbook and newsletters</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-edboard-accent text-2xl">✦</span>
                <p className="text-foreground/80">Shape engaging social media narratives for the institute</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-edboard-accent text-2xl">✦</span>
                <p className="text-foreground/80">Document and preserve MIT's memorable moments</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-edboard-accent text-2xl">✦</span>
                <p className="text-foreground/80">Build a network with creative minds across departments</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-edboard-accent text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1"
            >
              Explore More
            </a>
          </div>

          {/* Right side - Form */}
          <div className="appear-on-scroll">
            <h2 className="text-3xl font-bold mb-6">
              <span className="fancy-underline">Share Your Ideas</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.Name}
                  onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-edboard-accent focus:outline-none text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.Email}
                  onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-edboard-accent focus:outline-none text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="idea" className="block text-foreground/80 mb-2">Your Idea</label>
                <textarea
                  id="idea"
                  value={formData.Idea}
                  onChange={(e) => setFormData({ ...formData, Idea: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-card border border-border focus:border-edboard-accent focus:outline-none h-32 text-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-edboard-accent text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-edboard-accent/20 transition-all transform hover:-translate-y-1"
              >
                Submit Your Idea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;