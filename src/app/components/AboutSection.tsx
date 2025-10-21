'use client';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900">
      <div className="container mx-auto max-w-6xl">
        {/* About Content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Innovating Marketing, Inspiring Growth.
          </h2>
          <p className="text-purple-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At Combine Zenith, we believe in the transformative power of data-driven creativity. Our
            expert team leverages cutting-edge technology and strategic insights to help businesses
            thrive in the dynamic digital landscape. We are more than just an agency; we are your
            dedicated partner in achieving sustained growth and measurable success.
          </p>
        </div>

        {/* Trusted By Section */}
        <div className="bg-purple-800/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-purple-700/50">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Trusted by Industry Leaders.
          </h3>
          
          {/* Logo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="w-32 h-16 bg-purple-700/30 rounded-lg flex items-center justify-center hover:bg-purple-600/40 transition-colors group"
              >
                <div className="text-purple-300 group-hover:text-purple-200 transition-colors font-semibold">
                  Logo {index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}