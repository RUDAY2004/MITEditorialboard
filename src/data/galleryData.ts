
export interface GalleryImage {
  id: number;
  src: string;
  photographer: string;
  alt: string;
  span?: 'col' | 'row' | 'both';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "public/Achinya/IMG_9510.jpeg",
    photographer: "Achintya Singh",
    alt: "Campus Main Building",
    span: "both"
  },
  {
    id: 2,
    src: "public/IMG_5953-Enhanced-NR.jpg",
    photographer: "Priya Gupta",
    alt: "Student Festival",
  },
  {
    id: 3,
    src: "public/Archita/_MG_7532-Enhanced-NR.jpg",
    photographer: "Som Jain",
    alt: "Library Interior",
    span: "row"
  },
  {
    id: 4,
    src: "public/Archita/ILC00174-Enhanced-NR.jpg",
    photographer: "Kshitij Sohoni",
    alt: "Engineering Project",
  },
  {
    id: 5,
    src: "public/Archita/ILC00690.jpg",
    photographer: "Aditya Karigar",
    alt: "Campus Event",
    span: "col"
  },
  {
    id: 6,
    src: "public/Archita/ILC00753.jpg",
    photographer: "Som Jain",
    alt: "Students Collaboration",
  },
  {
    id: 7,
    src: "public/Archita/ILC06671.jpg",
    photographer: "Saptashwa Mondal",
    alt: "Graduation Ceremony",
  },
];
