export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
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
    }
 ];
 
