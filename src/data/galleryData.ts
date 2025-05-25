
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
    src: "/Achinya/IMG_9510.jpeg",
    photographer: "Achintya Singh",
    alt: "Campus Main Building",
    span: "both"
  },
  {
    id: 2,
    src: "/IMG_5953-Enhanced-NR.jpg",
    photographer: "Priya Gupta",
    alt: "Student Festival",
  },
  {
    id: 3,
    src: "/Archita/_MG_7532-Enhanced-NR.jpg",
    photographer: "Som Jain",
    alt: "Library Interior",
    span: "row"
  },
  {
    id: 4,
    src: "/Archita/ILC00174-Enhanced-NR.jpg",
    photographer: "Kshitij Sohoni",
    alt: "Engineering Project",
  },
  {
    id: 5,
    src: "/Archita/ILC00690.jpg",
    photographer: "Aditya Karigar",
    alt: "Campus Event",
    span: "col"
  },
  {
    id: 6,
    src: "/Archita/ILC00753.jpg",
    photographer: "Som Jain",
    alt: "Students Collaboration",
  },
  {
    id: 7,
    src: "/Archita/ILC06671.jpg",
    photographer: "Saptashwa Mondal",
    alt: "Graduation Ceremony",
  },
];
