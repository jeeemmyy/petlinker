import { MapPin, Calendar, MessageSquare, Star } from "lucide-react";

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Local Pet Sitters",
    description: "Find trusted sitters in your neighborhood who will care for your pets like family.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Flexible Scheduling",
    description: "Book pet care services that fit your schedule, from daily walks to overnight stays.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Easy Communication",
    description: "Chat directly with sitters to discuss your pet's needs and care requirements.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Verified Reviews",
    description: "Read genuine reviews from pet owners to find the perfect match for your pet.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-primary">PetPal</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;