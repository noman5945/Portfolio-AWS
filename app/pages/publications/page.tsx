import PublicationCard from "@/components/PublicationCard";
import React from "react";

export default function PublicationsPage() {
  const publications = [
    {
      id: 1,
      title: "Bengali Image Captioning Using Vision Encoder-Decoder Model",
      description:
        "We proposed a Vision Encoder-Decoder model for Bengali image captioning, combining image encoding and text decoding to generate descriptive Bengali captions. By combining the Bornon and BanCap datasets, our experiments demonstrated improved performance over recent approaches in both quantitative and qualitative evaluations.",
      authors:
        "Tajrian Islam Ishan, Abdullah Al Noman, Raisa Rokib, Mustavi Ibne Masum, Sifat Ahmed, Faisal Muhammad Shah",
      venue:
        "26th International Conference on Computer and Information Technology (ICCIT)",
      date: "December 13–15, 2023",
      location: "Cox's Bazar, Bangladesh",
      topics: [
        "Bengali Image Captioning",
        "Vision Transformers",
        "BERT",
        "Computer Vision",
        "NLP",
      ],
      link: "https://ieeexplore.ieee.org/document/10441125",
      imagePath: "/images/publications/paper_.png",
    },
  ];
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Page Header */}
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Research
        </p>

        <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          Publications
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Research and academic work exploring topics in computer science and
          software engineering.
        </p>
      </header>

      {/* Publications */}
      <section>
        {publications.map((publication) => {
          return (
            <PublicationCard
              key={publication.id}
              title={publication.title}
              description={publication.description}
              authors={publication.authors}
              venue={publication.venue}
              date={publication.date}
              imagePath={publication.imagePath}
              link={publication.link}
            />
          );
        })}
      </section>
    </main>
  );
}
