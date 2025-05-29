import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface Testimonial {
    name: string;
    location: string;
    message: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Random Woman",
        location: "NY, USA",
        message: "Understated, but unforgettable. It feels like it was made for me",
        image: "./user1.png",
    },
    {
        name: "Another Person",
        location: "LA, USA",
        message: "Absolutely stunning. This changed how I see design.",
        image: "./user2.png",
    },
    {
        name: "Creative Lady",
        location: "TX, USA",
        message: "Sleek and minimal. Just what I wanted.",
        image: "./user3.png",
    }
];

const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const navigate = useNavigate();

    const current = testimonials[activeIndex];



    const toggleAccordion = (section: string) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };


    return (
        <>
            <div className="px-6 py-10 space-y-12">
                {/* Brand Title */}
                <div>
                    <h1 className="text-5xl font-light">Eclypse<sup className="text-sm">®</sup></h1>
                </div>

                {/* Hero Section */}
                <div className="w-full">
                    <div className="relative">
                        <img
                            src="./Hero_mp4.png"
                            alt="Hero Woman"
                            className="w-full h-auto object-cover rounded"
                        />
                        <p className="absolute bottom-4 right-4 text-white text-sm bg-black/60 px-3 py-1 rounded">
                            A silhouette worth remembering
                        </p>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="space-y-4">
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Rooted in a philosophy of quiet luxury, our garments are designed to speak
                        softly in cut, in movement, in presence.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-white underline underline-offset-2 hover:text-gray-300 transition"
                    >
                        Learn more about Eclypse <span>↗</span>
                    </a>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {/* First Row: 1st and 2nd image, center aligned */}
                    <div className="col-span-2">
                        <img
                            src="./fashion_shot_01.png"
                            alt="Fashion Shot 1"
                            className="w-full object-cover rounded"
                        />
                    </div>
                    <div className="col-span-1">
                        <img
                            src="./fashion_shot_02.png"
                            alt="Fashion Shot 2"
                            className="w-full object-cover rounded"
                        />
                    </div>

                    {/* Second Row: 3rd, 4th, and 5th image */}
                    <div>
                        <img
                            src="./fashion_shot_03.png"
                            alt="Fashion Shot 3"
                            className="w-full object-cover rounded"
                        />
                    </div>
                    <div>
                        <img
                            src="./fashion_shot_04.png"
                            alt="Fashion Shot 4"
                            className="w-full object-cover rounded"
                        />
                    </div>
                    <div>
                        <img
                            src="./logo.png"
                            alt="Fashion Shot 5"
                            className="w-full object-cover rounded"
                        />
                    </div>
                </div>

            </div>
            <div className="bg-black text-white px-6 py-10">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-light mb-8">
                    Silhouette No. 1 – Vermilion
                </h1>

                {/* Image + Product Details */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {/* Main Image */}
                    <img
                        src="./cart_img.png"
                        alt="Main Product"
                        className="w-full object-cover rounded"
                    />

                    {/* Product Info */}
                    <div className="bg-white text-black p-6 rounded space-y-4">
                        <p className="text-sm text-gray-600">
                            A tailored interpretation in vermilion. Cut from structured wool with a rounded
                            shoulder line and slightly dropped waist, the silhouette projects relaxed stance. Worn
                            here in the editorial as a full set or standalone.
                        </p>

                        {/* Thumbnail Images */}
                        <div className="flex gap-2 overflow-x-auto">
                            {[
                                './cart_01.png',
                                './cart_02.png',
                                './cart_03.png',
                            ].map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Thumb ${index}`}
                                    className="md:w-50 md:h-40 w-40 h-30 object-cover rounded"
                                />
                            ))}
                        </div>

                        {/* Price */}
                        <h2 className="text-3xl py-4 font-semibold">₹ 7,999 <span className="text-sm text-gray-500">incl. of all taxes</span></h2>

                        {/* Size Selection */}
                        <div>
                            <p className="text-sm pt-4 text-gray-700 mb-2">Please select a size:</p>
                            <div className="flex gap-2 flex-wrap">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-3 m-3 border rounded cursor-pointer transition 
        ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-gray-200 text-black border-gray-400 hover:bg-gray-300'}`}
                                    >
                                        {size}
                                    </button>
                                ))}

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-4">
                            <button
                                disabled={!selectedSize}
                                onClick={() => {
                                    if (!selectedSize) return;
                                    setIsAddedToCart(true);
                                    setTimeout(() => {
                                        navigate('/cart');
                                    }, 1500); // redirect after 1.5 seconds
                                }}
                                className={`flex-1 py-2 rounded transition 
      ${selectedSize ? 'bg-black text-white hover:bg-gray-900' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                            >
                                {isAddedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
                            </button>

                            <button className="flex-1 bg-white text-black border border-black py-2 rounded hover:bg-gray-100">
                                Buy
                            </button>
                        </div>

                    </div>
                </div>

                {/* Accordions */}
                <div className="mt-12 space-y-4">
                    {[
                        {
                            title: 'Size & Fit',
                            content: 'This item fits true to size and is designed for a relaxed, effortless silhouette. We recommend choosing your usual size. For a more tailored look, consider sizing down. Please refer to our size guide for detailed measurements.'
                        },
                        {
                            title: 'Delivery & Returns',
                            content: 'Enjoy free delivery within 5–7 business days on all orders. Need to make a return? No problem—our 14-day return policy is simple and hassle-free. We also offer free return shipping for your convenience.'
                        },
                        {
                            title: 'How This Was Made',
                            content: 'Responsibly crafted with eco-conscious fabrics and mindful production practices. Our materials are sustainably sourced, and every piece is made in facilities that uphold fair wages and ethical standards. Feel good wearing what you love.'
                        }
                    ].map(({ title, content }) => (
                        <div key={title}>
                            <button
                                onClick={() => toggleAccordion(title)}
                                className="w-full flex justify-between items-center py-3 border-b border-gray-600 text-left"
                            >
                                <span>{title}</span>
                                <span className="text-xl">
                                    {activeAccordion === title ? '−' : '↓'}
                                </span>
                            </button>
                            {activeAccordion === title && (
                                <p className="text-sm text-gray-300 mt-2">{content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black text-white p-10 flex justify-between items-center rounded-lg max-w-5xl mx-auto">
                {/* Left side: Content */}
                <div className="w-2/3">
                    <p className="text-xs tracking-widest uppercase mb-6">Our Customers</p>
                    <p className="text-2xl md:text-3xl font-light leading-snug">
                        <img src="./quote.png" alt="" className="inline-block mr-4" />{current.message}
                    </p>
                    <div className="mt-6">
                        <p className="font-medium">{current.name}</p>
                        <p className="text-sm text-gray-400">{current.location}</p>
                    </div>
                </div>

                {/* Right side: Profile selector with dynamic sizes */}
                <div className="flex flex-col items-center space-y-4">
                    {testimonials.map((t, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`overflow-hidden rounded-full border-2 transition-all duration-300
                ${isActive ? 'border-white w-20 h-20 z-10' : 'border-transparent w-12 h-12 opacity-60'}
              `}
                                style={{
                                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                }}
                            >
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                            </button>
                        );
                    })}
                </div>
            </div>

        </>
    );
};

export default Home;
