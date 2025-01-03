import Image from "next/image";

export default function PartnersLogoSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center my-3 md:my-5">
      <p className="font-medium text-gray-700 mb-10">Inspired by teams at</p>
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-5 max-w-5xl opacity-60">
        {[
          { name: "TensorFlow", logo: "/company-logo/tensorflow.png" },
          { name: "PyTorch", logo: "/company-logo/pytorch.png" },
          { name: "Kaggle", logo: "/company-logo/kaggle.avif" },
          { name: "Hugging Face", logo: "/company-logo/huggingface.png" },
          { name: "OpenAI", logo: "/company-logo/openai.png" },
        ].map((partner) => (
          <div key={partner.name} className="flex justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className="object-cover grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
