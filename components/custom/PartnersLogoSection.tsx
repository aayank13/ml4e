import Image from "next/image";

export default function PartnersLogoSection() {
    return (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
            <p className="font-medium text-gray-700 mb-10">Inspired by teams at</p>
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-5 max-w-5xl opacity-60">
              {[
                { name: 'Mailchimp', logo: '/placeholder.svg' },
                { name: 'DoorDash', logo: '/placeholder.svg' },
                { name: 'Google', logo: '/placeholder.svg' },
                { name: 'Spotify', logo: '/placeholder.svg' },
                { name: 'Webflow', logo: '/placeholder.svg' },
              ].map((partner) => (
                <div key={partner.name} className="flex justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain grayscale"
                  />
                </div>
              ))}
            </div>
            </div>
    )
}