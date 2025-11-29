import React from "react";
import { Shield, Clock, Brain, Mic, FileText } from "lucide-react";
import Navbar from "../components/Navbar";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "HIPAA compliant with end-to-end encryption",
    },
    {
      icon: Clock,
      title: "Saves Time",
      description: "Reduce documentation time by up to 70%",
    },
    {
      icon: Brain,
      title: "AI-Powered Accuracy",
      description: "Medical terminology recognition with 98% accuracy",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Speak Naturally",
      description: "Dictate clinical notes in your own words",
    },
    {
      number: 2,
      title: "AI Transcribes",
      description: "Advanced AI converts speech to text instantly",
    },
    {
      number: 3,
      title: "Review & Finalize",
      description: "Edit and approve your documentation",
    },
    {
      number: 4,
      title: "Export",
      description: "Integrate with your EHR system",
    },
  ];

  const testimonials = [
    {
      name: "Diana Hanser",
      role: "Primary Care Physician",
      text: "MedDoc AI has transformed my practice. Documentation is faster and more accurate than ever before.",
    },
    {
      name: "Negash Nestoroo",
      role: "Emergency Medicine",
      text: "The speech recognition is incredibly accurate, even in the busiest ER environments. A game changer!",
    },
    {
      name: "Hassa Janessea",
      role: "Internal Medicine",
      text: "I can focus more on patients and less on paperwork. It has been truly life-changing for my practice.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Transforming Clinical Documentation with AI
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-teal-50">
                Secure, efficient, and intelligent speech-to-text for healthcare
                professionals
              </p>
              <button className="bg-white text-teal-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-50 active:bg-teal-100 transition shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                {/* Circular background */}
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {/* Microphone Icon */}
                  <div className="absolute  left-4 sm:left-4 lg:left-4">
                    <Mic
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white"
                     strokeWidth={1.5}
                    />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    </div>
                  </div>

                  {/* Document Icon */}
                  <div className="absolute right-8 sm:right-10 lg:right-12">
                    <FileText
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gray-800">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon
                    className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gray-800">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Number Circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold shadow-md">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gray-800">
            Testimonials
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6">
                {/* Avatar and Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full mr-3 sm:mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Experience the Future of Medical Records
          </h2>
          <button className="bg-white text-teal-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-teal-50 active:bg-teal-100 transition shadow-md hover:shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <a href="#" className="hover:text-teal-500 transition">
              MedDoc AI
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              Privacy and License
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              Healthcare Facilities | Healthcare
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              Support | Articles
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
