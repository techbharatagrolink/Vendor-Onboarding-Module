import Image from "next/image";

export default function TestimonialCard({ testimonial }) {
    return (
        <div className="w-full md:w-1/4 bg-white p-4">
            <div className="max-w-xs p-4 border border-appText rounded-xl shadow-sm bg-white">
                <div className="flex items-start gap-3">
                    <Image
                        src="/Group 2.png"
                        alt="Priyank Kaushik"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm text-appText mb-2">
                            Excited to join Bharat Agrolink! Looking forward to growing my store and reaching more customers across multiple categories.

                        </p>
                        <p className="text-sm font-semibold text-appText">
                            Priyank Kaushik,
                        </p>
                        <p className="text-sm text-appText">Agritech Technology</p>
                    </div>
                </div>
            </div>
        </div>
    );
}