export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    bgTextColor: string; // For the large blurred background text
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
 }
 
 export const products: Product[] = [
    {
        id: "chicken",
        name: "Chicken Dum Biryani",
        subName: "Layered. Slow-cooked. Perfected.",
        price: "₹249",
        description: "Slow cooked - Handcrafted spices - Authentic dum",
        folderPath: "/images/chicken",
        themeColor: "#D4A373",
        bgTextColor: "rgba(212, 163, 115, 0.1)",
        gradient: "linear-gradient(135deg, #8B5E3C 0%, #D4A373 100%)",
        features: ["Slow Cooked", "Handcrafted Spices", "Authentic Dum"],
        stats: [
          { label: "Spice Level", val: "Medium" },
          { label: "Cooking Time", val: "2 hrs" },
          { label: "Layers", val: "5+" }
        ],
        section1: { title: "Chicken Dum Biryani.", subtitle: "Layered perfection." },
        section2: { title: "Aromatic basmati layers.", subtitle: "Each grain infused with saffron, ghee, and spices." },
        section3: { title: "Slow-cooked to perfection.", subtitle: "Sealed and cooked on dum for deep flavor infusion." },
        section4: { title: "Authentic. Traditional.", subtitle: "" },
        detailsSection: {
            title: "Crafted with Tradition",
            description: "Prepared using age-old dum techniques with premium basmati rice, marinated chicken, fried onions, and spices, sealed and slow-cooked to lock aroma.",
            imageAlt: "Biryani Details"
        },
        freshnessSection: {
            title: "Freshly Prepared",
            description: "Cooked fresh for every order. No reheating. Dum process ensures deep flavor and moisture retention."
        },
        buyNowSection: {
            price: "₹249",
            unit: "per serving",
            processingParams: ["Slow Cooked", "Sealed Dum", "Freshly Made"],
            deliveryPromise: "Hot delivery within 45 minutes with aroma sealed packaging.",
            returnPolicy: "Not satisfied? Instant replacement available."
        }
    },
    {
        id: "mutton",
        name: "Mutton Dum Biryani",
        subName: "Tender. Rich. Royal.",
        price: "₹349",
        description: "Premium cuts - Saffron infused - Royal heritage",
        folderPath: "/images/chicken", // Reusing chicken frames for the demo as requested
        themeColor: "#8B4513",
        bgTextColor: "rgba(139, 69, 19, 0.1)",
        gradient: "linear-gradient(135deg, #4A2C10 0%, #8B4513 100%)",
        features: ["Prime Mutton", "Saffron Rich", "Royal Dum"],
        stats: [
          { label: "Spice Level", val: "High" },
          { label: "Cooking Time", val: "3 hrs" },
          { label: "Layers", val: "7+" }
        ],
        section1: { title: "Mutton Dum Biryani.", subtitle: "The Royal Choice." },
        section2: { title: "Succulent Prime Cuts.", subtitle: "Slow-cooked mutton that melts in your mouth." },
        section3: { title: "Saffron Infusion.", subtitle: "Rich Kashmiri saffron for an unmistakable aroma." },
        section4: { title: "Rich. Indulgent.", subtitle: "" },
        detailsSection: {
            title: "A Royal Heritage",
            description: "Our Mutton Biryani is inspired by the Nizami kitchens, using tender cuts of goat meat marinated in yogurt and hand-ground spices for 24 hours.",
            imageAlt: "Mutton Biryani Details"
        },
        freshnessSection: {
            title: "Royal Freshness",
            description: "Slow-cooked in small batches to preserve the delicate texture of the mutton."
        },
        buyNowSection: {
            price: "₹349",
            unit: "per serving",
            processingParams: ["24hr Marination", "Prime Cuts", "Slow Dum"],
            deliveryPromise: "Heritage taste delivered in 50 minutes.",
            returnPolicy: "Guaranteed tenderness or full refund."
        }
    },
    {
        id: "veg",
        name: "Paneer Dum Biryani",
        subName: "Fresh. Vibrant. Aromatic.",
        price: "₹199",
        description: "Farm fresh paneer - Handpicked veggies - Light & flavorful",
        folderPath: "/images/chicken", // Reusing chicken frames for the demo
        themeColor: "#2D5A27",
        bgTextColor: "rgba(45, 90, 39, 0.1)",
        gradient: "linear-gradient(135deg, #1A3C15 0%, #2D5A27 100%)",
        features: ["Malai Paneer", "Garden Fresh", "Aromatic Spices"],
        stats: [
          { label: "Spice Level", val: "Mild" },
          { label: "Cooking Time", val: "1.5 hrs" },
          { label: "Layers", val: "4+" }
        ],
        section1: { title: "Veg Dum Biryani.", subtitle: "Vibrant and Fresh." },
        section2: { title: "Soft Malai Paneer.", subtitle: "Handcrafted paneer cubes tossed in aromatic spices." },
        section3: { title: "Handpicked Vegetables.", subtitle: "Carrots, beans, and peas selected for sweetness and crunch." },
        section4: { title: "Light. Flavorful.", subtitle: "" },
        detailsSection: {
            title: "Garden to Plate",
            description: "A vegetarian masterpiece using seasonal vegetables and premium paneer, layered with long-grain basmati and fresh mint leaves.",
            imageAlt: "Veg Biryani Details"
        },
        freshnessSection: {
            title: "Garden Fresh",
            description: "Each serving contains the nutrients and flavor of farm-fresh produce."
        },
        buyNowSection: {
            price: "₹199",
            unit: "per serving",
            processingParams: ["Fresh Paneer", "Organic Veggies", "Light Dum"],
            deliveryPromise: "Green delivery within 35 minutes.",
            returnPolicy: "Easy exchange if not fresh."
        }
    }
 ];
 
